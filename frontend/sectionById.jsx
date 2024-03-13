import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function SectionDetails({ section }) {
  return (
    <div className="container">
      <h2>Section Details</h2>
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
          <tr>
            <td>{section.id}</td>
            <td>{section.semester}</td>
            <td>{section.year}</td>
            <td>
              <form action={`/sections/${section.id}/delete`} method="POST">
                <button className="btn btn-danger"> <FontAwesomeIcon icon={faTrashAlt} style={{ paddingRight: '5px' }} /> Delete</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SectionDetails;
