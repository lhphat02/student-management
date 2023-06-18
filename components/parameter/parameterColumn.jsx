import Popup from "reactjs-popup";
import ParameterControllerModal from "./Modals/ParameterControllerModal";

import assets from "../../assets";
import Image from "next/image";

export const parameterColumn = [
  { Header: "Parameter Name", accessor: "TenThamSo" },
  { Header: "Value", accessor: "GiaTri" },
  {
    Header: "Update",
    Cell: ({ row }) => (
      <Popup
        modal
        trigger={
          <div className="flex justify-center w-full">
            <Image src={assets.edit} width={20} height={20} />
          </div>
        }
      >
        {(close) => (
          <ParameterControllerModal
            close={close}
            TenThamSo={row.original.TenThamSo}
            GiaTri={row.original.GiaTri}
          />
        )}
      </Popup>
    ),
  },
];
