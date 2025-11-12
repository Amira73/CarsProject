import React from 'react'
import * as imgs from '../../assets/images'

export default function Notfound() {
  return (
    <>
    <div className='text-center'>
      <img src={imgs.notfound} alt="notfound" className='img-fluid w-50 h-50 text-center'></img>
    </div>
    </>
  )
}
