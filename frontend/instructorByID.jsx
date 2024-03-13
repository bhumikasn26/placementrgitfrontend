import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function InstructorDetails({ instructor }) {
  return (
    <div className="container">
      <h2>Instructor Details</h2>
      <br />
      <table>
        <tr>
          <th>Name</th>
          <th>Department Name</th>
          <th>Salary</th>
          <th>ID</th>
          <th></th>
        </tr>
        <tr>
          <td>{instructor.name}</td>
          <td>{instructor.department_name}</td>
          <td>₹ {instructor.salary}</td>
          <td>{instructor.id}</td>
          <td>
            <form action={`/instructors/${instructor.id}/delete`} method="POST">
              <button className="btn btn-danger"> <FontAwesomeIcon icon={faTrashAlt} style={{ paddingRight: '5px' }} />  Delete</button>
            </form>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default InstructorDetails;
