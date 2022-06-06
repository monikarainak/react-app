import React from 'react'
import './actionComponent.css'

function ActionComponent() {
    return (
        <div>
            <section className="section-cta">
<div className="cta-container">
    <div className="cta-text-box">
       <h2 className="heading-secondary-cta">
           Gat your first meal for free!
       </h2>
       <p className="cta-text">
Healthy,Tasty and hassle free meals are waiting for you. Start eating well today. 
You can cancle or pause anytime. And the first meal is on us.
       </p>
       <form className="cta-form" action="#">
           <div>
           <label for="full-name">Full Name</label>
           <input type="text"id="full-name" placeholder="John Smith" required></input>
           </div>
           <div>
           <label for="email">Email Address</label>
           <input type="email" id="email" placeholder="me@example.com" required></input>
           </div>
           <div>
           <label for="select-where">Where did you hear from us? </label>
           <select id="select-where" required>
           <option value="">
                   Best choose one option
               </option>
               <option value="Friends">
                   Friends and Family 
               </option>
               <option value="Youtube">
                   Youtube video
               </option>
               <option value="Podcast">
                Podcast
               </option>
               <option value="Facebook">
                  Facebook ad
               </option>
               <option value="Others">
                   Others
               </option>
           </select>
           </div>
           <button className="sign-up-btn">Sign up now</button>

       </form>
        </div>
        <div className="cta-img-box" role="img" aria-label="women enjoying food"> 
      
        </div>
</div>
            </section>
        </div>
    )
}

export default ActionComponent
