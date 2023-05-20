import Popup from 'reactjs-popup';

export const teachermanageColumns = [
  { Header: 'ID', accessor: 'index' },
  { Header: 'Họ và Tên', accessor: 'HoTen' },
  { Header: 'Giới Tính', accessor: 'GioiTinh' },
  { Header: 'Ngày Sinh', accessor: 'NgaySinh' },
  { Header: 'Địa Chỉ', accessor: 'DiaChi' },
  { Header: 'Email', accessor: 'Email' },
  {
    Header: 'Update',
    //   Cell: ({ row }) => <Popup modal trigger={<button><img className="w-7 h-7 translate-x-4" src={Edit} alt="" /></button>}>
    //   {
    //   close => <ActionRoomModal close={close} ID={row.original.ID} roomno={row.original.ROOM_NO} type={row.original.TYPE} inroom={row.original.IN_ROOM} price={row.original.PRICE}
    //   status={row.original.STATUS} desc={row.original.DESCRIPTION}/>}
    // </Popup>
  },
];
