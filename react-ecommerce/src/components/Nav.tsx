import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
    <nav className='bg-white z-50 border-b py-4 px-8 w-full sticky top-0 flex items-center justify-between'>
      <button>
        <MenuIcon />
      </button>
      <img className='w-12 h-12' alt='brand logo' src='/laloamasalogo-round.png' />
      <button>
        <ShoppingBasketOutlinedIcon />
      </button>
    </nav>
  )
}