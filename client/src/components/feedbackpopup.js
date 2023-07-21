import React, { useEffect} from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { AiFillCloseCircle } from "react-icons/ai"

import styles from "@/styles/popup.module.css"

import framelogo from "@/image//frame-studio-2.png"


import Link from 'next/link';

export default dynamic(() => Promise.resolve(Feedbackpopup), { ssr: false });
const Feedbackpopup = () => {


  useEffect (() => {
    const btn = document.getElementById('closebutton')
  setTimeout(function() {
    document.getElementById('feedbackbodyid').style.display = 'block';
  }, 5000)

  btn?.addEventListener("click",function(){document.getElementById('feedbackbodyid').style.display = 'none'})
  }, [])

  return (
    <>
    <div className={styles.feedbackpopupbody} id='feedbackbodyid'style={{display: "none"}} >
        <div className={styles.feedbacktop}>
            <Image src={framelogo} className={styles.image} width={0} height={0} alt=" " />
            <span id='closebutton' ><AiFillCloseCircle/></span>
        </div>
        <div className={styles.feedbackmiddle}>
        <div className={styles.middle1}>
          help us to improve your frame studio experiences.
        </div>
        <div className={styles.middle2}>
          Thank you for visiting our website. Colud we take a minutes for survey before you go to let us know how we're doing?
        </div>
        <div className={styles.middle3}>
          <Link href="feedback">
          <button>Sure, I'll Provide Feedback</button>
          </Link>
          <button onClick={() => setHide(!hide)}>No Thanks</button>
        </div>
        </div>
        <div className={styles.feedbackbottom}>
            <p>
                powered by Frame Studio
            </p>
        </div>
    </div>
    </>
  )
}