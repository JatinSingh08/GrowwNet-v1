'use client'
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { SunIcon } from "@heroicons/react/24/outline";
import logo from "../../public/growwnetlogo.png";
import { useRouter } from 'next/navigation'
const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}
    onClick={() => router.push("/")}
    >
      <div>
        <Image
          src={logo}
          alt="growwnet-logo"
          width={60}
          height={60}
          loading="lazy"
        />
        <p>GrowwNet</p>
      </div>
      <div>
        <div>
          <SunIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
