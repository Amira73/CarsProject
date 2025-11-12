import React from 'react'
import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import welcomestyle from "./Welcome.module.css";

export default function Welcome() {
  return (
    <>
    <div className={welcomestyle.welcomebg}>
    <Nav/>
    <Home/>
  </div>
    </>
  )
}
