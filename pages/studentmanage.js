import React from "react";
// import { ThemeProvider } from 'next-themes';
import { Table } from "flowbite-react";

import MyTable from "../components/Table";


import Topbar from "../components/Topbar";

const StudentManagement = () => {
    return(
        <div>
            <Topbar NamePage='Student Management'/>
            <div>
            <p className=" p-5 text-3xl font-poppins font-bold">Danh sách học sinh</p>
            {/* <MyTable */}
            <Table>
                {/* nametable="Danh sách học sinh" 
                header={ */}
                    <Table.Head>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            STT 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                           Họ Tên
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Lớp 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            TB Học Kỳ I 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            TB Học Kỳ II 
                        </Table.HeadCell>
                    </Table.Head>
                {/* } */}

                {/* body={ */}
                    <Table.Body className=" divide-y">    
                    <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                            1 
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                            Nguyễn Minh Quân
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                             10A4
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                              9
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                             7
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                            2 
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                            
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                             
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                              
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                             
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                            3 
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                            
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                             
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                              
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                             
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                            4 
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                            
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                             
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                              
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                             
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row className="bg-white">
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                            5 
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                            
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                             
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                              
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                             
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
                {/* } */}
            {/* /> */}
            </Table>
            </div>
        </div>
    )
}

export default StudentManagement;