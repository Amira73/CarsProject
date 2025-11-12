import React from 'react'
import styles from './Download.module.css'
import * as imgs from '../../assets/images'

export default function Download() {
  return (
    <>
     
       
         <div className={styles.framebg}>
    <div className="container-fluid my-5">
      <div className="row">
        <div className={`${styles.container} col-md-6`}>
          <div className="">
            <section className="flex items-center justify-between py-16 px-4 bg-light-blue">
      {/* Left Section */}
      <div className="w-full max-w-lg">
        <h3 className="text-xl font-bold text-blue-800 mb-6">
          Download Rentcars App for <span className={styles.btnsec}>FREE</span>
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          For faster, easier booking and exclusive deals.
        </p>

      
        <form>
  <div class="mb-3">
   
    <input type="email" className="form-control w-50" id="exampleInputEmail1" placeholder='Name' aria-describedby="emailHelp"/>
  </div>

   <div class="mb-3">
   
    <input type="email" className="form-control w-50" id="exampleInputEmail1" placeholder='E-mail' aria-describedby="emailHelp"/>
 
  </div>

   <div class="mb-3">
   
    <input type="email" className="form-control w-50" id="exampleInputEmail1" placeholder='Password' aria-describedby="emailHelp"/>
  </div>
        </form>

        <div className='m-2 p-2'>
                 <img className={`${styles.w35} img-fluid p=2 `} src={imgs.googleplayimg}/>
                  <img className={`${styles.w35} img-fluid p=2 `} src={imgs.appplayimg}/>
               </div>
      </div>

     
     
    </section>
         </div>
        </div>
           <div className="col-md-6">
           <div className=''>
                 <img src={`${imgs.iphone} `} alt="why car" className='position-absolute me-0'/>
           </div>
           </div>
           </div>
           </div>
           </div>
    </>
  )
}
