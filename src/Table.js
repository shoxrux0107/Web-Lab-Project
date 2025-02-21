import React from "react";

const Table = () => (
  <div className="container mt-4">
    <h2>User List</h2>
    <table className="table table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>John Doe</td>
          <td>john.doe@example.com</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jane Doe</td>
          <td>jane.doe@example.com</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark Smith</td>
          <td>mark.smith@example.com</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Emily Johnson</td>
          <td>emily.johnson@example.com</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Table;
