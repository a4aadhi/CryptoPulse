import {
  IconBrandDiscord,
  IconBrandTwitter,
  IconBrandX,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";

import React, { useState } from 'react';
import styles from './Navbar.module.css'

const NavBar = () => {
  const[nav,setNav] =useState(false)
  return (
    <header className={styles.navbar}>
      <h1 className={styles.name}>CryptoPulse</h1>
      <nav>
        <ul className={nav ? [styles.menu,styles.active].join(' '): [styles.menu]}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Market</a>
          </li>
          <li>
            <a href="/">Choose us</a>
          </li>
          <li>
            <a href="/">Join</a>
          </li>
          <li>
            <a href="/"><IconBrandX /></a>
          </li>
          <li>
            <a href="/"><IconBrandDiscord /></a>
          </li>
        </ul>
        <div onClick={()=>setNav(!nav)} className={styles.mobile_btn}>{nav ?<IconX size={25}/> : <IconMenu2 size={25}/>}   </div>
        

      </nav>
    </header>
    

    
  );
};

export default NavBar;
