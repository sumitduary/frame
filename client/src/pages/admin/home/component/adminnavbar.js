import React from 'react'
import Image from 'next/image'
import logo from '../../../../../public/frame-logo.png'
import { useState } from 'react'

import logo2 from '../../../../../public/frame-studio-2.png'


import dynamic from 'next/dynamic'
import Link from 'next/link'



export default dynamic (() => Promise.resolve(navbar), {ssr: false})

const navbar = () => {


    const [display, setDisplay] = useState("hideNav");

    const click = () => {
      if (display == "hideNav") setDisplay("showNav");
      else setDisplay("hideNav");
    };


    return (
        <div>
            <nav>
                <div className="container">
                    <div className="hamburger" onClick={click}>
                        <i className="fa-sharp fa-solid fa-bars"></i>
                    </div>
                    <div className="logo">
                        <Image 
                        src={logo}
                        alt="Logo"
                        className="mainlogo"
                        width={200}
                        height={40}
                        />
                    </div>
                    <div className="adminuser">
                    <i className="fa-solid fa-circle-user"></i>
                    </div>
                </div>
                <div className='navlist' id={display}>
                    <ul>
                        <Link className='ullink' href="./"><li>HOME</li></Link>
                        <Link className='ullink' href="./home/upload"><li>UPLOAD SECTION</li></Link>
                        <Link className='ullink' href="./home/projectdata"><li>PROJECT DATA</li></Link>
                    <Link className='ullink' href="#" ><li><i className="fa-solid fa-right-from-bracket"></i> Logout</li></Link>
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
    )
}
