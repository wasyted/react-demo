export default function Banner() {
  return (
    <div className='relative p-8 xl:p-0 flex items-center justify-center max-w-[1440px] mx-auto w-full'>
      <div className='flex-1 w-full justify-center flex items-center xl:items-start p-8 gap-2 xl:flex-col'>
        <div>
          <h1 className='max-w-[12ch] tracking-tight capitalize text-4xl xl:leading-[1.1] xl:text-[55px] bricolage-grotesque-bold text-neutral-800'>Promo de Lanzamiento <span className="bg-pink-200 px-4">10% OFF</span></h1>
          <p className="max-w-[45ch] text-neutral-600 mt-4 mb-6">Aprovechá desde 5/9/25 hasta el 19/9/25 un 10% de descuento en toda la tienda!*</p>
        </div>
        <button className='bg-white min-w-32 border border-neutral-800 p-2 '>
          Ver tienda
        </button>
      </div>
      <div className='flex-1 max-h-[600px] hidden overflow-hidden xl:flex items-center w-full'>
        <img className='object-cover w-full h-full' src="/budin-frutos-secos.png" alt="budin de frutos secos" />
      </div>
    </div>
  )
}