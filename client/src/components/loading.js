import React, { useEffect, useState } from "react";

export default function loading() {
  let [load, setLoad] = useState(0);
  useEffect(() => {
    const loading = setInterval(() => {
      load += 5;
      if (load > 100) {
        const preloader = document.querySelector(".preloader");
        preloader.style.visibility = "hidden";
        clearInterval(loading);
      }
      setLoad(load);
    }, 300);
  }, []);
  return (
    <>
      <div className="preloader">
        <div className="loader">{load}%</div>
      </div>
    </>
  );
}
