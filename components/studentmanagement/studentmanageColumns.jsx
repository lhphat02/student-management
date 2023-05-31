import Popup from 'reactjs-popup';
import Edit from '../../assets/edit.png';
import { TextSearchFilter } from '../../components/TextSearchFilter';
import Image from 'next/image';
import assets from '../../assets';

export const studentmanageColumns = [
  { Header: 'ID', accessor: 'index' },
  { Header: 'Họ và Tên', accessor: 'HoTen' },
  { Header: 'Giới Tính', accessor: 'GioiTinh' },
  { Header: 'Ngày Sinh', accessor: 'NgaySinh' },
  { Header: 'Địa Chỉ', accessor: 'DiaChi' },
  { Header: 'Email', accessor: 'Email' },
  {
    Header: 'Update',
    Cell: ({ row }) => (
      <div className="flex justify-center">
        <Image src={assets.edit} width={20} height={20} />
      </div>
    ),
  },
];
