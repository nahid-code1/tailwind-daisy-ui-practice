
import { Menu } from 'lucide-react';
import './App.css'
import CustomNavbar from './Components/Navbar/CustomNavbar';
import { useState } from 'react';

function App() {
  const navItems = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Services", url: "/services" },
  { id: 4, name: "Portfolio", url: "/portfolio" },
  { id: 5, name: "Blog", url: "/blog" },
  { id: 6, name: "Contact", url: "/contact" },
];
  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }

  return (
    <>

    <nav className='flex justify-between mx-10 '>
      <span  className='flex cursor-pointer' onClick={handleOpen}>
        {open? 'true':'false'}
        <Menu className='md:hidden'></Menu>
        <p className='ml-4'>My Navbar</p>
        
      </span>
      <ul className='flex'>
        {
        navItems.map(items => <CustomNavbar items = {items}></CustomNavbar>)
      }
      </ul>
    </nav>
    <p className='text-9xl text-amber-600'>hello world</p>

    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default App
