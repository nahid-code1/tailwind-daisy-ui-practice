
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
{/* For TSX uncomment the commented types below */}
<span className="countdown font-mono text-6xl">
  <span style={{"00":59, "--digits":2} /* as React.CSSProperties */ } aria-live="polite" >59</span>
</span>

<button className="btn sm:hidden" popoverTarget="my-megamenu-3">Menu</button>
<div className="megamenu max-sm:megamenu-vertical megamenu-wide p-2 border border-base-300" id="my-megamenu-3" popover="auto">
  <span className="megamenu-active"></span>

  <button popoverTarget="c1">One</button>
  <div id="c1" popover="auto">
    <div className="flex max-sm:flex-col items-start">
      <ul className="menu w-full md:menu-horizontal">
        <li>
          <a>Enterprise</a>
          <ul>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
          </ul>
        </li>
        <li>
          <a>Company</a>
          <ul>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
      </ul>
      <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" className="md:max-w-sm max-md:w-auto" alt="Tailwind CSS megamenu" />
    </div>
  </div>

  <button popoverTarget="c2">Two</button>
  <div id="c2" popover="auto">
    <div className="flex max-sm:flex-col items-start">
      <ul className="menu w-full md:menu-horizontal">
        <li>
          <a>Enterprise</a>
          <ul>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
        <li>
          <a>Products</a>
          <ul>
            <li><a>UI Kit</a></li>
            <li><a>WordPress themes</a></li>
            <li><a>WordPress plugins</a></li>
            <li><a>Color picker app</a></li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
          </ul>
        </li>
      </ul>
      <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp" className="md:max-w-sm max-md:w-auto" alt="Tailwind CSS megamenu component" />
    </div>
  </div>

  <button popoverTarget="c3">Three</button>
  <div id="c3" popover="auto">
    <div className="flex max-sm:flex-col items-start">
      <ul className="menu w-full md:menu-horizontal">
        <li>
          <ul>
            <li className="menu-title">Solutions</li>
            <li><a>Design</a></li>
            <li><a>Development</a></li>
            <li><a>Hosting</a></li>
            <li><a>Domain register</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="menu-title">Products</li>
            <li><a>UI Kit</a></li>
            <li><a>Cloud Platform</a></li>
            <li><a>Open source</a></li>
            <li>
              <ul>
                <li><a>Auth management system</a></li>
                <li><a>VScode theme</a></li>
                <li><a>Color picker app</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="menu-title">Enterprise</li>
            <li><a>CRM software</a></li>
            <li><a>Marketing management</a></li>
            <li><a>Security</a></li>
            <li><a>Consulting</a></li>
          </ul>
        </li>
        <li>
          <ul>
            <li className="menu-title">Company</li>
            <li><a>About us</a></li>
            <li><a>Contact us</a></li>
            <li><a>Privacy policy</a></li>
            <li><a>Press kit</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

<h1 className='text-8xl text-center my-80'>Two <span className='bg-gradient-to-r from-pink-500  to-indigo-500 bg-clip-text text-transparent'>Words</span></h1>

    </>
  )
}

export default App
