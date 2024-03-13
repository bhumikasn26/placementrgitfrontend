import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function StudentDetails({ student }) {
  return (
    <div className="container">
      <h1>Students in the Department</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Total Credits</th>
            <th>Instructor ID</th>
            <th>Department Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href={`/students/${student.id}`}>{student.id}</a></td>
            <td>{student.name}</td>
            <td>{student.total_credits}</td>
            <td>{student.instructor_id}</td>
            <td>{student.department_name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentDetails;
