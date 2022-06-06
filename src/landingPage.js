import React from 'react'
import HeaderComponent from './headerComponent'
import HeroImageComponent from './heroImageComponent'
import FeaturedComponent from './featuredComponent'
import DescriptionComponent from './descriptionComponent'
import MealComponent from './mealComponent'
import TestmonialComponent from './testmonialComponent'
import PriceComponent from './priceComponent'
import ActionComponent from './actionComponent'
import FooterComponent from './footerComponent'

function LandingPage() {
    return (
        <div className="landing-page-container">
            <div className="header-container">
                <HeaderComponent />
            </div>
<div className="hero-image-container">
<HeroImageComponent />
</div>
<div className="feature-container">
    <FeaturedComponent/>
</div>
<div className="description-container">
<DescriptionComponent />
</div>
<div className="meal-container">
    <MealComponent/>
</div>
<div className="test-container">
    <TestmonialComponent/>
</div>
<div className="price-container">
    <PriceComponent/>
</div>

<div className="action-container">
    <ActionComponent/>
</div>   
<div className="footer-container">
    <FooterComponent/>
</div>      
        </div>
    )
}

export default LandingPage
