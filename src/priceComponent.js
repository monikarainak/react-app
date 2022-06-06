import React from 'react'
import './priceComponent.css'
import './queries.css'
import CheckIcon from './checkIcon'
import InfiniteIcon from './infiniteIcon'
import PauseIcon from './pauseIcon'
import WasteIcon from './wasteIcon'

function PriceComponent() {
    return (
        <div>
            <section className="section-pricing">
            <div className="price-container-1">
          <span className="subheading-price">Pricing</span>
          <h2 className="heading-secondary-price">
         Eating well without breaking the bank
          </h2>
        </div>
        <div className="price-grid-container">
     <div className="pricing-plan pricing-plan--starter">
     <header className="plan-header">
         <p className="plan-name">Starter</p>
         <p className="plan-price"><span>$</span>390</p>
         <p className="plan-text">Per month. That's just $13 per meal</p>
         </header>
         <ul className="list-price">
<li className="list-price-item"><CheckIcon/><span>1 meal per day</span></li>
<li className="list-price-item"><CheckIcon/><span>Order from 11am to 9pm</span></li>
<li className="list-price-item"><CheckIcon/><span>Delivery is free</span></li>
<li className="list-price-item"><CheckIcon/><span>Get access to latest recipes</span></li>
</ul>
<div className="plan-sign-up">
<a href="#" className="btn price-btn">Start eating well</a>
</div>
     </div>
     <div className="pricing-plan pricing-plan--complete">
         <header className="plan-header">
         <p className="plan-name">Complete</p>
         <p className="plan-price"><span>$</span>640</p>
         <p className="plan-text">Per month. That's just $11 per meal</p>
         </header>
         <ul className="list-price">
<li className="list-price-item"><CheckIcon/><span><strong>2 meals</strong> per day</span></li>
<li className="list-price-item"><CheckIcon/><span>Order <strong>24/7</strong></span></li>
<li className="list-price-item"><CheckIcon/><span>Delivery is free</span></li>
<li className="list-price-item"><CheckIcon/><span>Get access to latest recipes</span></li>
</ul>
<div className="plan-sign-up">
<a href="#" className="btn price-btn">Start eating well</a>
</div>
     </div>
      </div>

      <div className="title-feature-container">
<aside className="plan-details">
    Prices include all applicable taxes. You cancle at any time. Both plans includes the following
</aside>
     </div>
      <div className="feature-grid-container">
          <div className="feature">
              <InfiniteIcon/>
              <p className="feature-title">Never cook again!</p>
              <p className="feature-text">Our subscriptions cover 365 days per year, even including major holidays.</p>
          </div>
          <div className="feature">
              <InfiniteIcon/>
              <p className="feature-title">Local and Organic</p>
              <p className="feature-text">
                  Our cooks only use local, fresh and organic products to prepare your meals .</p>
          </div>
          <div className="feature">
              <WasteIcon/>
              <p className="feature-title">No waste</p>
              <p className="feature-text">
                  All our partners only use reusable container to package all your meals.</p>
          </div>
          <div className="feature">
              <PauseIcon/>
              <p className="feature-title">Pause anytime</p>
              <p className="feature-text">
                  Going on vacation? Just pause your subscription, and we refund unused days.</p>
          </div>
      </div>
            </section>
        </div>
    )
}

export default PriceComponent
