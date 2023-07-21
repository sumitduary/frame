import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { BsArrowRightCircleFill } from "react-icons/bs"

import Navbar from "@/components/navbar";

import styles from "@/styles/home.module.css";
import { useRouter } from "next/router";


export default dynamic(() => Promise.resolve(Page), { ssr: false });
function Page () {

    const router = useRouter()
  
    const { path } = router.query
    const [data, setData] = useState([])

    useEffect(()=>{
        if(!router.isReady) return;
        fetch(`http://localhost:5000/${path}`).then((res)=>res.json()).then((d)=>setData(d)).catch(() => window.location.replace("http://localhost:3000/404"))
      },[router.isReady])

  return (
    <>
      <Navbar />
      <div className={styles.mainbody}>
        {data.map((item) => {
          return (
            <div key={item._id}>
                <Link
            href={`/${path}/${item._id}`}
            
          >
            <div className={styles.imagebody}>
              <Image
                src={item.thumbnail}
                className={styles.image}
                alt={item.name}
                width={0}
                height={0}
                unoptimized
                priority
              />
              <div className={styles.text}>
                <BsArrowRightCircleFill/>
                <br />
                <p>{item.name}</p>
              </div>
            </div>
          </Link>
            </div>
          )
          })}
      </div>
    </>
  );
};
