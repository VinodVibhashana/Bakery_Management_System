// AddShop.jsx

import React from "react";


function AddShop() {
  return (
    <div>
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>Item name -:</th>
      <th>Quantity -:</th>
      <th>Sales price -:</th>
      <th>Check -:</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Bread</td>
      <td>500</td>
      <td>150.00</td>
      <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Fish Bun</td>
      <td>300</td>
      <td>180.00</td>
      <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>cuff cake</td>
      <td>450</td>
      <td>120.00</td>
      <td> <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/></td>
    </tr>
  </tbody>
</table>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-primary me-md-2" type="button">OK</button>
  
</div>


    </div>
  );
}

export default AddShop;
