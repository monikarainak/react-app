import React from 'react'
import './testmonialComponent.css'
import './queries.css'
import dave from './img/customers/dave.jpg'
import hannah from './img/customers/hannah.jpg'
import steve from './img/customers/steve.jpg'
import ben from './img/customers/ben.jpg'
import gallery1 from './img/gallery/gallery-1.jpg'
import gallery2 from './img/gallery/gallery-2.jpg'
import gallery3 from './img/gallery/gallery-3.jpg'
import gallery4 from './img/gallery/gallery-4.jpg'
import gallery5 from './img/gallery/gallery-5.jpg'
import gallery6 from './img/gallery/gallery-6.jpg'
import gallery7 from './img/gallery/gallery-7.jpg'
import gallery8 from './img/gallery/gallery-8.jpg'
import gallery9 from './img/gallery/gallery-9.jpg'
import gallery10 from './img/gallery/gallery-10.jpg'
import gallery11 from './img/gallery/gallery-11.jpg'
import gallery12 from './img/gallery/gallery-12.jpg'

function TestmonialComponent() {
    return (
        <div className="testimonial-main-container">
           <section className="section-testimonial testimonial-grid-container">
<div className="testimonial-container">
           <div className="testimonial-container-1">
          <span className="subheading-testimonial">Testimonials</span>
          <h2 className="heading-secondary-testimonial">
          Once you try it, you can't go back
          </h2>
        </div>
<div className="testimonials"> 
<figure className="testimonial">
    <img src={dave} alt="photo of customer dave bryson" className="testimonial-img"/>
   
    <blockquote className="testimonial-text">
Inexpensive, healthy and great-tasting meals, without even
having to order manually! It feels truly magical.
</blockquote>
<p classname="testimonial-name">&mdash;Dave Bryson</p>
</figure>

<figure className="testimonial">
    <img src={ben} alt="photo of customer Ben Hadley" className="testimonial-img"/>
   
    <blockquote className="testimonial-text">
The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about 
food anymore!
</blockquote>
<p classname="testimonial-name">&mdash;Ben Hadley</p>
</figure>

<figure className="testimonial">
    <img src={steve} alt="photo of customer Steve Miller " className="testimonial-img"/>
   
    <blockquote className="testimonial-text">
Omnifood is a life saver! I just started a company, so there's no time for cooking.
I coulden't live without my daily meal now!
</blockquote>
<p classname="testimonial-name">&mdash;Steve Miller</p>
</figure>

<figure className="testimonial">
    <img src={hannah} alt="photo of customer Hannah Smith " className="testimonial-img"/>
   
    <blockquote className="testimonial-text">
I got Omnifood for the whole family, and it freeze up so much time.
plus, everything is organic and vegan and without plastic!
</blockquote>
<p classname="testimonial-name">&mdash;Hannah Smith</p>
</figure>
</div>
</div>
<div className="gallery">
    <figure className="gallery-item">
        <img src={gallery1} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    <figure className="gallery-item">
        <img src={gallery2} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    <figure className="gallery-item">
        <img src={gallery3} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    <figure className="gallery-item">
        <img src={gallery4} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    <figure className="gallery-item">
        <img src={gallery5} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    <figure className="gallery-item">
        <img src={gallery6} alt="photo of beautifully arranged food" classname=""/>

    </figure>

    <figure className="gallery-item">
        <img src={gallery7} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    <figure className="gallery-item">
        <img src={gallery8} alt="photo of beautifully arranged food" classname=""/>

    </figure>
        <figure className="gallery-item">
        <img src={gallery9} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    <figure className="gallery-item">
        <img src={gallery10} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    
    <figure className="gallery-item">
        <img src={gallery11} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    <figure className="gallery-item">
        <img src={gallery12} alt="photo of beautifully arranged food" classname=""/>

    </figure>
    
</div>
               </section> 
        </div>
    )
}

export default TestmonialComponent
