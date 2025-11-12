import React from 'react'
import styles from './Whychoose.module.css'
import * as imgs from '../../assets/images'
import FeatureItem from './FeatureItem'

export default function Whychoose() {
  return (
    
    <>
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

          <div className="container py-3">
      <FeatureItem iconSrc={imgs.feature}
        title="Best price guaranteed"
        subtitle="Find a lower price? We’ll refund you 100% of the difference." />
      <FeatureItem iconSrc={imgs.feature}
        title="24 hour car delivery"
        subtitle="Book your car anytime and we will deliver it directly to you." />
      <FeatureItem iconSrc={imgs.feature}
        title="24/7 technical support"
        subtitle="Contact support any time when you have a problem." />
           <FeatureItem iconSrc={imgs.feature}
        title="24/7 technical support"
        subtitle="Contact support any time when you have a problem." />
    </div>
       </div>
  </div>
</div>
     </div>
    </>
  )
}
