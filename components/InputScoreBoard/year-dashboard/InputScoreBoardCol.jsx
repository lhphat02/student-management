import Popup from 'reactjs-popup';
import Image from 'next/image';

import SubjectResultControllerModal from '../Modals/SubjectResultControllerModal';
import assets from '@/assets';

export const InputScoreBoardCol = [
  { Header: 'ID', accessor: 'index' },
  { Header: 'LỚP', accessor: 'TenLop' },
  { Header: 'HỌC SINH', accessor: 'HoTen' },
  { Header: 'ĐIỂM HỆ SỐ 1', accessor: 'DiemHS1' },
  { Header: 'ĐIỂM HỆ SỐ 2', accessor: 'DiemHS2' },
  { Header: 'ĐIỂM TRUNG BÌNH', accessor: 'DiemTBMon' },
  {
    Header: 'NHẬP ĐIỂM',
    Cell: ({ row }) => (
      <Popup
        modal
        trigger={
          <div className="flex justify-center w-full">
            <Image src={assets.edit} width={20} height={20} alt="" />
          </div>
        }
      >
        {(close) => (
          <SubjectResultControllerModal
            close={close}
            idHS={row.original.idHS}
            idMon={row.original.idMon}
            idLop={row.original.idLop}
            DiemHS1={row.original.DiemHS1}
            DiemHS2={row.original.DiemHS2}
            DiemTBMon={row.original.DiemTBMon}
          />
        )}
      </Popup>
    ),
  },
];
