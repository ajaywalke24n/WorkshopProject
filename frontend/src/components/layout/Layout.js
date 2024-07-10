import React from "react";
import Sidebar from "./Sidebar";
import '../../styles/styles.css';
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";


const Layout = () => {
  return (
    <div>
    <div>
    <Header/>
      <div className="row g-0">
        <div className="col-md-4">
          <Sidebar/>
        </div>
        <div className="col-md-6">
          <h3 style={{margin: "10px",textAlign:'center'}}>Student Details</h3>
          <Search/>
        </div>
      </div>
    </div>
    <hr></hr>
    <Footer/>
    </div>
  );
};

export default Layout;
