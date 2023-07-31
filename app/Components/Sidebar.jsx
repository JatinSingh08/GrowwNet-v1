import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiLogout } from "react-icons/hi";
import { MdExplore } from "react-icons/md";
import styles from './styles.module.css';

const Sidebar = () => {

  return (
      <div className={styles.sidebar__container}>
        <ul>
          <li>
            <AiFillHome
            />
            <span>Home</span>
          </li>
          <li>
            <MdExplore
            />
            <span>Explore</span>
          </li>
          <li>
            <BsFillBookmarksFill
            />
            <span>Bookmarks</span>
          </li>
          <li>
            <CgProfile
            />
            <span>Profile</span>
          </li>
          <li>
          
            <HiLogout  />
            <span>Log Out</span>

          </li>
        </ul>
      </div>
  );
};

export default Sidebar;