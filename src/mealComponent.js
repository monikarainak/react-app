import React from 'react'
import './mealComponent.css'
import './queries.css'
import FireIcon from './fireIcon';
import SpoonIcon from './spoonIcon';
import meal1 from './img/meals/meal-1.jpg';
import meal2 from './img/meals/meal-2.jpg';
import StarIcon from './starIcon';
import CheckIcon from './checkIcon';

function MealComponent() {
    return (
        <div>
            <section className="section-meals">
            <div className="meal-container-1">
          <span className="subheading-meal">Meals</span>
          <h2 className="heading-secondary-meal">
           Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>
        <div className="meal-grid-container">
            <div className="meals">
<img src={meal1} alt="japanese Gyozas" className="meal-img"/>
<div className="meal-content">
<div className="meal-tags">
<span className="tag"> Vegetarian </span>
</div>
<p className="meal-title">Japanese Gyozas</p>
<ul className="meal-attributes">
    <li className="meal-attribute"><FireIcon /><span><strong>650</strong> calories </span></li>
    <li className="meal-attribute"><SpoonIcon /><span>NutriScore &reg; <strong>74</strong></span> </li>
    <li className="meal-attribute"><StarIcon /><span><strong>4.9</strong> Rating (537)</span> </li>
</ul>
</div>
            </div>

            <div className="meals">
<img src={meal2} alt="Avocado salad" className="meal-img"/>
<div className="meal-content">
<div className="meal-tags">
<span className="tag tag--vegan"> Vegan </span>
<span className="tag tag--paleo"> Paleo </span>
</div>
<p className="meal-title">Avocado salad</p>
<ul className="meal-attributes">
    <li className="meal-attribute"><FireIcon /><span><strong>400</strong> calories </span></li>
    <li className="meal-attribute"><SpoonIcon /><span>NutriScore &reg; <strong>92</strong></span> </li>
    <li className="meal-attribute"><StarIcon /><span><strong>4.8</strong> Rating (441)</span> </li>
</ul>
</div>
</div>
            <div className="diets">
                <h3 className="heading-tertiary"> Works with any diet:</h3>
                <ul className="list">
<li className="list-item"><CheckIcon/><span>Vegitarian</span></li>
<li className="list-item"><CheckIcon/><span>Vegan</span></li>
<li className="list-item"><CheckIcon/><span>Pescatarian</span></li>
<li className="list-item"><CheckIcon/><span>Gluten Free</span></li>
<li className="list-item"><CheckIcon/><span>Lactose free</span></li>
<li className="list-item"><CheckIcon/><span>Keto</span></li>
<li className="list-item"><CheckIcon/><span>Paleo</span></li>
<li className="list-item"><CheckIcon/><span>Low FODMAP</span></li>
<li className="list-item"><CheckIcon/><span>Kid Friendly</span></li>
                </ul >
            </div>
        </div>
        <div className="all-recipes">
            <a href="#" className="Link">See all recipes &rarr; </a>
        </div>

            </section>
        </div>
    )
}

export default MealComponent
