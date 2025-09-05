import Header from './components/Header';
import Nav from './components/Nav';
import ProductCard from './components/ProductCard';
import ProductObject from './types/ProductObject'
import { useEffect, useState } from 'react';



export default function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch('./data/products.json');
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Error while retrieving products");
    }
    setProducts(data.recommended);
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