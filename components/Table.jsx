import { Table } from "flowbite-react";

const MyTable = ({ cloumn1, column2, column3, column4, data }) => {

  
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-4/5">
        <Table>

          <Table.Head>
            <Table.HeadCell className="table-style">STT</Table.HeadCell>
            <Table.HeadCell className="table-style">{cloumn1}</Table.HeadCell>
            <Table.HeadCell className="table-style">{column2}</Table.HeadCell>
            <Table.HeadCell className="table-style">{column3}</Table.HeadCell>
            <Table.HeadCell className="table-style">{column4}</Table.HeadCell>
          </Table.Head>
          
          <Table.Body className=" divide-y">
            {students.map((data) => (
              <Table.Row key={data.id} className="bg-white">
                <Table.Cell className="table-style">{data.col1}</Table.Cell>
                <Table.Cell className="table-style">{data.col2}</Table.Cell>
                <Table.Cell className="table-style">{data.col3}</Table.Cell>
                <Table.Cell className="table-style">{data.col4}</Table.Cell>
                <Table.Cell className="table-style">{data.col5}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MyTable;
