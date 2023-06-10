import Popup from 'reactjs-popup';

export const yearColumn = [
  { Header: 'ID', accessor: 'index' },
  { Header: 'Start Year', accessor: 'NamBD' },
  { Header: 'End Year', accessor: 'NamKT' },
  {
    Header: 'Update',
    //   Cell: ({ row }) => <Popup modal trigger={<button><img className="translate-x-4 w-7 h-7" src={Edit} alt="" /></button>}>
    //   {
    //   close => <ActionRoomModal close={close} ID={row.original.ID} roomno={row.original.ROOM_NO} type={row.original.TYPE} inroom={row.original.IN_ROOM} price={row.original.PRICE}
    //   status={row.original.STATUS} desc={row.original.DESCRIPTION}/>}
    // </Popup>
  },
];
