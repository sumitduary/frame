import React from "react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

import Navbar from "@/components/adminnavbar";
import styles from "../styles/upload.module.css";

export default dynamic(() => Promise.resolve(Upload), { ssr: false });
const Upload = () => {
  // drop down list code usestate
  useEffect(() => {
    const selectElement = document.getElementById("input-select");
    const graphicInputDiv = document.getElementById("graphic-input-div");
    const webInputDiv = document.getElementById("web-input-div");
    const artInputDiv = document.getElementById("digitalart-input-div");
    const photographyInputDiv = document.getElementById("photography-input-div");
    const advertisementInputDiv = document.getElementById("advertisement-input-div");

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "graphic") {
        graphicInputDiv.style.display = "block";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      } else if (event.target.value === "website") {
        webInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      } else if (event.target.value === "digitalart") {
        artInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      } else if (event.target.value === "photography") {
        photographyInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      } else if (event.target.value === "advertisement") {
        advertisementInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
      } else {
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
      }
    });
  });

  const [formData, setFormData] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  const PostData = async (e) => {
    e.preventDefault();

    const {
      designtype,
      name,
      text1,
      text2,
      text3,
      thumbnail,
      imagelink,
      imagelink1,
      imagelink2,
      imagelink3,
      imagelink4,
      imagelink5,
      height,
      width,
      author
    } = formData;
    
    await fetch("http://localhost:5000/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        designtype,
        name,
        text1,
        text2,
        text3,
        thumbnail,
        imagelink,
        imagelink1,
        imagelink2,
        imagelink3,
        imagelink4,
        imagelink5,
        height,
        width,
        author
      }),
    })


    setFormData({
      designtype
    });
  };

  
  const PostAdvertisementData = async (e) => {
    e.preventDefault();

    const {
      designtype,
      name,
      thumbnail
    } = formData;
    
    await fetch("http://localhost:5000/advertisement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        designtype,
        name,
        thumbnail
      }),
    })


    setFormData({
      designtype
    });
  };

  return (
    <>
      <Navbar />

      <div className={styles.mainbody}>
        <form method="POST">
          <div className={styles.forminput}>
            <label htmlFor="input-select" className={styles.formlabel}>
              Choose design :
            </label>
            <select
              id="input-select"
              name="designtype"
              value={formData.designtype}
              onChange={handleInputChange}
              required
            >
              <option value="">Select</option>
              <option value="graphic">Graphic desing</option>
              <option value="website">web Design</option>
              <option value="digitalart">Digital Art</option>
              <option value="photography">Photography</option>
              <option value="advertisement">advertisement</option>
            </select>
          </div>

          {/* graphic project input div */}
          <div className={styles.mainforminput} id="graphic-input-div">
            <div className={styles.forminput} id="graphic">
              <label className={styles.formheadlabel}>
                Graphic Project Upload
              </label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>text area 1 :</label>
              <input
                name="text1"
                type={"text"}
                value={formData.text1 || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>text area 2 :</label>
              <input
                name="text2"
                type={"text"}
                value={formData.text2 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>text area 3 :</label>
              <input
                name="text3"
                type={"text"}
                value={formData.text3 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>thumbnail image :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="imagelink"
                type={"text"}
                value={formData.imagelink || ""}
                onChange={handleInputChange}
                required
              />
              <input
                name="imagelink1"
                type={"text"}
                value={formData.imagelink1 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink2"
                type={"text"}
                value={formData.imagelink2 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink3"
                type={"text"}
                value={formData.imagelink3 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink4"
                type={"text"}
                value={formData.imagelink4 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink5"
                type={"text"}
                value={formData.imagelink5 || ""}
                onChange={handleInputChange}
              />
              <input type="submit" onClick={PostData} />
            </div>
            <style jsx>{`
              #graphic-input-div {
                display: none;
              }
            `}</style>
          </div>

          {/* web project input div */}
          <div className={styles.mainfrominput} id="web-input-div">
            <div className={styles.forminput} id="website">
              <label className={styles.formheadlabel}>
                Website Project Upload
              </label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>text area 1 :</label>
              <input
                name="text1"
                type={"text"}
                value={formData.text1 || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>text area 2 :</label>
              <input
                name="text2"
                type={"text"}
                value={formData.text2 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>text area 3 :</label>
              <input
                name="text3"
                type={"text"}
                value={formData.text3 || ""}
                onChange={handleInputChange}
              />
              <label className={styles.formlabel}>thumbnail image :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="imagelink"
                type={"text"}
                value={formData.imagelink || ""}
                onChange={handleInputChange}
                required
              />
              <input
                name="imagelink1"
                type={"text"}
                value={formData.imagelink1 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink2"
                type={"text"}
                value={formData.imagelink2 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink3"
                type={"text"}
                value={formData.imagelink3 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink4"
                type={"text"}
                value={formData.imagelink4 || ""}
                onChange={handleInputChange}
              />
              <input
                name="imagelink5"
                type={"text"}
                value={formData.imagelink5 || ""}
                onChange={handleInputChange}
              />
              <input type="submit" onClick={PostData} />
            </div>
            <style jsx>{`
              #web-input-div {
                display: none;
              }
            `}</style>
          </div>

          {/* digital art project input div */}
          <div className={styles.mainfrominput} id="digitalart-input-div">
            <div className={styles.forminput} id="digitalart">
              <label className={styles.formheadlabel}>
                Digital Art Project Upload
              </label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image width :</label>
              <input
                name="width"
                type={"text"}
                value={formData.width || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image height :</label>
              <input
                name="height"
                type={"text"}
                value={formData.height || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <input type="submit" onClick={PostData} />
            </div>
            <style jsx>{`
              #digitalart-input-div {
                display: none;
              }
            `}</style>
          </div>

          {/* photograhy project input div */}
          <div className={styles.mainfrominput} id="photography-input-div">
            <div className={styles.forminput} id="photography">
              <label className={styles.formheadlabel}>Photography Upload</label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>Image Author :</label>
              <input
                name="author"
                type={"text"}
                value={formData.author || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image width :</label>
              <input
                name="width"
                type={"text"}
                value={formData.width || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image height :</label>
              <input
                name="height"
                type={"text"}
                value={formData.height || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <input type="submit" onClick={PostData} />
            </div>
            <style jsx>{`
              #photography-input-div {
                display: none;
              }
            `}</style>
          </div>


       {/* Advertisement project input div */}
       <div className={styles.mainfrominput} id="advertisement-input-div">
            <div className={styles.forminput} id="advertisement">
              <label className={styles.formheadlabel}>Advertisement Upload</label>
              <label className={styles.formlabel}>project Name :</label>
              <input
                name="name"
                type={"text"}
                value={formData.name || ""}
                onChange={handleInputChange}
                required
              />
              <label className={styles.formlabel}>image link :</label>
              <input
                name="thumbnail"
                type={"text"}
                value={formData.thumbnail || ""}
                onChange={handleInputChange}
                required
              />
              <input type="submit" onClick={PostAdvertisementData} />
            </div>
            <style jsx>{`
              #advertisement-input-div {
                display: none;
              }
            `}</style>
          </div>
        </form>
      </div>
    </>
  );
};
