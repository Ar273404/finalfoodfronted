import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

 // You can remove this import if not needed
import './Header.css'
const Header = () => {
  return (
    <div className="header h-[32vw] mt-2 mb-5 ml-7 bg-cover bg-no-repeat bg-center relative border-2 border-gray-500 rounded-3xl">
      <div className="header-contents absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
      </div>
    </div>
  );
};

export default Header;
