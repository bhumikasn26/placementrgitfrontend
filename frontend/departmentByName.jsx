import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DepartmentDetails({ department }) {
  return (
    <div className="container">
      <h2>Department Details</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Building</th>
            <th>Budget</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{department.deptName}</td>
            <td>{department.building}</td>
            <td>₹ {department.budget}</td>
            <td>
              <form action={`/departments/${department.deptName}/delete`} method="POST">
                <button className="btn btn-danger"> <FontAwesomeIcon icon={faTrashAlt} style={{ paddingRight: '5px' }} /> Delete</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DepartmentDetails;
