import Popup from 'reactjs-popup';
import Edit from '../../assets/edit.png'
import {TextSearchFilter} from '../../components/TextSearchFilter'
export const subjectsreportColumns = [
  { Header: 'ID', accessor: 'index' },
  { Header: 'Học Kỳ', accessor: 'idHocKy' },
  { Header: 'Số Lượng Đạt', accessor: 'Pass' },
  { Header: 'Tỉ Lệ', accessor: 'Rate' },
  { Header: 'Lớp', accessor: 'idLop' },

  {
    Header: 'Update',
    //   Cell: ({ row }) => <Popup modal trigger={<button><img className="w-7 h-7 translate-x-4" src={Edit} alt="" /></button>}>
    //   {
    //   close => <ActionStudentModal close={close} ID={row.original.ID} roomno={row.original.ROOM_NO} type={row.original.TYPE} inroom={row.original.IN_ROOM} price={row.original.PRICE}
    //   status={row.original.STATUS} desc={row.original.DESCRIPTION}/>}
    // </Popup>
  },
];
