import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SectionList({ sections }) {
  return (
    <div className="container">
      <h2>Sections taught by the Instructor</h2>
      <br />
      <table>
        <thead>
          <tr>
            <th>Section ID</th>
            <th>Semester</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((sec) => (
            <tr key={sec.id}>
              <td>{sec.id}</td>
              <td>{sec.semester}</td>
              <td>{sec.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SectionList;
