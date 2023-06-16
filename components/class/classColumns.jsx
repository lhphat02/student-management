import Popup from 'reactjs-popup';
import assets from '@/assets';
import Image from 'next/image';
import ClassControllerModal from './Modals/ClassControllerModal';

export const classColumns = [
  { Header: 'ID', accessor: 'idLop' },
  { Header: 'Tên Lớp', accessor: 'TenLop' },
  { Header: 'Sĩ Số', accessor: 'SiSo' },
  {
    Header: 'Update',
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
          <ClassControllerModal
            close={close}
            idLop={row.original.idLop}
            TenLop={row.original.TenLop}
            idKhoiLop={row.original.idKhoiLop}
            idHocKy={row.original.idHocKy}
          />
        )}
      </Popup>
    ),
  },
];
