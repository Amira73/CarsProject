import React from 'react'
import styles from './Testmonials.module.css'
import * as imgs from '../../assets/images'
import InfinteCardLoop from './InfinteCardLoop';


export default function Testmonials() {
  let src=imgs.logo1
    const logos = [
    { src: imgs.boy, alt: "Visa" },
    { src: imgs.girl, alt: "Mastercard" },
    { src: imgs.boy, alt: "Amex" },
    { src: imgs.girl, alt: "PayPal" },
    { src: imgs.boy, alt: "Apple Pay" },
  ];
  return (
    <>

    <div className={styles.framebg}>
      <div className='text-center m-5'>
            <button type="button" className={`${styles.btnsecbg} btn `}>TESTMONIALS</button>

            <h3 className='m-2'>what people say about us?</h3>

             <div style={{ padding: "" }}>
                  <InfinteCardLoop  logos={logos} height={200} gap={1} duration={30} />
                </div>
         
      </div>
    </div>
    </>
  )
}
