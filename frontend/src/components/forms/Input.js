import React from "react";

const Input = ({ labelFor, labelText, inputType, value, onChange, name , width1, height1}) => {
  return (
    <div style={{marginLeft:'20px', width:'200px'}}>
      <label htmlFor={labelFor} className="form-label">
        {labelText}
      </label>
      <input
        style={{ width: width1, height: height1 }}
        type={inputType}
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
