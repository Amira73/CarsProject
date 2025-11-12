import React from 'react'
import styles from './Testmonials.module.css'

export default function InfinteCardLoop({
  logos = [],              // [{src, alt}] or string[] of srcs
  height = 500,             // px
  gap = 48,                // px between logos
  duration = 60,           // seconds for one full loop
  pauseOnHover = true,
}) {
  const items = logos.map(l => (typeof l === "string" ? { src: l, alt: "logo" } : l));
  // duplicate to create a seamless loop
  const loop = [...items, ...items];

  return (
    <div
      className={`logo-loop ${pauseOnHover ? "logo-loop--pause" : ""}`}
      style={{
        "--loop-gap": `${gap}px`,
        "--logo-h": `${height}px`,
        "--loop-duration": `${duration}s`,
      }}
      aria-label="Partner logos"
    >
      <div className="logo-track">
        {loop.map((l, i) => (
          <div className="logo-item" key={i}>
            {/* {
              
             <img src={l.src} alt={l.alt || "logo"} height={height} /> 
             } */}
            <div class={`${styles.flexul} card w-50 h-50`} >
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
 <img className="img-fluid w-100 h-100" src={l.src} alt={l.alt || "logo"}/>
                  </div>
                   <div className="col-md-6">
                     <div class="card-body ">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the bulkd's content.</p>
   
  </div> 
                  </div>
                </div>
              </div>
  {/* <img class="img-fluid" src={l.src} alt={l.alt || "logo"}/>
  <div class="card-body ">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div> */}
</div>
          </div>
        ))}
      </div>
      {/* optional gradient fade edges */}
      <div className="logo-fade left" />
      <div className="logo-fade right" />
    </div>
  );
}
