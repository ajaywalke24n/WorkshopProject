import React, { useEffect, useState } from "react";
import API from "../../services/API";
import { Container } from "react-bootstrap"; 

const Search = () => {
  const [searchOption, setSearchOption] = useState("");
  const [data, setData] = useState([]);
  const searchall = async () => {
    try {
      const { data } = await API.get("/view/view-all");
      setData(data?.student);
    } catch (error) {
      alert(error);
    }
  };
  const search = async () => {
    if (searchOption === "assigned") {
      const { data } = await API.get("/view/assigned");
      setData(data?.student);
    } else if (searchOption === "notassigned") {
      const { data } = await API.get("/view/not-assigned");
      setData(data?.student);
    }
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "50px",
          marginTop: "10px",
          marginLeft: "30px",
          marginBottom: '10px',
        }}
      >
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value={"assigned"} hidden>
            Filter by.....
          </option>
          <option value={"assigned"}>Assigned</option>
          <option value={"notassigned"}>Not Assigned</option>
        </select>
        <button className='button' onClick={search}>Search</button>
        <button className='button' onClick={searchall}>Search&nbsp;All</button>
      </div>

      <div style={{marginLeft: '30px', marginTop:'20px', borderTop: '2px solid black'}}>
      <Container fluid className="p-2">
        <table class="table ms-3">
          <thead>
            <tr>
              <th scope="col">Roll&nbsp;No</th>
              <th scope="col">Email</th>
              <th scope="col">Ideation</th>
              <th scope="col">Execution</th>
              <th scope="col">Viva</th>
              <th scope="col">Pitch</th>
              <th scope="col">Total</th>
              <th scope="col">Assigned</th>
            </tr>
          </thead>
          <tbody>
            {data.map((tt) => (
              <tr key={tt._id}>
                <td>{tt.rollNo}</td>
                <td>{tt.email}</td>
                <td>{tt.ideation}</td>
                <td>{tt.execution}</td>
                <td>{tt.viva}</td>
                <td>{tt.pitch}</td>
                <td>{tt.total}</td>
                <td>{tt.isAssigned ? 'Assigned' : 'Unassigned'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
      </div>
    </div>
  );
};

export default Search;
