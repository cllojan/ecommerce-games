import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping} from 'react-icons/ai';
import { Cart } from "./";
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities }= useStateContext();
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href='/'>Games</Link>
        <input type="text" className="ipt-search" placeholder='Buscar juego'/>
      </div>
      
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping/>
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      { showCart && <Cart /> }
      
    </div>
  )
}

export default Navbar