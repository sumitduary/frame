import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

import { BsArrowRightCircleFill } from "react-icons/bs"

import styles from "@/styles/home.module.css";

import Navbar from "@/components/navbar";
import Advertisement from "@/components/addvertisement";
import Feedbackpopup from "@/components/feedbackpopup";
import Loader from "@/components/loading";


export default dynamic(() => Promise.resolve(Home), { ssr: false });
const Home = () => {

  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/home";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImgs(data));
  }, []);

  return (
    <>
      <Navbar />
      <Loader/>
      {/* <Advertisement/> */}
      <Feedbackpopup/>

      <div className={styles.mainbody}>
        {imgs.map((item) => {
          return (
            <div key={item._id}>
              {item.thumbnail && 
              <div className={styles.imagebody}>
              <Link
                href={`/${item.designtype}/${item._id}`}
              
              >
                  <Image
                    src={item.thumbnail}
                    className={styles.image}
                    alt=" "
                    width={0}
                    height={0}
                  />
                  <div className={styles.text}>
                <BsArrowRightCircleFill/>
                <br />
                <p>{item.name}</p>
              </div>
              </Link>
            </div>
              }
            </div>
          )
        })}
      </div>
    </>
  );
};
