import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateDepartment() {
  return (
    <div className="container">
      <form method="post" action={`/departments/${name}/instructors`}>
        <h2>Add an Instructor to the Department</h2>
        <div className="form-group">
          <label htmlFor="e1">Instructor ID</label>
          <input name="instructor_id" type="text" className="form-control" id="e1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="e2">Section ID</label>
          <input name="section_id" type="text" className="form-control" id="e2" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreateDepartment;
