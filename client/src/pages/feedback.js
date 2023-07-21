import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import { useState } from "react";

import styles from "@/styles/feedback.module.css";

import { BsArrowBarLeft } from 'react-icons/bs';

export default dynamic(() => Promise.resolve(Feedback), { ssr: false });
const Feedback = () => {
    const router = useRouter();

    
  const [formData, setFormData] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const reset = () => {
    setFormData({});
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, text } = formData;

    await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, text
      }),
    });

    setFormData({});
  };


  return (
    <>
      <Navbar />
      <div className={styles.mainbody}>
        <div className={styles.top}>
        <button className={styles.closebtn} onClick={() => router.back()}>
        <BsArrowBarLeft className={styles.leftarrow} /> back
          </button>
        </div>
        <div className={styles.middle}>
            <div className={styles.middlebody}>
            <div className={styles.title}>
                <p>Feedback.com</p>
            </div>
            <p className={styles.subtitle}>should you have face any issue, feel free to contact us, we will get back to you as soon as we can.</p>
            <div className={styles.form}>
                <form method="POST" >
                    <div className={styles.inputfield}>
                    <label for="name" className={styles.formlabel}>Name</label>
                    <input type="text" name="name" placeholder="name" className={styles.formfield} required  value={formData.name || ""}
                    onChange={handleInputChange} />
                    </div>
                    <div className={styles.inputfield}>
                    <label for="email" className={styles.formlabel}>Email</label>
                    <input type="email" name="email" placeholder="email" className={styles.formfield} required  value={formData.email || ""}
                    onChange={handleInputChange} />
                    </div>
                    <div className={styles.inputfield}>
                    <label for="text" className={styles.formlabel}>Massage</label>
                    <input type="textarea" name="text" placeholder="massage" className={styles.formfield} value={formData.text || ""}
                    onChange={handleInputChange}  />
                    </div>
                    <div className={styles.inputfield}>
                    <input type="submit" value="submit" name="submit" className={styles.submit} onClick={PostData} />
                    <input type="reset" value="reset" name="reset" className={styles.reset} onClick={reset} />
                    </div>
                </form>
            </div>
            </div>
        </div>
      </div>
    </>
  );
};
