import cn from "classnames";
import { useMobile } from "hooks/useMobile";
import React, { useState } from "react";

import logo from "assets/images/icons/logo.svg";

import { menu } from "data/menu";

import styles from "./index.module.scss";

export const Header = () => {
   const isMobile = useMobile(769);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

   return (
      <header className={styles.header}>
         <div className={cn("container", styles.headerInner)}>
            {isMobile && (
               <div
                  className={cn(styles.headerBurger, {
                     [styles.headerBurgerActive]: isMenuOpen,
                  })}
                  onClick={toggleMenu}
               >
                  <span />
                  <span />
                  <span />
               </div>
            )}
            <a className={styles.headerLogo} href={"/"}>
               <img src={logo} alt={"logo"} />
            </a>
            <nav
               className={cn(styles.headerNav, {
                  [styles.headerNavActive]: isMenuOpen,
               })}
            >
               <ul className={styles.headerMenu}>
                  {menu.map(({ id, link, name }) => (
                     <li className={styles.headerMenuItem} key={id}>
                        <a className={styles.headerMenuLink} href={link}>
                           {name}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
            <button className={styles.headerBtn} type={"button"}>
               Buy
            </button>
         </div>
      </header>
   );
};
