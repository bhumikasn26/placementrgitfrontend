import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InstructorDepartment({ department }) {
  return (
    <div className="container">
      <h2>Instructor's Department</h2>
      <br />
      <table>
        <tr>
          <th>Department Name</th>
          <th>Building</th>
          <th>Budget</th>
        </tr>
        <tr>
          <td>{department.deptName}</td>
          <td>{department.building}</td>
          <td>₹ {department.budget}</td>
        </tr>
      </table>
    </div>
  );
}

export default InstructorDepartment;
