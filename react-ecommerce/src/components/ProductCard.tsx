import { ShoppingBagOutlined } from "@mui/icons-material";

export default function ProductCard({ title, price, image }: {
  title: string, price: number, image: {
    url: string, alt: string, width?: number, height?: number
  }
}) {
  return (
    <div className='lexend-normal flex items-start justify-center relative overflow-hidden border rounded-md min-h-96'>
      <p className='z-2 absolute top-0 w-full capitalize p-2 xl:text-lg text-center bg-white'>
        {title}
      </p>
      <img className='object-cover h-full w-full'
        src={image.url}
        alt={image.url}
        width={image.width}
        height={image.height}
      />
      <div className='p-2 text-center bg-white flex items-center justify-between absolute bottom-0 left-0 w-full'>
        <p className='flex-1'>${price.toFixed(2)}</p>
        <ShoppingBagOutlined className='flex-1 border-l' />
      </div>
    </div>
  )
}