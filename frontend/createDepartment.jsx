import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateDepartment() {
  return (
    <div className="container">
      <form method="post" action="/departments">
        <h2>Add New Department</h2>
        <div className="form-group">
          <label htmlFor="e1">Department Name</label>
          <input name="deptName" type="text" className="form-control" id="e1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="e2">Building</label>
          <input name="building" type="text" className="form-control" id="e2" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="e3">Budget</label>
          <input name="budget" type="text" className="form-control" id="e3" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreateDepartment;
