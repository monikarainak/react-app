import React from "react";
import "./descriptionComponent.css";
import './queries.css'
import screen1 from './img/app/app-screen-1.png'
import screen2 from './img/app/app-screen-2.png'
import screen3 from './img/app/app-screen-3.png'

function DescriptionComponent() {
  return (
    <div>
      <section className="section-how">
        <div className="dec-container-1">
          <span className="subheading">How It Works</span>
          <h2 className="heading-secondary">
            {" "}
            Your daily dose of health in 3 simple steps
          </h2>
          
        </div>
        <div className="dec-container">
<div className="step-text-box">
<p className="step-number">01</p>
<h3 className="heading-tertiary">Tell us what you want (and what not)</h3>
<p className="step-description">
          Never again waste time thinking about what to eat !
          Omnifood AI will creates a 100% personalized
          weekly meal plan just for you. It makes sure you 
          get all the nutrients and vitamins you need, no
          matter what diet you are follow!</p>
</div>
<div className="step-img-box">
   <img src={screen1} alt="iPhone app preferences selection screen" className="step-img"/>
</div>

<div className="step-img-box">
   <img src={screen2} alt="iPhone app meal approving plan" className="step-img"/>
</div>
<div className="step-text-box">
<p className="step-number">02</p>
<h3 className="heading-tertiary">Approve your weekly meal plan</h3>
<p className="step-description">
          Once per week approve the meal plan generated for you by Omnifood AI. You can change Ingredients, 
          swap entire meals, and add your own recipes.
          </p>
</div>

<div className="step-text-box">
<p className="step-number">03</p>
<h3 className="heading-tertiary">Receive meals at convenient time</h3>
<p className="step-description">
          Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever
          works best for you. you can change deliverv schedule and addresss daily!
          </p>
</div>
<div className="step-img-box">
   <img src={screen3} alt="iPhone app delivery screen" className="step-img"/>
</div>
        </div>
      </section>
    </div>
  );
}

export default DescriptionComponent;
