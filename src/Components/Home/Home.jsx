import React from 'react'
import homestyle from './Home.module.css'
import * as imgs from '../../assets/images'
import "animate.css";

export default function Home() {
  return (
    <>
   
    <div >

      <div className=" h-25">
        <div className="row flex-row">
        
          <div className="col-md-6 ">
           <h1  className="animate__animated animate__fadeInLeft ms-5">Find , Book and Rent a car <span className={homestyle.spancolor}>Easily</span></h1>
           <p className='ms-5'>Get a car wherever and whenever you need it with your IOS and Android device.</p>

            <div className='m-5 p-2'>
            <img className={`${homestyle.w35} img-fluid p=2 `} src={imgs.googleplayimg}/>
             <img className={`${homestyle.w35} img-fluid p=2 `} src={imgs.appplayimg}/>
          </div>
          </div>

         

            <div className="col-md-6">
            <img className='img-fluid  animate__animated animate__fadeInRight   animate__slower' src={imgs.homecar}/>
          </div>
        </div>
      </div>

    </div>
    </>
  )
}
