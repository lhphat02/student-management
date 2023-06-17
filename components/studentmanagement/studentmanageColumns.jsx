import Popup from 'reactjs-popup';

import assets from '../../assets';
import Image from 'next/image';
import Input from '../Input';
import StudentControllerModal from './Modals/StudentControllerModal';

export const studentmanageColumns = [
  { Header: 'MSHS', accessor: 'index' },
  { Header: 'Lớp', accessor: 'TenLop' },
  { Header: 'Họ và Tên', accessor: 'HoTen' },
  { Header: 'Giới Tính', accessor: 'GioiTinh' },
  { Header: 'Ngày Sinh', accessor: 'NgaySinh' },
  { Header: 'Địa Chỉ', accessor: 'DiaChi' },
  { Header: 'Email', accessor: 'Email' },
  // {
  //   Header: 'Update',
  //   Cell: ({ row }) => (
  //     <div className="flex justify-center">
  //       <Image src={assets.edit} width={20} height={20} />
  //     </div>
  //   ),
  // },
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
          <StudentControllerModal
            close={close}
            idHS={row.original.idHS}
            HoTen={row.original.HoTen}
            GioiTinh={row.original.GioiTinh}
            NgaySinh={row.original.NgaySinh}
            DiaChi={row.original.DiaChi}
            Email={row.original.Email}
            idLop={row.original.idLop}
          />
        )}
      </Popup>
    ),
  },
];
