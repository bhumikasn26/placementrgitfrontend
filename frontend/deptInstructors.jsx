import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InstructorList({ instructors }) {
  return (
    <div className="container">
      <h1>Instructors in the Department</h1>
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
          {instructors.map((instructor) => (
            <tr key={instructor.id}>
              <td><a href={`/instructors/${instructor.id}`}>{instructor.name}</a></td>
              <td>{instructor.department_name}</td>
              <td>₹ {instructor.salary}</td>
              <td>{instructor.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href={`/departments/${instructors[0].department_name}/instructors/create`}>Add New Instructor</a>
    </div>
  );
}

export default InstructorList;
