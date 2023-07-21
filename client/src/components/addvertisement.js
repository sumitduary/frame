import React from "react";
import dynamic from "next/dynamic";
import Slider from 'react-slick';
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "@/styles/popup.module.css"

import { AiFillCloseCircle } from "react-icons/ai"

export default dynamic(() => Promise.resolve(Advertisement), { ssr: false });

const Advertisement = () => {

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/advertisement";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data));
  }, []);

    useEffect(() => {
      const btn = document.getElementById('closebtn')
    setTimeout(function() {
      document.getElementById('advertisementbodyid').style.display = 'block';
    }, 5000)

    btn?.addEventListener("click",function(){document.getElementById('advertisementbodyid').style.display = 'none'})
    }, [])

  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 500,
    pauseOnHover: true,
    focusOnSelect: true,
    initialSlide: 0,
    arrows: false,
  };
  return (
    <>

    <div className={styles.advertisementbody} id="advertisementbodyid" style={{display: "none"}} >
    <div className={styles.closebutton} id="closebtn" >
        <AiFillCloseCircle/>
        </div>
        <Slider {...settings} className={styles.body}>
          {imgs.map((item) =>
           <Image
           key={item._id}
           src={item.thumbnail}
           className={styles.imagebody}
           alt={item.name}
           pr="true"
           priority="true"
           width={0}
           height={0}
          //  loading="lazy"
         />
          )}
        </Slider>
        <div className={styles.orderbox}>
          <p>quick order to make this type of design :</p>
          <Link href="contact">
          <button>order now</button>
          </Link>
        </div>
    </div>
    </>
  )
};
