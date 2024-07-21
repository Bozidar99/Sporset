import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import SingleUSerPage from '../pages/SingleUserPage'

function NavbarComponent() {
    const [navItems, setNavItems] = useState([
      {
      
        url: '/',
        title: 'Home'
      },
      {
        
        url: '/about',
        title: 'About'
      },
      {
        
        url: '/product',
        title: 'Product'
      },
      {
        
        url: '/contact',
        title: 'Contact'
      },
      {
        
        url: '/team',
        title: 'Team'
      }
      
      
    ])

  return (
    <div className='container mx-auto flex justify-between items-center h-[90px] bg-blue-500'>
      <h1 className='text-3xl font-bold ml-[30px]'>AnyDeal</h1>

      <ul className='flex  items-center gap-[10px] mr-[10px] '>
        {navItems.map((nav, index) => {
          return <em><strong><li key={index}>
              <NavLink to={nav.url} className={'text-white'}>{nav.title}</NavLink>
          </li></strong></em>
        })}
      </ul>
    </div>
  )
}

export default NavbarComponent
