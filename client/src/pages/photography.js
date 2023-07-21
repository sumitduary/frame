import Navbar from "@/components/navbar";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import styles from "@/styles/home.module.css"

import { BsArrowBarLeft } from 'react-icons/bs';

export default dynamic(() => Promise.resolve(Photography), { ssr: false });


const Photography = () => {

    // image view component
    const [data, setData] = useState({})
    const viewImage = (item) => {
      setData(item)
    }
  
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/photography";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data));
  }, []);

  // close button

  const close = () => {
    setData({})
  }



  return (
    <>
      <Navbar />
      <div className={styles.masonrymainbody}>

      {data.thumbnail &&
        <div className={styles.imagedisplaydiv}
        >
          <button name="close" value={close} onClick={close} className={styles.closebtn} >
          <BsArrowBarLeft className={styles.leftarrow} /> close
            </button>


          <Image src={data.thumbnail} 
          className={styles.image}
          width={data.width}
          height={data.height}
          alt={data.name} 
          />

          {data.name && <p className={styles.imageauthor}>author : <br/> {data.author}</p>}
        </div>
      }

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}>
          <Masonry
            columnsCount={4}
          >
            {imgs.map((item) => {
              return (
                <div>
                  {item.thumbnail && <Image
                key={item._id}
                src={item.thumbnail}
                className={styles.photographyimage}
                alt={item.name}
                width={0}
                height={item.height}
                onClick={() => viewImage(item)}
                loading="lazy"
                unoptimized
                // priority
              />}
                </div>
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};
