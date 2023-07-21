import React, { Component } from 'react'
import dynamic from "next/dynamic";
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import styles from "@/styles/cardcarousel.module.css"

import img1 from "@/image/college-fest-2016.jpg";
import img2 from "@/image/college-fest-2017.jpg";
import img3 from "@/image/college-fest-2018.jpg";
import img4 from "@/image/college-fest-2018-1.jpg";
import img5 from "@/image/college-fest-2019.jpg";
import img6 from "@/image/college-fest-2021.jpg";

export const carddata = [
  {
    id: 1,
    image: img1,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 2,
    image: img2,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 3,
    image: img3,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 4,
    image: img4,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 5,
    image: img5,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 6,
    image: img6,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 7,
    image: img3,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 8,
    image: img4,
    title: "JA ICCHE TAI - 2021",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 9,
    image: img5,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
  {
    id: 10,
    image: img6,
    title: "JA ICCHE TAI",
    creatorname: "Sumit duary",
    projecttype: "ui design & code",
    text: "The Sakhi Saheli training manual includes 9 meeting sessions which are to be carried out by the peer educators with the adolescent girls.",
  },
];

//export default dynamic (() => Promise.resolve(graphiccardslider), { ssr: false });
export default class PauseOnHover extends Component {

    render() {
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2500,
          speed: 500,
          pauseOnHover: true,
          focusOnSelect: true,
          initialSlide: 0,
          afterChange: function(index) {
            console.log(
              `Slider Changed to: ${index + 1}`
            );
          },
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                dots: true,
              }
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
        };

  return (
   <>
    <div>
        <Slider {...settings} className={styles.carouselbody}>
          {carddata.map((client) =>
          <Link href={`/${client.id}`}>
          <div className={styles.cardbody} key={client.id}>
          <div className={styles.card}>
          <Link href={`/${client.id}`}>
          <div className={styles.top}>
          <Image src={client.image} className={styles.cardimage} alt="frame-studio" pr="true" priority="true" width={0} height={0} />
          <div className={styles.text}>
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
          </div>
          </Link>
          <div className={styles.bottom}>
            <div className={styles.cardtitle}>{client.title}</div>
            {/* <div className={styles.cardsubtitle}>{client.subtitle}</div> */}
            <div className={styles.cardtext}>{client.text}</div>
            <div className={styles.cardlink}>
              <Link href={`/${client.id}`}>
                <button>read more . . .</button>
                </Link>
            </div>
          </div>
          </div>
          </div>
          </Link>
          )}
        </Slider>
      </div>
   </>
  )
}
}