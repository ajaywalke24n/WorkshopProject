import React from "react";
import Sidebar from "./Sidebar";
// import Search from "./Search";
import '../../styles/styles.css';


const Layout = () => {
  return (
    <div>
    <div>
    <div className="header">
      <div className="header-container">
        <h1>Evaluation Dashboard App</h1>
      </div>
    </div>
      <div className="row g-0">
        <div className="col-md-4">
          <Sidebar/>
        </div>
        <div className="col-md-6">
          <h3 style={{margin: "10px",textAlign:'center'}}>Student Details</h3>
          
        </div>
      </div>
    </div>
    <hr></hr>
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
    </div>
  );
};

export default Layout;
