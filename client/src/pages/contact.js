import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { BsArrowBarLeft } from 'react-icons/bs';

import Navbar from "@/components/navbar";

import styles from "@/styles/contact.module.css";


export default dynamic(() => Promise.resolve(contact), { ssr: false });

const contact = () => {
  //close btn function
  const router = useRouter();

  // drop down list code jquery
  useEffect(() => {
    const selectElement = document.getElementById("input-select");
    const graphicInputDiv = document.getElementById("graphic-input-div");
    const webInputDiv = document.getElementById("web-input-div");

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "graphic") {
        graphicInputDiv.style.display = "block";
        webInputDiv.style.display = "none";
      } else if (event.target.value === "web") {
        webInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
      } else {
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
      }
    });
  });

  const [formData, setFormData] = useState({});
  const [prev, setPrev] = useState()

    const prevLoc = document.referrer
    console.log(prevLoc)

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const reset = () => {
    setFormData({});
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, imagereference, subject, designtype, graphicdesignfor, webdesignfor, description } = formData;

    await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, imagereference, subject, designtype, graphicdesignfor, webdesignfor, description
      }),
    });

    setFormData({});
  };
  
  return (
    <>
      <Navbar />
      <div className={styles.mainbody}>
        <div className={styles.top}>
           {/* close btn */}
      <button onClick={() => router.back()} className={styles.closebtn}>
      <BsArrowBarLeft className={styles.leftarrow} /> back
        </button>
        </div>
        <div className={styles.middle}>
          <div className={styles.body}>
          <div className={styles.title}>
            contact.com
            <p>get in touch with us</p>
          </div>
          <div className={styles.form}>
          <form method="POST">
                <div className={styles.inputfield}>
                  <label className={styles.formlabel}>
                    Name :<span>*</span>
                  </label>
                  <input
                  className={styles.formfield}
                    name="name"
                    type={"text"}
                    value={formData.name || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.inputfield}>
                  <label className={styles.formlabel}>
                    Email :<span>*</span>
                  </label>
                  <input
                  className={styles.formfield}
                    type={"email"}
                    name="email"
                    value={formData.email || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.inputfield}>
                  <label className={styles.formlabel}>
                    Image Reference :
                  </label>
                  <input
                  className={styles.formfield}
                    type={"text"}
                    name="imagereference"
                    value={formData.imagereference || ""}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles.inputfield}>
                  <label htmlFor="input-select" className={styles.formlabel}>
                    Choose design :<span>*</span>
                  </label>
                  <select
                  className={styles.formfield}
                    id="input-select"
                    name="designtype"
                    value={formData.designtype || ""}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="graphic">Graphic desing</option>
                    <option value="web">web developing</option>
                  </select>
                </div>
                <div id="graphic-input-div" className={styles.inputfield}>
                  <label htmlFor="graphic-input" className={styles.formlabel}>
                    Graphics Design for :
                  </label>
                  <select
                  className={styles.formfield}
                    name="graphicdesignfor"
                    id="graphic-input"
                    value={formData.graphicdesignfor || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an option</option>
                    <option value="logo">Logo Design</option>
                    <option value="identity">
                      Visual identity graphic design
                    </option>
                    <option value="addvertisement">
                      Marketing & advertising graphic design
                    </option>
                    <option value="publication">
                      Publication graphic design
                    </option>
                    <option value="branding">
                      Packaging graphic design (Branding)
                    </option>
                    <option value="motion">Motion graphic design</option>
                    <option value="enviromental">
                      Environmental graphic design
                    </option>
                    <option value="other">Any other Matter</option>
                  </select>
                  <style jsx>{`
                    #graphic-input-div {
                      display: none;
                    }
                  `}</style>
                </div>

                <div id="web-input-div" className={styles.inputfield}>
                  <label htmlFor="web-input" className={styles.formlabel}>
                    Web Design for :
                  </label>
                  <select
                  className={styles.formfield}
                    name="webdesignfor"
                    id="web-input"
                    value={formData.webdesignfor || ""}
                    onChange={handleInputChange}
                  >
                    <option value="">Select an option</option>
                    <option value="ecom">E-commerce Site</option>
                    <option value="business">Business Site</option>
                    <option value="blog">Blog Website</option>
                    <option value="portfolio">Portfolio Site</option>
                    <option value="personal">Personal WebSite</option>
                    <option value="event">Event WebSite</option>
                    <option value="nonprofit">NonProfit Website</option>
                    <option value="informational">Informational WebSite</option>
                    <option value="membership">Membership WebSite</option>
                    <option value="forum">Online Forum</option>
                    <option value="other">Any Other Matter</option>
                  </select>
                  <style jsx>{`
                    #web-input-div {
                      display: none;
                    }
                  `}</style>
                </div>

                <div className={styles.inputfield}>
                  <label className={styles.formlabel}>Describe :</label>
                  <textarea
                  className={styles.formfield}
                    name="description"
                    value={formData.description || ""}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles.formbutton}>
                  <input className={styles.submit} type="submit" value="Submit" onClick={PostData} />
                  <input className={styles.reset} type="reset" value="reset" onClick={reset} />
                </div>
              </form>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
