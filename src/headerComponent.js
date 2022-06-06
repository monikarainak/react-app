import React from 'react'
import './headerComponent.css'
import './queries.css'
import logo from './img/omnifood-logo.png'
function HeaderComponent() {
    return (
        <div classNamr="header-section">
            <header className="header">
<img src={logo} alt="omnifood logo" className="logo"/>
<nav className="main-nav">
    <ul className="main-nav-list">
        <li>
<a href="#" className="main-nav-link" >How it works</a>
        </li>
        <li>
<a href="#" className="main-nav-link" >Meals</a>
        </li>
        <li>
<a href="#" className="main-nav-link" >Testimonials</a>
        </li>
        <li>
<a href="#" className="main-nav-link">Pricing</a>
        </li>
        <li>
<a href="#" className="main-nav-link nav-cta" >Try for free</a>
        </li>
    </ul>
</nav>
            </header>
            
        </div>
    )
}

export default HeaderComponent
