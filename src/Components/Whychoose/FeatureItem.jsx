import React from 'react'

export default function FeatureItem({ iconSrc, title, subtitle }) {
  return (
    <div className="d-flex align-items-center gap-3 mb-4">
      <div className="d-flex align-items-center justify-content-center bg-light rounded-3"
           style={{ width: 60, height: 60  ,margin:30}}>
        <img src={iconSrc} alt="" className="d-block" style={{ width: 60, height: 60 }} />
      </div>

      <div>
        <h6 className="mb-1 fw-semibold">{title}</h6>
        <p className="mb-0 text-muted">{subtitle}</p>
      </div>
    </div>
  );
}
