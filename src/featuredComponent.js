import React from 'react'
import './featuredComponent.css'
import './queries.css'
import techcrunch from './img/logos/techcrunch.png'
import business from './img/logos/business-insider.png'
import forbes from './img/logos/forbes.png'
import newyork from './img/logos/the-new-york-times.png'
import usa from './img/logos/usa-today.png'

function FeaturedComponent() {
    return (
        <div>
            <section className="section-featured">
        <div className="feature-box-container">
<h2 className="heading-featured-in">
As featured in
</h2>
<div className="logos">
    <img src={techcrunch } alt="Techcrunch logo"/>
    <img src={business } alt="Business insider logo"/>
    <img src={newyork} alt="new york logo"/>
    <img src={forbes } alt="forbes logo"/>
    <img src={usa } alt="usa logo"/>
    </div>
        </div>
            </section>
        </div>
    )
}

export default FeaturedComponent
