import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const items = useSelector((state)=>state.cart);
  return (
    
    <div
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }}
>
        <span> Redux Store </span>
        <Link className = "navlink" to ='/'>Home</Link>
        <Link  className = "navlink" to ='/cart'>Cart</Link>
        <span   className='cartCount'>  Cart items: {items.length}
          
        </span>
    </div>
  )
}

export default Navbar