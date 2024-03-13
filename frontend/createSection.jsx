import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreateSection() {
  return (
    <div className="container">
      <form method="post" action="/sections">
        <h2>Add New Section</h2>
        <div className="form-group">
          <label htmlFor="e1">ID</label>
          <input name="id" type="text" className="form-control" id="e1" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="e2">Semester</label>
          <input name="semester" type="text" className="form-control" id="e2" aria-describedby="emailHelp" />
        </div>
        <div className="form-group">
          <label htmlFor="e3">Year</label>
          <input name="year" type="text" className="form-control" id="e3" aria-describedby="emailHelp" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default CreateSection;
