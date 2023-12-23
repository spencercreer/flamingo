import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="text-xl font-bold">Intention</div>
          <div className="flex space-x-4">
            {/* Add your navbar links here */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
