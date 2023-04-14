import { React, useRef } from "react";
import Image from "next/image";
import { useTheme } from "flowbite-react";
import { useState } from "react";

import { Modal, Label, TextInput, Checkbox, Button } from "flowbite-react";

const MyModal = ({ header, body, footer, handleClose, closeBtn }) => {
  const [toggleModal, setToggleModal] = useState(false)
  // const modalRef = useRef(null);
  // const { theme } = useTheme();

  // const handleClickOutside = (event) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target)) {
  //     handleClose();
  //   }
  // };

  return (
    // <div onClick={handleClickOutside}>
    //   <div ref={modalRef}>
    //     {closeBtn && (
    //       <div className="flex justify-end mt-4 mr-4">
    //         <div
    //           className="relative w-3 h-3 cursor-pointer"
    //           onClick={handleClose}
    //         >
    //           <Image
    //           // src={images.cross}
    //           // className={theme === 'light' ? 'filter invert' : undefined}
    //           />
    //         </div>
    //       </div>
    //     )}

    //     <div className="w-full p-4 text-center">
    //       <h2 className="text-2xl font-normal font-poppins dark:text-white text-prim-black-1">
    //         {header}
    //       </h2>
    //     </div>
    //     <div className="p-10 border-t border-b sm:p-7 dark:border-prim-gray-3 border-prim-gray-1 ">
    //       {body}
    //     </div>
    //     <div className="p-7">{footer}</div>
    //   </div>
    // </div>
    <div>
    <Button onClick={() => {setToggleModal(true)}}>Toggle modal</Button>
    <Modal show={toggleModal} onClose={() => {setToggleModal(false)}}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts
            new consumer privacy laws for its citizens, companies around the
            world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation
            (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
            common set of data rights in the European Union. It requires
            organizations to notify users as soon as possible of high-risk
            data breaches that could personally affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => {setToggleModal(true)}}>I accept</Button>
        <Button color="gray" onClick={() => {setToggleModal(false)}}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
};

export default MyModal;
