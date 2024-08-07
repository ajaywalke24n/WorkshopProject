import React from "react";
import "../../styles/styles.css";
import Form from "../forms/Form";
const Sidebar = () => {
  return (
    <div>
      <div class="welcome-container">
        <h1>Welcome, Judges</h1>
        <p>
          We're excited to have you on board to guide and evaluate fairly
        </p>
      </div>

      <div className="main-container">
        <h3 style={{textAlign:'center'}}>Evaluate Students</h3>
        <Form/>
      </div>
    </div>
  );
};

export default Sidebar;
