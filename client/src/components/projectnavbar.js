import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import logo from "../../public/frame-logo.png";

import styles from "@/styles/projectnavbar.module.css"

const projectnavbar = () => {
  return (
    <>
    <div className={styles.projectnavbar}>
        <div className={styles.navbarlogo}>
          <Link href="/about">
            <Image src={logo} className={styles.navbarlogoimage} alt="frame-logo" width={0} height={0} />
          </Link>
        </div>
        <div className={styles.navbarclose}>
          <Link href="/">
            <i className="fa-solid fa-circle-xmark"></i>
          </Link>
        </div>
      </div>
    </>
  )
}

export default projectnavbar