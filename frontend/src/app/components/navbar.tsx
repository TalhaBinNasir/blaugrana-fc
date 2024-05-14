import React from "react";

function Navbar() {
  return (
    <div className="flex bg-gradient-to-r from-barca-yellow via-barca-red to-barca-blue justify-between">
      <div>
        <button>Home</button>
      </div>
      <div>
        <img src="./favicon.ico" height={60} width={60} alt="logo" />
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navbar;
