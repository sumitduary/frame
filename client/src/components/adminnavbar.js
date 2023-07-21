import React from "react";
import Image from "next/image";
import { useState } from "react";

import framelogo from "@/image/frame-logo.png";

import { BiSolidUserCircle } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";

import { GiHamburgerMenu } from "react-icons/gi";


import dynamic from "next/dynamic";
import Link from "next/link";

export default dynamic(() => Promise.resolve(AdminNavbar), { ssr: false });

const AdminNavbar = () => {
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
              alt="Logo"
              className="mainlogo"
              width={200}
              height={40}
            />
          </div>
          <div className="adminuser">
            <BiSolidUserCircle />
          </div>
        </div>
        <div className="navlist" id={display}>
          <ul>
            <Link className="ullink" href="/admin/home">
              <li>HOME</li>
            </Link>
            <Link className="ullink" href="/admin/home/upload">
              <li>UPLOAD SECTION</li>
            </Link>
            <Link className="ullink" href="/admin/home/projectdata">
              <li>PROJECT DATA</li>
            </Link>
            <Link className="ullink" href="/admin">
              <li>
                <BiLogOutCircle /> Logout
              </li>
            </Link>
          </ul>
          <style jsx>
            {`
              #showNav {
                display: block;
              }
              #hideNav {
                display: none;
              }
            `}
          </style>
        </div>
      </nav>
    </div>
  );
};
