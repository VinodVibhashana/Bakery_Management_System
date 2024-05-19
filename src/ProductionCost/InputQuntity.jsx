import React from "react";

function InputQuantity() {
  return (
    <div>
      <input type="date" id="birthday" name="birthday" className="form-control mb-3" />
      
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item name</th>
            <th>Enter Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bread</td>
            <td>
              <input type="number" className="form-control" id="usr1" min="1" max="1000" />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Fish Bun</td>
            <td>
              <input type="number" className="form-control" id="usr2" min="1" max="1000" />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Cuff Cake</td>
            <td>
              <input type="number" className="form-control" id="usr3" min="1" max="1000" />
            </td>
          </tr>
        </tbody>
      </table>
      
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-primary me-md-2" type="button">SEND</button>
      </div>
    </div>
  );
}

export default InputQuantity;
