import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping, AiOutlineSearch } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [urlSearch, setUrlSearch] = useState("");

  return (
    <div className='navbar-container'>
      <div className='logo'>
        <Link href='/'>Games</Link>
        <form className='form-input' action={`/search/${urlSearch}`}>
          <input
            type='text'
            placeholder='Buscar juego'
            onChange={(e) => setUrlSearch(e.currentTarget.value)}
          />
          <button type='submit'>
            <AiOutlineSearch />
          </button>
        </form>
      </div>

      <button
        type='button'
        className='cart-icon'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
