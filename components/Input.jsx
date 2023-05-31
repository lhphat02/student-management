import React from 'react';

const Input = ({ inputType, title, placeholder, handleClick, nftPrice }) => (
  <div className="w-full">
    {inputType === 'number' ? (
      <div
        className={`flex flex-row w-full px-5 py-5 mt-4 bg-white border rounded-lg outline-nonefont-poppins ${
          nftPrice > 3 ? 'outline-red-600' : null
        }`}
      >
        <input
          className="flex w-full text-base bg-white border-none rounded-sm"
          type="number"
          placeholder={placeholder}
          onChange={handleClick}
          required
        />
        <p className="ml-4 text-xl font-semibold font-poppins">ETH</p>
      </div>
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
        className="w-full px-4 py-3 mt-4 text-base bg-white border rounded-lg resize-none outline-0 ring-0 font-poppins "
        type="email"
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    ) : inputType === 'date' ? (
      <input
        className="w-full px-4 py-3 mt-4 text-base bg-white border rounded-lg resize-none outline-0 ring-0 font-poppins "
        type="date"
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    ) : inputType === 'select' ? (
      <select
        className="w-full px-4 py-3 mt-4 text-base bg-white border rounded-lg resize-none outline-0 ring-0 font-poppins "
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
        className="w-full px-4 py-3 mt-4 text-base bg-white border rounded-lg focus:outline-blue-600 font-poppins"
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    )}
  </div>
);

export default Input;
