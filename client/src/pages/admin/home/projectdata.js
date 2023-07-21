import React from "react";
import dynamic from "next/dynamic";
import Adminnavbar from "@/components/adminnavbar";
import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "../styles/projectdata.module.css";

export default dynamic(() => Promise.resolve(Projectdata), { ssr: false });
const Projectdata = () => {
  useEffect(() => {
    const selectElement = document.getElementById("input-select");
    const graphicInputDiv = document.getElementById("graphic-input-div");
    const webInputDiv = document.getElementById("web-input-div");
    const artInputDiv = document.getElementById("digitalart-input-div");
    const photographyInputDiv = document.getElementById(
      "photography-input-div"
    );
    const advertisementInputDiv = document.getElementById(
      "advertisement-input-div"
    );
    const contactInputDiv = document.getElementById("contact-input-div");
    const feedbackInputDiv = document.getElementById("feedback-input-div");

    selectElement.addEventListener("change", (event) => {
      if (event.target.value === "graphic") {
        graphicInputDiv.style.display = "block";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
        contactInputDiv.style.display = "none";
        feedbackInputDiv.style.display = "none";
      } else if (event.target.value === "website") {
        webInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
        contactInputDiv.style.display = "none";
        feedbackInputDiv.style.display = "none";
      } else if (event.target.value === "digitalart") {
        artInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
        contactInputDiv.style.display = "none";
        feedbackInputDiv.style.display = "none";
      } else if (event.target.value === "photography") {
        photographyInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
        contactInputDiv.style.display = "none";
        feedbackInputDiv.style.display = "none";
      } else if (event.target.value === "feedback") {
        feedbackInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
        contactInputDiv.style.display = "none";
      } else if (event.target.value === "advertisement") {
        advertisementInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        contactInputDiv.style.display = "none";
        feedbackInputDiv.style.display = "none";
      } else if (event.target.value === "contact") {
        contactInputDiv.style.display = "block";
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
        feedbackInputDiv.style.display = "none";
      } else {
        graphicInputDiv.style.display = "none";
        webInputDiv.style.display = "none";
        artInputDiv.style.display = "none";
        photographyInputDiv.style.display = "none";
        advertisementInputDiv.style.display = "none";
        contactInputDiv.style.display = "none";
        feedbackInputDiv.style.display = "none";
      }
    });
  });

  const [graphicdata, setGraphicData] = useState([]);
  const [websitedata, setWebsiteData] = useState([]);
  const [digitalartdata, setDigitalartData] = useState([]);
  const [photographydata, setPhotographyData] = useState([]);
  const [advertisementdata, setAdvertisementData] = useState([]);
  const [contactdata, setContactData] = useState([]);
  const [feedbackdata, setFeedbackData] = useState([]);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchgraphic();
    fetchweb();
    fetchart();
    fetchphoto();
    fetchadv();
    fetchcontact();
    fetchfb();
  }, [refresh]);

  const fetchgraphic = () => {
    const url = "http://localhost:5000/graphic";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGraphicData(data));
  };

  const fetchweb = () => {
    const url = "http://localhost:5000/website";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWebsiteData(data));
  };

  const fetchart = () => {
    const url = "http://localhost:5000/digitalart";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDigitalartData(data));
  };

  const fetchphoto = () => {
    const url = "http://localhost:5000/photography";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPhotographyData(data));
  };

  const fetchadv = () => {
    const url = "http://localhost:5000/advertisement";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAdvertisementData(data));
  };

  const fetchcontact = () => {
    const url = "http://localhost:5000/contact";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setContactData(data));
  };

  const fetchfb = () => {
    const url = "http://localhost:5000/feedback";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFeedbackData(data));
  };

  const deleteImage = (id) => {
    const isOkay = confirm("Are you sure to delete it?");
    if (isOkay) {
      fetch(`http://localhost:5000/image/${id}`, { method: "delete" })
        .then(() => alert("done"))
        .then(() => {
          if (refresh == true) {
            setRefresh(false)
          }
          else setRefresh(true)
        })
        .catch((err) => alert(err));
    }
  };

  const deleteAdv = async (id) => {
    const isOkay = confirm("Are you sure to delete it?");
    if (isOkay) {
      fetch(`http://localhost:5000/adv/${id}`, { method: "delete" })
        .then(() => alert("done"))
        .then(() => {
          if (refresh == true) {
            setRefresh(false)
          }
          else setRefresh(true)
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <>
      <Adminnavbar />
      <div className="mainbody">
        <form method="POST">
          <div
            className={styles.forminput}
            style={{ textAlign: "center", margin: "20px 0" }}
          >
            <label
              htmlFor="input-select"
              className={styles.formlabel}
              style={{
                fontFamily: "inherit",
                fontWeight: "900",
                marginRight: "20px",
                fontSize: "20px",
              }}
            >
              Choose design :
            </label>
            <select
              id="input-select"
              name="designtype"
              style={{
                padding: "10px 20px",
                fontWeight: "900",
                fontSize: "20px",
              }}
            >
              <option value="">Select</option>
              <option value="graphic">Graphic desing</option>
              <option value="website">web Design</option>
              <option value="digitalart">Digital Art</option>
              <option value="photography">Photography</option>
              <option value="advertisement">Advertisement</option>
              <option value="contact">Contact</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
        </form>

        {/* graphics project file */}
        <div className="graphicdiv" id="graphic-input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="graphic"
          >
            {graphicdata.map((item) => {
              return (
                <div
                  key={item._id}
                  style={{
                    width: "100%",
                    height: "auto",
                    border: "1px solid #000",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    padding: "5px 20px",
                    fontFamily: "inherit",
                    fontWeight: "900",
                  }}
                >
                  {item.designtype && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Design Type:</p>
                    <p style={{ fontWeight: "600" }}>{item.designtype}</p>
                  </div>}
                  {item.name && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Name:</p>
                    <p style={{ fontWeight: "600" }}>{item.name}</p>
                  </div>}
                  {item.text1 && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Text 1:</p>
                    <p style={{ fontWeight: "600" }}>{item.text1}</p>
                  </div>}
                  {item.text2 && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Text 2:</p>
                    <p style={{ fontWeight: "600" }}>{item.text2}</p>
                  </div>}
                  {item.text3 && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Text 3:</p>
                    <p style={{ fontWeight: "600" }}>{item.text3}</p>
                  </div>}
                  <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Thumbnail :</p>
                    <Image
                      src={item.thumbnail}
                      alt={item.name}
                      width={200}
                      height={100}
                    />
                  </div>
                  <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>ImageLink :</p>
                    {item.imagelink && (
                      <Image
                        src={item.imagelink}
                        alt=" "
                        width={200}
                        height={100}
                      />
                    )}
                    {item.imagelink1 && (
                      <Image
                        src={item.imagelink1}
                        alt=" "
                        width={200}
                        height={100}
                      />
                    )}
                    {item.imagelink2 && (
                      <Image
                        src={item.imagelink2}
                        alt=" "
                        width={200}
                        height={100}
                      />
                    )}
                    {item.imagelink3 && (
                      <Image
                        src={item.imagelink3}
                        alt=" "
                        width={200}
                        height={100}
                      />
                    )}
                    {item.imagelink4 && (
                      <Image
                        src={item.imagelink4}
                        alt=" "
                        width={200}
                        height={100}
                      />
                    )}
                    {item.imagelink5 && (
                      <Image
                        src={item.imagelink5}
                        alt=" "
                        width={200}
                        height={100}
                      />
                    )}
                  </div>
                  <div style={{ display: "flex" }}>
                    <p style={{ marginRight: "20px" }}>Created At:</p>
                    <p style={{ fontWeight: "600" }}>{item.createdAt}</p>
                  </div>
                  <button onClick={() => deleteImage(item._id)}>delete</button>
                </div>
              );
            })}
          </div>
          <style jsx>{`
            #graphic-input-div {
              display: none;
            }
          `}</style>
        </div>

        {/* websites project file */}
        <div className="websitediv" id="web-input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="website"
          >
            {websitedata.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  padding: "5px 20px",
                  fontFamily: "inherit",
                  fontWeight: "900",
                }}
              >
                {item.designtype && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Design Type:</p>
                    <p style={{ fontWeight: "600" }}>{item.designtype}</p>
                  </div>}
                  {item.name && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Name:</p>
                    <p style={{ fontWeight: "600" }}>{item.name}</p>
                  </div>}
                  {item.text1 && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Text 1:</p>
                    <p style={{ fontWeight: "600" }}>{item.text1}</p>
                  </div>}
                  {item.text2 && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Text 2:</p>
                    <p style={{ fontWeight: "600" }}>{item.text2}</p>
                  </div>}
                  {item.text3 && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Text 3:</p>
                    <p style={{ fontWeight: "600" }}>{item.text3}</p>
                  </div>}
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Thumbnail :</p>
                  <Image
                    src={item.thumbnail}
                    alt={item.name}
                    width={200}
                    height={100}
                  />
                </div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>ImageLink :</p>
                  {item.imagelink && (
                    <Image
                      src={item.imagelink}
                      alt=" "
                      width={200}
                      height={100}
                    />
                  )}
                  {item.imagelink1 && (
                    <Image
                      src={item.imagelink1}
                      alt=" "
                      width={200}
                      height={100}
                    />
                  )}
                  {item.imagelink2 && (
                    <Image
                      src={item.imagelink2}
                      alt=" "
                      width={200}
                      height={100}
                    />
                  )}
                  {item.imagelink3 && (
                    <Image
                      src={item.imagelink3}
                      alt=" "
                      width={200}
                      height={100}
                    />
                  )}
                  {item.imagelink4 && (
                    <Image
                      src={item.imagelink4}
                      alt=" "
                      width={200}
                      height={100}
                    />
                  )}
                  {item.imagelink5 && (
                    <Image
                      src={item.imagelink5}
                      alt=" "
                      width={200}
                      height={100}
                    />
                  )}
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Created At:</p>
                  <p style={{ fontWeight: "600" }}>{item.createdAt}</p>
                </div>
                <button onClick={() => deleteImage(item._id)}>delete</button>
              </div>
            ))}
          </div>
          <style jsx>{`
            #web-input-div {
              display: none;
            }
          `}</style>
        </div>

        {/* digitalarts project file */}
        <div className="digitalartdiv" id="digitalart-input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="digitalart"
          >
            {digitalartdata.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  padding: "5px 20px",
                  fontFamily: "inherit",
                  fontWeight: "900",
                }}
              >
                {item.designtype && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Design Type:</p>
                    <p style={{ fontWeight: "600" }}>{item.designtype}</p>
                  </div>}
                  {item.name && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Name:</p>
                    <p style={{ fontWeight: "600" }}>{item.name}</p>
                  </div>}
                {item.name && <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Image Width:</p>
                  <p style={{ fontWeight: "600" }}>{item.width}</p>
                </div>}
                {item.name && <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Image Height:</p>
                  <p style={{ fontWeight: "600" }}>{item.height}</p>
                </div>}
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Thumbnail :</p>
                  <Image
                    src={item.thumbnail}
                    alt=" "
                    width={200}
                    height={100}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Created At:</p>
                  <p style={{ fontWeight: "600" }}>{item.createdAt}</p>
                </div>
                <button onClick={() => deleteImage(item._id)}>delete</button>
              </div>
            ))}
          </div>
          <style jsx>{`
            #digitalart-input-div {
              display: none;
            }
          `}</style>
        </div>

        {/* photographys project file */}
        <div className="photographydiv" id="photography-input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="photography"
          >
            {photographydata.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  padding: "5px 20px",
                  fontFamily: "inherit",
                  fontWeight: "900",
                }}
              >
                {item.designtype && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Design Type:</p>
                    <p style={{ fontWeight: "600" }}>{item.designtype}</p>
                  </div>}
                  {item.name && <div style={{ display: "flex", marginBottom: "10px" }}>
                    <p style={{ marginRight: "20px" }}>Name:</p>
                    <p style={{ fontWeight: "600" }}>{item.name}</p>
                  </div>}
                {item.name && <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Image Width:</p>
                  <p style={{ fontWeight: "600" }}>{item.width}</p>
                </div>}
                {item.name && <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Image Height:</p>
                  <p style={{ fontWeight: "600" }}>{item.height}</p>
                </div>}
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Thumbnail :</p>
                  <Image
                    src={item.thumbnail}
                    alt=" "
                    width={200}
                    height={100}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Created At:</p>
                  <p style={{ fontWeight: "600" }}>{item.createdAt}</p>
                </div>

                <button onClick={() => deleteImage(item._id)}>delete</button>
              </div>
            ))}
          </div>
          <style jsx>{`
            #photography-input-div {
              display: none;
            }
          `}</style>
        </div>

        {/* Advertisement file */}
        <div className="advertisementdiv" id="advertisement-input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="advertisement"
          >
            {advertisementdata.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  padding: "5px 20px",
                  fontFamily: "inherit",
                  fontWeight: "900",
                }}
              >
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Name:</p>
                  <p style={{ fontWeight: "600" }}>{item.name}</p>
                </div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                  <p style={{ marginRight: "20px" }}>Thumbnail :</p>
                  <Image
                    src={item.thumbnail}
                    alt=" "
                    width={200}
                    height={100}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Created At:</p>
                  <p style={{ fontWeight: "600" }}>{item.createdAt}</p>
                </div>
                <button onClick={() => deleteAdv(item._id)}>delete</button>
              </div>
            ))}
          </div>
          <style jsx>{`
            #advertisement-input-div {
              display: none;
            }
          `}</style>
        </div>

        {/* contact file */}
        <div className="contactdiv" id="contact-input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="contact"
          >
            {contactdata.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  padding: "5px 20px",
                  fontFamily: "inherit",
                  fontWeight: "900",
                }}
              >
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Name:</p>
                  <p style={{ fontWeight: "600" }}>{item.name}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Email:</p>
                  <p style={{ fontWeight: "600" }}>{item.email}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Image Reference:</p>
                  <p style={{ fontWeight: "600" }}>{item.imagereference}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Subject :</p>
                  <p style={{ fontWeight: "600" }}>{item.subject}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Design Type :</p>
                  <p style={{ fontWeight: "600" }}>{item.designtype}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Graphic Design for:</p>
                  <p style={{ fontWeight: "600" }}>{item.graphicdesignfor}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Web Design for:</p>
                  <p style={{ fontWeight: "600" }}>{item.webdesignfor}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Massage:</p>
                  <p style={{ fontWeight: "600" }}>{item.description}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Created At:</p>
                  <p style={{ fontWeight: "600" }}>{item.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
          <style jsx>{`
            #contact-input-div {
              display: none;
            }
          `}</style>
        </div>

        {/* Feedback file */}
        <div className="feedbackdiv" id="feedback-input-div">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            id="feedback"
          >
            {feedbackdata.map((item) => (
              <div
                key={item._id}
                style={{
                  width: "100%",
                  height: "auto",
                  border: "1px solid #000",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  padding: "5px 20px",
                  fontFamily: "inherit",
                  fontWeight: "900",
                }}
              >
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Name:</p>
                  <p style={{ fontWeight: "600" }}>{item.name}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Email:</p>
                  <p style={{ fontWeight: "600" }}>{item.email}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Massage:</p>
                  <p style={{ fontWeight: "600" }}>{item.text}</p>
                </div>
                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px" }}>Created At:</p>
                  <p style={{ fontWeight: "600" }}>{item.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
          <style jsx>{`
            #feedback-input-div {
              display: none;
            }
          `}</style>
        </div>
      </div>
    </>
  );
};
