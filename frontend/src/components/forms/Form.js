import React, { useState } from "react";
import Input from "./Input";
import API from "../../services/API";
import Evaluate from "../layout/Evaluate";
import { useLocation, useNavigate } from "react-router-dom";

const Form = () => {
  const [operation, setOperation] = useState("");
  const [number, setNumber] = useState(0);
  const [inputs, setInputs] = useState([]);
  const [data, setData] = useState([]);
  const [add_rollno, setadd_rollno] = useState();
  const [add_email, setadd_email] = useState(''); 

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddDb = async () => {
    try {
      if(operation === 'add') {
        const {data} = await API.post('/student/add-student', {rollNo:add_rollno, email:add_email});
        if(data?.success) {
          alert(data?.message)
        }
      }
    }
    catch(error) {
      alert(error);
    }
  }

  const handleSubmit = async () => {
    try {
      // console.log(inputs);
      if(!operation) {
        alert('Enter the operation');
      }
      if(operation === 'edit') {
        if(number >= 3 && number <= 4) {  
          // check whether student is available or not   
          const dataPromises = inputs.map((rollNo) => 
            API.get('/student/get-student', {params:{rollNo:rollNo}})
          )
          const responseData = await Promise.all(dataPromises);
          // console.log(responseData);
          // Check for errors and update the data
          const updatedData = [...data];
          let temp = 1;
          responseData.forEach((response, index) => {
            const { data } = response;
            console.log(data?.student);
            if (!data?.success) {
              alert(data?.message);
              temp = 0;
            }
            updatedData[index] = { ...updatedData[index], student: data?.student };
          });
          if(temp) {
            setData(updatedData);
            inputs.map(async (rollNo) => {
              await API.get('/student/change-label', {params:{rollNo:rollNo}});
            })
            // console.log(updatedData);
            navigate('/evaluate', {state:{operation, data2:updatedData}});
          }
        }
        else {
          alert('Invalid Number of students selected')
        }
      }
      else if(operation === 'remove') {
        // remove the student from the database
        inputs.map(async (rollNo) => {
          await API.post('/student/remove-student', {rollNo});
        })
        alert('Students Deleted Successfully');
      }
    } catch (error) {
        alert(error);
    }
  };

  const handleAdd = async () => {
    // console.log(number);
    // console.log(inputs)
    if(number >= 4) {alert('At most 4 Students Can be Added');}
    else {
      setInputs([...inputs, number])
      setNumber(number + 1);
    };
  }

  return (
    <div>
     <div>
      {/* <form> */}
        <div className="sidebar-operation">
          <div
            className="d-flex mb-3"
            style={{ display: "flex", gap: "60px" }}
          >
            <div className="form-check ms-2">
              <input
                type="radio"
                className="form-check-input"
                name="operation"
                id="add"
                value={"add"}
                onChange={(e) => setOperation(e.target.value)}
              />
              <label htmlFor="book" className="form-check-label">
                Add&nbsp;RollNo&nbsp;Db
              </label>
            </div>
            <div className="form-check ms-2">
              <input
                type="radio"
                className="form-check-input"
                name="operation"
                id="edit"
                value={"edit"}
                onChange={(e) => setOperation(e.target.value)}
              />
              <label htmlFor="edit" className="form-check-label">
                Edit/Assign&nbsp;Marks
              </label>
            </div>

            <div className="form-check ms-2">
              <input
                type="radio"
                className="form-check-input"
                name="operation"
                id="remove"
                value={"remove"}
                onChange={(e) => setOperation(e.target.value)}
              />
              <label htmlFor="delete" className="form-check-label">
                Remove
              </label>
            </div>
          </div>
          {
            // adding this to add the entry to db
            operation === 'add' && (
              <div style={{marginBottom: '10px', paddingBottom:'5px'}}>
              <div style={{marginLeft:'80px'}}>
                <Input
                  labelFor='rollNo'
                  labelText='Roll No'
                  inputType='number'
                  value={add_rollno}
                  width1='300px'
                  height1='40px'
                  onChange={(e) => setadd_rollno(e.target.value)}
                />
                <Input
                  labelFor='email'
                  labelText='Email'
                  inputType='email'
                  value={add_email}
                  width1='300px'
                  height1='40px'
                  onChange={(e) => setadd_email(e.target.value)}
                />
              </div>
              <div style={{marginLeft:'200px', marginBottom: '10px'}}><button className='button' onClick={handleAddDb} style={{marginTop: '20px'}}>Submit</button></div>
              </div>
            )
          }
          {
            (operation === 'edit' || operation === 'remove' || number > 0) && (
              <div>
                  <button className="button" onClick={handleAdd}>Evaluate&nbsp;Student&nbsp;: Add&nbsp;Roll&nbsp;No</button>
                    <div style={{marginLeft:'80px'}}>
                      {inputs.map((input, index) => (
                        <Input
                          key={index}
                          labelFor={`input-${index}`}
                          labelText="Roll No"
                          inputType='number'
                          name={`input-${index}`}
                          value={input}
                          width1='300px'
                          height1='40px'
                          onChange={(e) => {
                            const updatedInputs = [...inputs];
                            updatedInputs[index] = e.target.value;
                            setInputs(updatedInputs);
                          }}
                        />
                      ))}
                    </div>
                  <div style={{marginLeft:'200px', paddingBottom:'15px'}}><button className='button' onClick={handleSubmit} style={{marginTop: '20px'}}>Submit</button></div>
                </div>
              )
          }
          </div>
      </div>
    </div>
  );
};

export default Form;
