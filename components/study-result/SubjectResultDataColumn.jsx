import Popup from 'reactjs-popup';

export const SubjectResultDataColumn = [
  { Header: 'ID', accessor: 'index' },
  { Header: 'Ho Ten', accessor: 'HoTen' },
  { Header: 'Diem 15p', accessor: 'coefficientScore1' },
  { Header: 'Diem 1 Tiet', accessor: 'coefficientScore2' },
  { Header: 'DTB', accessor: 'DiemTBMon' },
  // {
  //   Header: 'Update',
  //   //   Cell: ({ row }) => <Popup modal trigger={<button><img className="translate-x-4 w-7 h-7" src={Edit} alt="" /></button>}>
  //   //   {
  //   //   close => <ActionRoomModal close={close} ID={row.original.ID} roomno={row.original.ROOM_NO} type={row.original.TYPE} inroom={row.original.IN_ROOM} price={row.original.PRICE}
  //   //   status={row.original.STATUS} desc={row.original.DESCRIPTION}/>}
  //   // </Popup>
  // },
];
