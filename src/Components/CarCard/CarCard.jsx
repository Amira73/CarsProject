import React from 'react'

import styles from './CarCard.module.css'
import * as imgs from '../../assets/images'
import { Link } from "react-router-dom";

export default function CarCard({car}) {
  const images = [imgs.car2, imgs.car3, imgs.car4];
const randomImg = images[Math.floor(Math.random() * images.length)];
  return (
   <>
   <div className="col-md-3 py-2">
    <div className={styles.card}>
      <img src={randomImg} alt="img" className={styles.carImg} />

      <h3 className={styles.title}>{car.car}</h3>

      <div className={styles.rating}>
        <span className={styles.star}>★</span>
        <span className={styles.score}>5</span>
        <span className={styles.reviews}>review</span>
      </div>

      {/* <div className={styles.features}>
        {specs.map((s, i) => (
          <div key={i} className={styles.featureItem}>{s}</div>
        ))}
      </div> */}

      <div className={styles.priceSection}>
       
       <div className={styles.rowbetween}>
         <span className={styles.priceLabel}>price</span>
         <div>
         <span className={styles.price}>{car.price.toLocaleString()}</span>
        <span className={styles.perDay}>/day</span>
        </div>
       </div>
      </div>
          <Link to={'/cardetails'}>
      <button className={styles.rentBtn}>Rent Now →</button>
     </Link>
    </div>
</div>
   </>
  )
}

