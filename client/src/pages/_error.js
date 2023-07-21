import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "@/styles/errorpage.module.css";

import errorimg from "@/image/error.svg";
import Navbar from "@/components/navbar";

export default dynamic(() => Promise.resolve(Errorpage), { ssr: false });

const Errorpage = () => {
  const router = useRouter();
  const handelInput = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);

  return (
    <>
    <Navbar/>
      <div className={styles.mainbody}>
        <div className={styles.leftside}>
          <div className={styles.lefttop}>oops!</div>
          <div className={styles.leftmiddle}>
            We can't seem to find the page you're looking for.
            <span className={styles.middlespan}>Error code : 404</span>
          </div>
          <div className={styles.leftbottom}>
            <button onClick={handelInput}>Return</button>
          </div>
        </div>
        <div className={styles.rightside}>
          <Image
            src={errorimg}
            alt="error"
            width={650}
            height={650}
            className={styles.errorimage}
          />
        </div>
      </div>
    </>
  );
};
