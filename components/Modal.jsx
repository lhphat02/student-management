import { React, useRef } from 'react';
import { HiX } from 'react-icons/hi';

const MyModal = ({ header, body, footer, handleClose, closeBtn, height }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 "
    >
      <div ref={modalRef} className={`w-2/4 bg-white ${height} rounded-xl`}>
        {closeBtn && (
          <div className="flex justify-end mt-2 mr-4">
            <div
              className="relative w-3 h-3 cursor-pointer"
              onClick={handleClose}
            >
              <HiX />
            </div>
          </div>
        )}

        <div className="w-full p-2 text-center">
          <h2 className="py-2 text-xl font-normal font-poppin">{header}</h2>
        </div>
        <div className="px-5 py-5 border-t border-b">{body}</div>
        <div className="p-5">{footer}</div>
      </div>
    </div>
  );
};

export default MyModal;
