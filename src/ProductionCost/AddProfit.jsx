import React from "react";
import "./AddProfit.css"; // Ensure the file name matches

function AddProfit() {
  return (
    <div>
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Item name -:</th>
          <th>Quantity -:</th>
          <th>Cost -:</th>
          <th>Sales price -:</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Bread</td>
          <td>50</td>
          <td>150.00</td>

          <td> <input type="number" class="form-control" id="usr" min="1" max="1000"/>
</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Fish Bun</td>
          <td>120</td>
          <td>180.00</td>
          <td> <input type="number" class="form-control" id="usr" min="1" max="1000"/></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>cuff cake</td>
          <td>70</td>
          <td>120.00</td>
          <td> <input type="number" class="form-control" id="usr" min="1" max="1000"/>
</td>
        </tr>
      </tbody>
    </table>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      <button class="btn btn-primary me-md-2" type="button">SAVE</button>
      
    </div>
    
    
        </div>
  );
}

export default AddProfit;
