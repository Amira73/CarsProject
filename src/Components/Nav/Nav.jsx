import React from 'react'
import * as imgs from '../../assets/images'
import navstyle from "./Nav.module.css";
import Home from '../Home/Home';

export default function Nav() {
  return (
   <>
   
    <nav className="navbar navbar-expand-lg  m-5 flex align-items-center ">
  <div className="container-fluid">
     <a className="navbar-brand" href="#">
    <img src={imgs.logo} className="d-inline-block  img-fluid " alt=""/>
   
  </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto ">
        <li className="nav-item">
          <a className={`${navstyle.navli} nav-link active`} aria-current="page" href="#">Become a renter</a>
        </li>
       
        <li className="nav-item">
          <a className={`${navstyle.navli} nav-link`} href="#">Renter detail</a>
        </li>
        <li className="nav-item">
          <a className={`${navstyle.navli} nav-link`}>How it work</a>
        </li>

         <li className="nav-item">
          <a className={`${navstyle.navli} nav-link`}>Why choose us</a>
        </li>





         <li className="nav-item">
        <button class="btn  my-2 my-sm-0" type="submit">Sign in</button>
        </li>
         <li className="nav-item">
        <button className={`${navstyle.btnbg} btn  my-2 my-sm-0`} type="submit">Sign up</button>
        </li>
      </ul>
    </div>
  </div>
</nav>


   </>
  )
}
