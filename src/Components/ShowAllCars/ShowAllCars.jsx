import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import CarCard from '../CarCard/CarCard'
import axios from "axios"; 
import { Link } from "react-router-dom";
import styles from './ShowAllCars.module.css'

export default function ShowAllCars() {
    const [carList, setcarsList] = useState([])


    const [page, setPage] = useState(1);
  const pageSize = 20;
  const [total, setTotal] = useState(0);


  
    let getCars=async()=>{
    let response=await axios.get("https://myfakeapi.com/api/cars/")
    console.log(response.data.cars)
 
    setcarsList(response.data.cars)
    }
     useEffect(()=>{
      getCars();
      
      return ()=>{
      console.log("bye car")
      }
       },[]);
  return (
   <>
   
<div className="container">
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
    </li>
  </ul>
</nav>
  <div className='text-center'>

        <button type="button" className={`${styles.btnsecbg} btn m-3 `}>POPULAR RENTAL DEALS</button>
        <h2>Most Popular Cars Rental Deals</h2>
  </div>
    <div className="row">
       {carList.map(car=>
       <CarCard key={car.id} car={car}/>

       )}
    </div>

    <nav aria-label="Page navigation example">
  <ul class="pagination flex justify-content-center">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
 </div>

   </>
  )
}
