import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdvisorDetails({ instructor }) {
  return (
    <div className="container">
      <h2>Advisor Details</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department Name</th>
            <th>Salary</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{instructor.name}</td>
            <td>{instructor.department_name}</td>
            <td>₹ {instructor.salary}</td>
            <td>{instructor.id}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdvisorDetails;
