import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SectionList({ sections }) {
  return (
    <div className="container">
      <h1>List of Sections</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Semester</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {sections.map((section) => (
            <tr key={section.id}>
              <td><a href={`/sections/${section.id}`}>{section.id}</a></td>
              <td>{section.semester}</td>
              <td>{section.year}</td>
              <td>
                <form action={`/sections/${section.id}/delete`} method="POST">
                  <button className="btn btn-danger"> <i className="fas fa-trash-alt" style={{ paddingRight: '5px' }}></i> Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a href="/sections/create">Add New Section</a>
    </div>
  );
}

export default SectionList;
