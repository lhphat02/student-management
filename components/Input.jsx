import React from 'react';

const Input = ({ inputType, placeholder, handleClick }) => (
  <div className="w-full">
    {inputType === 'number' ? (
      <input
        className="w-full px-4 py-3 mt-4 text-base bg-white border-gray-200 rounded-lg font-poppins"
        type="number"
        placeholder={placeholder}
        onChange={handleClick}
        required
        max={10}
      />
    ) : inputType === 'textarea' ? (
      <textarea
        className="w-full px-4 py-3 mt-4 text-base bg-white border border-black rounded-lg resize-none outline-0 ring-0 font-poppins "
        rows={10}
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    ) : inputType === 'email' ? (
      <input
        className="w-full px-4 py-3 mt-4 text-base bg-white rounded-lg resize-none outline-0 ring-0 font-poppins "
        type="email"
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    ) : inputType === 'date' ? (
      <input
        className="w-full px-4 py-3 mt-4 text-base bg-white border border-black rounded-lg resize-none outline-0 ring-0 font-poppins "
        type="date"
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    ) : inputType === 'select' ? (
      <select
        className="w-full px-4 py-3 mt-4 text-base bg-white border border-black rounded-lg resize-none outline-0 ring-0 font-poppins "
        placeholder="Gender"
        required
        onChange={handleClick}
      >
        <option value="">- Select Gender -</option>
        <option value="Nam">Male</option>
        <option value="Nữ">Female</option>
      </select>
    ) : (
      //   className="w-full px-4 py-3 mt-4 text-base bg-white border rounded-lg resize-none outline-0 ring-0 font-poppins "
      //   type="date"
      //   placeholder={placeholder}
      //   onChange={handleClick}
      //   required
      // />
      <input
        className="w-full px-4 py-3 mt-4 text-base bg-white border border-black rounded-lg focus:outline-blue-600 font-poppins"
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    )}
  </div>
);

export default Input;
