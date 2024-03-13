import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentDetails({ student }) {
  return (
    <div className="container">
      <h2>Student Details</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Total Credits</th>
            <th>Instructor ID</th>
            <th>Department Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href={`/students/${student.id}`}>{student.id}</a></td>
            <td>{student.name}</td>
            <td>{student.total_credits}</td>
            <td>{student.instructor_id}</td>
            <td>{student.department_name}</td>
            <td>
              <form action={`/students/${student.id}/delete`} method="POST">
                <button className="btn btn-danger"> <i className="fas fa-trash-alt" style={{paddingRight: '5px'}}></i>  Delete</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;
