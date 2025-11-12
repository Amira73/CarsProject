import React from 'react'
import styles from './Howwork.module.css'
import InfiniteLogoLoop from "./InfiniteLogoLoop";
import * as imgs from '../../assets/images'

export default function Howwork() {
let src=imgs.logo1
  const logos = [
  { src: imgs.logo1, alt: "Visa" },
  { src: imgs.logo2, alt: "Mastercard" },
  { src: imgs.logo3, alt: "Amex" },
  { src: imgs.logo1, alt: "PayPal" },
  { src: imgs.logo1, alt: "Apple Pay" },
];
  return (
    <>
    <div className='text-center m-2'>
          <button type="button" className={`${styles.btnsecbg} btn `}>How It Work</button>
          <h2 className='m-2'>Rent with following 3 working steps</h2>
    </div>
 <div className="container">
  <div className="row">
    <div className=".col-md-6">
         <div className={styles.stepscontainer}>
  <div className={styles.step}>
    <div className={styles.iconbox}>
     <i className={`${styles.colori} fa-solid fa-car`}></i>
    </div>
    <h3>Choose location</h3>
    <p>Choose your and find your best car</p>
  </div>

  <div className={styles.step}>
    <div className={styles.iconbox}>
     <i className={`${styles.colori} fa-solid fa-car`}></i>
    </div>
    <h3>Pick-up date</h3>
    <p>Select your pick up date and time to book your car</p>
  </div>

 <div className="col-md-6">
  <div className={styles.step2}>
   <div className={styles.step}>
    <div className={styles.iconbox}>
      <i className={`${styles.colori} fa-solid fa-car`}></i>
    </div>
    <h3>Book your car</h3>
    <p>Book your car easily in few minutes</p>
  </div>
 </div>
 </div>
 
</div>
<p className='text-center'>Book your car and we will deliver it directly to you</p>

 <div style={{ padding: "24px 0" }}>
      <InfiniteLogoLoop logos={logos} height={100} gap={40} duration={10} />
    </div>
    </div>
  </div>
 </div>
    </>
  )
}
