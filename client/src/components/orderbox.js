import React from 'react'
import Link from 'next/link'


import styles from "@/styles/orderbox.module.css"

const orderbox = () => {
  return (
    <>
                 {/* order footer display section */}
                 <div className={styles.orderbox}>
          <div className={styles.leftside}>
            to make this type of design :
          </div>
          <div className={styles.rightside}>
            <Link href="/contact">
              <button>
                order now
              </button>
            </Link>
          </div>
        </div>
    </>
  )
}

export default orderbox