import React from 'react'
import './footerComponent.css'
import './queries.css'
import logo from './img/omnifood-logo.png'
import InstaIcon from './instaIcon'
import FacebookIcon from './facebookIcon'
import TwitterIcon from './twitterIcon'

function FooterComponent() {
    return (
        <div className="footer">
           <footer className="footer-grid-container">
               <div className="logo-col">
             <a href="#" className="footer-logo">
                 <img src={logo} 
                 alt="omnifood logo"
                  className="logo"/>
                  </a>
                  <ul className="social-link">
                     <li> <a className="footer-link" href="#">
                          <InstaIcon/>
                      </a >
                      </li>
                      <li> <a className="footer-link" href="#">
                          <FacebookIcon/>
                      </a>
                      </li>
                      <li> <a className="footer-link" href="#">
                          <TwitterIcon/>
                      </a>
                      </li>
                      </ul>
                  <p className="copyright">Copyright &copy; 2027 by Omnifood, Inc. all rights reserved</p>
               </div>
               <div className="address-col">
                  <p className="footer-heading">Contact us</p>
                  <address className="contacts">
                      <p className="address">623 Harrison st., 2nd floor, san francisco CA 94187</p>
                      <p>
                          <a className="footer-link" href="tel:415-210-6370">415-210-6370</a><br/>
                          <a className="footer-link" href="mailto:hello@omnifood.com">hello@omnifood.com</a>
                      </p>
                  </address>
               </div>
               <nav className="nav-col">
                <p className="footer-heading">Account</p>

                <ul className="footer-nav">
                    <li>
                        <a className="footer-link" href="#">Create Account</a>
                    </li>
                    <li>
                        <a className="footer-link"  href="#">Sign in</a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">iOS app</a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">Android app</a>
                    </li>
                </ul>
               </nav>
              
               <nav className="nav-col">
                <p className="footer-heading">Company</p>

                <ul className="footer-nav">
                    <li>
                        <a className="footer-link" href="#">About Omnifood</a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">For Business</a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">Cooking Partners</a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">Careers</a>
                    </li>
                </ul>
               </nav>
               <nav className="nav-col">
                <p className="footer-heading">Resources</p>

                <ul className="footer-nav">
                    <li>
                        <a className="footer-link" href="#">Recipe Directory</a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">Help center</a>
                    </li>
                    <li>
                        <a className="footer-link" href="#">Privacy & Terms</a>
                    </li>
                    
                </ul>
               </nav>
               
               </footer> 
        </div>
    )
}

export default FooterComponent
