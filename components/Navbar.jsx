import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { AiOutlineShopping } from "react-icons/ai";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";
import Image from "next/image";
const { motion } = require("framer-motion");

const Navbar = ({ isVisible }) => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const router = useRouter();
  const [activeNavbar, setActiveNavbar] = useState(false);
  const location = router.pathname === "/";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setActiveNavbar(true);
      } else {
        setActiveNavbar(false);
      }
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={activeNavbar ? "header background-white-active" : "header"}
        style={{ background: !location && "white" }}
      >
        <div className="navbar-content">
          {/* RÉSEAUX */}
          <Link href={`https://www.instagram.com/kamalsafar_`}>
            <a className="navBar-social" target="_blank" rel="noreferrer">
              <InstagramIcon sx={{ fontSize: 30 }} />
            </a>
          </Link>

          {/* LOGO */}
          <Link href={"/"}>
            <div className="navBar-logo-content">
              <h1
                // Réinsérer ce style en cas de fond plus foncé pour faire ressortir le logo
                // style={{ color: !location && "#4b4b4b" }}
                style={{ color: "#4b4b4b" }}
              >
                ZAYN.K
              </h1>
              <div className="navBar-logo-subtitile">
                <span
                  className=" navBar-logo-line"
                  // Réinsérer ce style en cas de fond plus foncé pour faire ressortir le logo
                  // style={{ background: !location && "#4b4b4b" }}
                  style={{ background: "#4b4b4b" }}
                ></span>
                <h2
                  // Réinsérer ce style en cas de fond plus foncé pour faire ressortir le logo
                  // style={{ background: !location && "#4b4b4b" }}
                  style={{ color: "#4b4b4b" }}
                >
                  COIFFURE MASCULINE
                </h2>
              </div>
            </div>
          </Link>

          {/* PANIER */}
          <button className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          {showCart && <Cart />}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
