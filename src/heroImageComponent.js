import React from "react";
import "./heroImageComponent.css";
import './queries.css'
import heroimg from "./img/hero.png";
import customer1 from "./img/customers/customer-1.jpg"
import customer2 from "./img/customers/customer-2.jpg"
import customer3 from "./img/customers/customer-3.jpg"
import customer4 from "./img/customers/customer-4.jpg"
import customer5 from "./img/customers/customer-5.jpg"
import customer6 from "./img/customers/customer-6.jpg"
function HeroImageComponent() {
  return (
    <div className="container">
        <main>
      <section className="section-hero">
          <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365 days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className="btn btn--full">Start eating well</a>
          <a href="#" className="btn btn--outline">Learn more &darr;</a>
          <div className="delivered-meals">
              <div className="delivered-imgs">
<img src={customer1} alt="Customer Photo" />
<img src={customer2} alt="Customer Photo" />
<img src={customer3} alt="Customer Photo" />
<img src={customer4} alt="Customer Photo" />
<img src={customer5} alt="Customer Photo" />
<img src={customer6} alt="Customer Photo" />
              </div>
<p className="delivered-text"><span>250,000+</span> meals delivered last year.</p>
        </div>
        </div>
        <div className="hero-img-box">
          <img
            src={heroimg}
            alt="women enjoying food,meals 
                        in storage container and food bowl on table"
            className="hero-img"
          />
        </div>
        </div>
      </section>
      </main>
    </div>
  );
}

export default HeroImageComponent;
