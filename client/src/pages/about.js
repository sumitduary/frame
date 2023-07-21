import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

import { BsArrowBarLeft } from 'react-icons/bs';

import styles from "@/styles/about.module.css";

import framestudiologo from "@/image//frame-studio-1.png";

import admin from "@/image/people.png";

import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

export default dynamic(() => Promise.resolve(About), { ssr: false });

const About = () => {
  const router = useRouter()
  return (
    <>
      <Navbar/>
        <div className={styles.mainbody}>
        <button onClick={ () => router.back()} className={styles.closebtn} >
        <BsArrowBarLeft className={styles.leftarrow} /> back
          </button>

            <Image
              className={styles.aboutlogo}
              src={framestudiologo}
              //src="https://drive.google.com/uc?export=view&id=171BrLEBie62R8WdrsEIsrRhxZdoTNhm9"
              alt="Frame Studio Logo"
              priority
              unoptimized
              width={300}
              height={150}
            />

          <div className={styles.paragraphsection}>
            <div className={styles.paragraphheader}>Visual designer</div>
            <div className={styles.paragraphtext}>
              <span className={styles.hello}>Hello !</span>
              <br />
              We are a group of people, work as a
              <span>visual designer and website developer</span> based in
              kolkata, India. We are passionate abou making detailed, interative
              and created designs, regardless of the medium, we are working
              with.
              <br />
              We are passionate with other topics that interest us.
            </div>
          </div>

          <div className={styles.paragraphheader}>About Us</div>

          <div className={styles.member}>
            <div className={styles.person}>
              <div className={styles.image}>
                <Image
                  className={styles.memberimg}
                  src={admin}
                  alt="Sumit"
                  width={0}
                />
              </div>
              <div className={styles.person1}>
                <p className={styles.name}>SUMIT KUMAR DUARY</p>
                <p className={styles.position}>OWNER & CREATOR</p>
                <br />
                <p className={styles.work}>
                  Professionally work as an Advocate. In passion work as a
                  Graphics Designer.
                </p>
                <p className={styles.cvlink}>
                  <Link className="address" href="#">
                    <button>download cv</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.member}>
            <div className={styles.person}>
              <div className={styles.image}>
                <Image
                  className={styles.memberimg}
                  src={admin}
                  alt="Gourav"
                  width={0}
                />
              </div>
              <div className={styles.person2}>
                <p className={styles.name}>GOURAV DUARY</p>
                <p className={styles.position}>CO-PARTNER</p>
                <br />
                <p className={styles.work}>
                  Professionally work as an Web Developer. In passion work as a
                  Graphics Designer.
                </p>
                <p className={styles.cvlink}>
                  <Link className="address" href="#">
                    <button>download cv</button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};
