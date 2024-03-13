import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function DepartmentList({ departments }) {
  return (
    <div className="container">
      <h1>List of Departments</h1>
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
          {departments.map((department) => (
            <tr key={department.deptName}>
              <td><a href={`/departments/${department.deptName}`}>{department.deptName}</a></td>
              <td>{department.building}</td>
              <td>₹ {department.budget}</td>
              <td>
                <form action={`/departments/${department.deptName}/delete`} method="POST">
                  <button className="btn btn-danger"> <FontAwesomeIcon icon={faTrashAlt} style={{ paddingRight: '5px' }} /> Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/departments/create"><u>Add New Department</u></a>
    </div>
  );
}

export default DepartmentList;
