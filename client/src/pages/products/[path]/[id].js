import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Link from 'next/link';
import dynamic from 'next/dynamic';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import styles from "@/styles/project.module.css"
import Navbar from '@/components/navbar'

export default dynamic(() => Promise.resolve(Id), { ssr: false });
function Id() {
    const router = useRouter()
    const { path, id } = router.query
    const [data, setData] = useState([])
    const [imgs, setImgs] = useState([])

    useEffect(()=>{
        if(!router.isReady) return;
        fetch(`http://localhost:5000/${path}/${id}`).then((res)=>res.json()).then((d)=>setData(d))
        fetch(`http://localhost:5000/${path}`).then((res)=>res.json()).then((d)=>setImgs(d))
      },[id, router.isReady])

      var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 500,
        pauseOnHover: true,
        focusOnSelect: true,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
          {
            breakpoint: 1120,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              infinite: true,
              arrows: false,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
            },
          },
        ],
      };
      
  return (
    <>
    <Navbar/>
  <div className={styles.mainbody}>

   

        {data.map((item) => {
          return (
            <div >
               <button onClick={ () => router.back()} className={styles.closebtn} >
               <i className="fa-solid fa-arrow-left"></i>Back
          </button>
          {item.name && <div className={styles.title}>{item.name}</div>}
          {item.text1 && <p className={styles.projectparagraph}>{item.text1}</p>}
              {item.imagelink && <Image
              className={styles.imagefile}
              src={item.imagelink}
              alt={item.name}
              width={0}
              height={0}
              loading='lazy'
            />}
          {item.text2 && <p className={styles.projectparagraph}>
            {item.text2}
          </p>}
          {item.imagelink1 && <Image
              className={styles.imagefile}
              src={item.imagelink1}
              alt={item.name}
              width={0}
              height={0}
              loading='lazy'
            />}
          {item.text3 && <p className={styles.projectparagraph}>
            {item.text3}
          </p>}
           {item.imagelink2 && <Image
              className={styles.imagefile}
              src={item.imagelink2}
              alt={item.name}
              width={0}
              height={0}
              loading='lazy'
            />}
            {item.imagelink3 && <Image
              className={styles.imagefile}
              src={item.imagelink3}
              alt={item.name}
              width={0}
              height={0}
              loading='lazy'
            />}
            {item.imagelink4 && <Image
              className={styles.imagefile}
              src={item.imagelink4}
              alt={item.name}
              width={0}
              height={0}
              loading='lazy'
            />}
            {item.imagelink5 && <Image
              className={styles.imagefile}
              src={item.imagelink5}
              alt={item.name}
              width={0}
              height={0}
              loading='lazy'
            />}

           

                {/* project card carousal deisng */}

                <div className={styles.projectcardcarousaltitle}>Related Works</div>

                <div>
        <Slider {...settings} className={styles.slider}>
          {imgs.map((item) => {
            return (
              <>
              <Link href={`/${item.designtype}/${item._id}`} >
              <div className={styles.cardbody} key={item._id} >

                    {item.thumbnail && <div className={styles.top}>
                      <Image
                        src={item.thumbnail}
                        className={styles.cardimage}
                        alt={item.name}
                        pr="true"
                        priority="true"
                        width={0}
                        height={0}
                      />
                      <div className={styles.text}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <div className={styles.bottom}>
                    <div className={styles.cardtitle}>{item.name}</div>
                    <div className={styles.cardtext}>{item.text1}</div>
                    <div className={styles.cardlink}>
                        <button>read more . . .</button>
                    </div>
                  </div>
                    </div>}
                  
              </div>
            </Link>
            </>
            )
          })}
        </Slider>
      </div>

      {/* order box design */}

      <div className={styles.orderbox}>
          <p>
            to make this type of design :
          </p>
            <Link href="/contact">
              <button>
                order now
              </button>
            </Link>
        </div>

            </div>
          )
        })}






  </div>
    </>
  )
}