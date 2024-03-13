import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function InstructorList({ instructors }) {
  return (
    <div className="container">
      <h1>List of Instructors</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department Name</th>
            <th>Salary</th>
            <th>ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((ins) => (
            <tr key={ins.id}>
              <td><a href={`/instructors/${ins.id}`}>{ins.name}</a></td>
              <td>{ins.department_name}</td>
              <td>₹ {ins.salary}</td>
              <td>{ins.id}</td>
              <td>
                <form action={`/instructors/${ins.id}/delete`} method="POST">
                  <button className="btn btn-danger"> <FontAwesomeIcon icon={faTrashAlt} style={{ paddingRight: '5px' }} />  Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/instructors/create"><u>Add New Instructor</u></a>
    </div>
  );
}

export default InstructorList;
