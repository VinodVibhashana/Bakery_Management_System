import React from "react";
import "./Navbar.css"; // Adjust the path as necessary

function Navbar() {
  return (
    <div className="navbar-container container-fluid p-0">
      <div className="container-3">
        <nav className="navigation-bar navbar navbar-expand-lg">
          <div className="container-4 d-flex justify-content-between align-items-center">
            <div className="container-10 d-flex align-items-center">
              <span className="bake">Bake</span>
              <span className="more">More</span>
            </div>
            <div className="container-2 d-flex align-items-center">
              <div className="user-account-1"></div>
              <div className="three-line-1"></div>
            </div>
          </div>
          <div className="pngwing-1"></div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
