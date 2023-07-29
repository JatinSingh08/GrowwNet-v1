import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css';
import {
  SunIcon
} from "@heroicons/react/24/outline";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <Image src='/growwnet.png' alt='growwnet-logo' width={60} height={60} />
        <p>GrowwNet</p>
      </div>
      <div>
        <div>
          <SunIcon />
        </div>
        
      </div>
    </div>
  )
}

export default Navbar
