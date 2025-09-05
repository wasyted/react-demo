import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';
import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';

export const fetchCartData = createAsyncThunk(
  'cart/fetchData',
  async (_, { dispatch }) => {
    try {
      const cartCollection = collection(db, 'cart');
      const cartSnapshot = await getDocs(cartCollection);
      const cartData = cartSnapshot.docs.map((doc) => doc.data())[0];
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );
    }
  }
);

export const sendCartData = createAsyncThunk(
  'cart/sendCartData',
  async (cart: { items: any[]; totalQuantity: number }, { dispatch }) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    try {
      await setDoc(doc(db, 'cart', 'cart'), {
        items: cart.items,
        totalQuantity: cart.totalQuantity,
      });

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  }
);