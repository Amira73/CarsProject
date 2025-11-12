import React from 'react'
import mostpopularstyle from './Mostpopula.module.css'
import CarCard from '../CarCard/CarCard'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"; 
import { Link } from "react-router-dom";

export default function Mostpopular() {


   const [carList, setcarsList] = useState([])
     const [filteredItems, setFilteredItems] = useState([]);
   const [searchQuery, setSearchQuery] = useState('');
    let getCars=async()=>{
    let response=await axios.get("https://myfakeapi.com/api/cars/")
    console.log(response.data.cars)
    setcarsList((response.data.cars ?? []).slice(0, 4))    
    setFilteredItems((response.data.cars ?? []).slice(0, 4))   
}



const handleSearchChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchQuery(searchTerm); 

  
    const filtered = carList.filter((item) =>
      item.car.toLowerCase().includes(searchTerm)  
    );
    setFilteredItems(filtered);
  };
    //   let getCars=async()=>{
    //     let response=await axios.get("https://myfakeapi.com/api/cars/");
    //    console.log("cars:", response.data.cars);
    //   alert(`Fetched ${response.data.cars.length} cars`);
    //   setcarsList(response.data.cars);
   
    //  };
  
    


  useEffect(()=>{
  getCars();
  
  return ()=>{
  console.log("bye car")
  }
   },[]);
  return (
   <>
   
   
   <div class={ `${ mostpopularstyle.divflex} m-5` }>
    <div className='input-group  w-50'>
   
        <input
         type="text" class="form-control" 
         placeholder="Search by name" 
        //     value={q}
        onChange={handleSearchChange}
         aria-label="Recipient's username"
          aria-describedby="basic-addon2"/>
    </div>
  <div class="input-group-append">
    <button class={`${mostpopularstyle.btnbg}  btn`} type="button">Search</button>
  </div>
</div>
<div className='text-center'>
      <button type="button" className={`${mostpopularstyle.btnsecbg} btn `}>POPULAR RENTAL DEALS</button>
</div>

 <div className="container">
    <div className="row">
       {filteredItems.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
       {/* {carList.map(car=>
       <CarCard  key={car.id} car={car}/>

       )} */}

          {/* {filteredItems.map(car=>
       <CarCard  key={car.id} car={car}/>

       )} */}
       
    </div>
 </div>
<div className='text-center'>
  <Link to={'/allcars'}>
   <button class="btn btn-outline-secondary d-inline-flex align-items-center gap-2 rounded-3">
  Show all vehicles
  <svg width="18" height="18" viewBox="0 0 24 24"><path d="M13 5l7 7-7 7M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
</button>
</Link>
</div>



   </>
  )
}
