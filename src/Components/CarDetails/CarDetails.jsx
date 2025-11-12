import React from 'react'
import styles from './CarDetails.module.css'
import * as imgs from '../../assets/images'
import CarFeatures from './CarFeatures'
import { Link } from "react-router-dom";

export default function CarDetails() {
  return (
   <>
    
     <nav className={` ${styles.flexul}`}>
  <ul className={` ${styles.flexul}  me-auto d"`}>
    <li className="nav-item">
      <Link
        to="/home"
        end
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      >
        Home/
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/allcars"
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      >
        Cars/
      </Link>

        <Link
        to="/allcars"
        className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
      >
        Cars Details/
      </Link>
    </li>
  </ul>
</nav>
        <div className={styles.framebg}>
   <div className="container-fluid my-5">
     <div className="row">
       <div className={`${styles.container} col-md-6`}>
         <div className={styles.container}>
        <img src={`${imgs.whycar}`} alt="why car"/>
        </div>
       </div>
          <div className="col-md-6">
          <div className=''>
                <button type="button" className={`${styles.btnsecbg} btn `}>WHY CHOOSE US</button>
                <h4 className='py-3'>We offer the best experience with our rental deals</h4>
          </div>
   
       <CarFeatures />
          </div>
     </div>
   </div>
        </div>
      
   </>
  )
}
