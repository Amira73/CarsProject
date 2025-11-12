import React from 'react'
import * as imgs from '../../assets/images'
export default function Footer() {
  return (
   <>
   <footer className="bg-dark text-light py-5">
  <div className="container">
    <div className="row gy-4">
   
      <div className="col-12 col-lg-4">
        <div className="d-flex align-items-center gap-2 mb-3">
         
         <img src={imgs.logo} className='img-fluid m-2'/>
        </div>

        <ul className="list-unstyled small text-secondary mb-0">
          <li className="d-flex gap-2 mb-2">
            <i className="bi bi-geo-alt"></i>
            <span>25586 Hc 1 Glenallen,<br/> Alaska, 99588, USA</span>
          </li>
          <li className="d-flex gap-2 mb-2">
            <i className="bi bi-telephone"></i>
            <a className="link-light link-opacity-75-hover text-decoration-none" href="tel:+603478427312">
              +603 4784 273 12
            </a>
          </li>
          <li className="d-flex gap-2">
            <i className="bi bi-envelope"></i>
            <a className="link-light link-opacity-75-hover text-decoration-none" href="mailto:rentcars@gmail.com">
              rentcars@gmail.com
            </a>
          </li>
        </ul>
      </div>

    
      <div className="col-6 col-lg-2">
        <h6 className="text-secondary text-uppercase small mb-3">Our Product</h6>
        <ul className="list-unstyled small m-0">
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Career</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Car</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Packages</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Features</a></li>
          <li><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Priceline</a></li>
        </ul>
      </div>

      <div className="col-6 col-lg-2">
        <h6 className="text-secondary text-uppercase small mb-3">Resources</h6>
        <ul className="list-unstyled small m-0">
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Download</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Help Centre</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Guides</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Partner Network</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Cruises</a></li>
          <li><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Developer</a></li>
        </ul>
      </div>

      <div className="col-6 col-lg-2">
        <h6 className="text-secondary text-uppercase small mb-3">About Rentcars</h6>
        <ul className="list-unstyled small m-0">
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Why choose us</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Our Story</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Investor Relations</a></li>
          <li className="mb-2"><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Press Center</a></li>
          <li><a className="link-light link-opacity-75-hover text-decoration-none" href="#">Advertise</a></li>
        </ul>
      </div>

      <div className="col-6 col-lg-2">
        <h6 className="text-secondary text-uppercase small mb-3">Follow Us</h6>
        <div className="d-flex gap-2">
        <i className="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-linkedin"></i>
         <i class="fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>

    <hr className="border-secondary border-opacity-25 my-4"/>

    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start small text-secondary">
      <p className="mb-2 mb-sm-0">Copyright 2023 &nbsp;–&nbsp; Rentcars, All Rights Reserved</p>
      <div className="d-flex gap-3">
        <a href="#" className="link-light link-opacity-75-hover text-decoration-none">Terms</a>
        <a href="#" className="link-light link-opacity-75-hover text-decoration-none">Privacy</a>
        <a href="#" className="link-light link-opacity-75-hover text-decoration-none">Cookies</a>
      </div>
    </div>
  </div>
</footer>

   </>
  )
}
