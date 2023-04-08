import React from 'react';

const Button = ({ classStyles, btnName, handleClick }) => (
  <button
    type="button"
    className={`text-sm minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-cyan-500 border-2 bg-white hover:bg-gray-50  border-black-600 shadow-md ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;