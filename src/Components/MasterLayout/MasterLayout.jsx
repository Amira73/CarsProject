import React from 'react'
import { Outlet, } from 'react-router-dom';

import Mostpopular from '../Mostpopular/Mostpopular';
import Howwork from '../Howwork/Howwork';
import Whychoose from '../Whychoose/Whychoose';
import Testmonials from '../Testmonials/Testmonials';
import Download from '../Download/Download';
import Footer from '../Footer/Footer';
import Bookcar from '../Bookcar/Bookcar';
import Welcome from '../Welcome/Welcome';
import Nav from '../Nav/Nav';



export default function MasterLayout() {
  return (
    <>
   
       

       <Welcome/>
       <Mostpopular/>
        <Howwork/>
        <Whychoose/>
        <Testmonials/>
        <Download/>
        <Footer/>

        {/* <div className="col-12 col-md-3 col-lg-3 border-end bg-light">
        
        </div> */}




          {/* <div className="col-12 col-md-9 col-lg-9 border-end bg-light"> */}
               
        {/* </div> */}
   
  
   
    </>
  )
}
