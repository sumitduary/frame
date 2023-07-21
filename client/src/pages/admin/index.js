import React, { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useContext } from "react";

import { AuthContext } from "../context";

import styles from "./styles/admin.module.css";

import airobot from "@/image/ai-robot.jpg";
import framestudiologo from "@/image/frame-studio-2.png";

export default dynamic(() => Promise.resolve(Admin), { ssr: false });



const Admin = () => {

  const router = useRouter()
  const handelInput = () => {
    router.push("/");
  };

  // user authentication

    const [adminid, setAdminid] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = async (e) => {
      e.preventDefault();

      const res = await fetch('/signin',{
            method : "POST",
            headers:{
              "Content-Type" : "application/json"
            },
            body:JSON.stringify({
              adminid,
              password
            })
          });
          
          const data = res.json();

          if(res.status === 400 || !data){
            window.alert("Invalid Credentials");
          } else {
            window.alert("Login Successfull")
            Router.push("/admin/home")
          }
    }

const data = useContext(AuthContext)

  return (
    <>
      <div className={styles.mainpage}>
      <button onClick={handelInput} className={styles.closebtn} >
               <i className="fa-solid fa-arrow-left"></i>Back </button>
        <div className={styles.loginform}>
          <div className={styles.leftside}>
          {/* <Image
              src={airobot}
              className={styles.leftimg}
              alt="Ai Robort"
              width={0}
              height={0}
            /> */}
          </div>
          <div className={styles.rightside}>
            <div className={styles.righttop}>
            {/* <Image
              src={framestudiologo}
              className={styles.logo}
              alt="Ai Robort"
              width={0}
              height={0}
            /> */}
            </div>
            <div className={styles.rightbottom}>
              <span>admin  {data.name} login</span>
              <form method="POST" >
                <input type="text" name="adminid"  value={adminid} onChange={(e) => setAdminid(e.target.value)} placeholder="user" />
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <input type="submit" name="submit" onClick={loginUser} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
