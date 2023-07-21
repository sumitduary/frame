import React, { useState } from "react";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi"

import framelogo from "@/image/frame-logo.png";
import framestudiologo from "@/image/frame-studio-2.png";

import dynamic from "next/dynamic";
import Link from "next/link";

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

const Navbar = () => {
  const [display, setDisplay] = useState("hideNav");

  const click = () => {
    if (display == "hideNav") setDisplay("showNav");
    else setDisplay("hideNav");
  };

  return (
    <div>
      <nav>
        <div className="container">
          <button className="hamburger" onClick={click}>
            <GiHamburgerMenu />
          </button>
          <div className="logo">
            <Image
              src={framelogo}
              className="mainlogo"
              alt="Logo"
              width={0}
              height={0}
              priority
              unoptimized
            />
          </div>
        </div>
        <div className="navlist" id={display}>
          <div className="navlogo">
            <Image 
            src={framestudiologo}
            alt="Logo" width={220} height={100} priority unoptimized />
          </div>
          <ul>
            <Link href="about">
              <li>ABOUT</li>
            </Link>
            <Link href="graphic">
              <li>GRAPHICS DESIGN</li>
            </Link>
            <Link href="/">
              <li>DESIGN</li>
            </Link>
            <Link href="website">
              <li>WEB DESIGN</li>
            </Link>
            <Link href="digitalart">
              <li>DIGITAL ART</li>
            </Link>
            <Link href="photography">
              <li>PHOTOGRAPHY</li>
            </Link>
            <Link href="contact">
              <li>CONTACT</li>
            </Link>
          </ul>
          <style jsx>
            {`
                #showNav{
                    display: block;
                }
                #hideNav{
                    display: none;
                }
            `}
          </style>
        </div>
      </nav>
    </div>
  );
};
