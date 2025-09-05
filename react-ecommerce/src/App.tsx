import { useEffect, useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import ProductCard from './components/ProductCard';
import ProductObject from './types/ProductObject';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchCartData, sendCartData } from './store/cart-actions';

let isInitial = true;

export default function App() {
  const dispatch = useAppDispatch(); // Use the typed dispatch hook
  const cart = useAppSelector((state) => state.cart);
  const [products, setProducts] = useState<ProductObject[]>([]);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    // You'll need to add a 'changed' flag to your cart slice for this to work
    // if (cart.changed) {
      dispatch(sendCartData(cart));
    // }
  }, [cart, dispatch]);

  const getProducts = async () => {
    try {
      const response = await fetch('./data/products.json');
      if (!response.ok) {
        throw new Error("Error while retrieving products");
      }
      const data = await response.json();
      setProducts(data.recommended);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <Nav />
      <Header />
      <section>
        <h2 className='tracking-tight capitalize text-xl xl:text-[35px] text-center bricolage-grotesque-bold text-neutral-800 p-4 xl:p-8  pb-0'>Productos recomendados</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-8 p-2 pt-8 xl:pt-0 max-w-[1440px] mx-auto'>
          {products && products.map((product: ProductObject, index) => <ProductCard key={index} title={product.title} price={product.price} image={product.image} />)}
        </div>
      </section>
    </>
  )
}