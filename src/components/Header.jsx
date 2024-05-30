import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center flex-row">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src="src\assets\logo.svg" alt="Logo" className="h-10 w-10 ml-5" />
          {/* Contact Us Button */}
          <div className="bg-white rounded-full 	">
  Contact Us
</div>
         
        </div>
        
        
      </div>
    </header>
  );
};

export default Header;
