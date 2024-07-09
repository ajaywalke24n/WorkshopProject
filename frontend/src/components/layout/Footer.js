import React from 'react';
import '../../styles/styles.css'


function Footer() {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h1>Team 8</h1>
            </div>
            <div className="footer-links">
              <ul>
                <li><a href="https://github.com/ajaywalke24n/WorkshopProject">Github</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;