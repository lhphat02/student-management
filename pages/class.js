import React from "react";
// import { ThemeProvider } from 'next-themes';
import { Table } from "flowbite-react";


import Topbar from "../components/Topbar";

const Class = () => {
    return(
        <div>
            <Topbar NamePage='Class'/>
            <div>
            <p className=" p-5 text-3xl font-poppins font-bold">Danh sách lớp</p>
            {/* <MyTable */}
            <Table>
                {/* nametable="Danh sách học sinh" 
                header={ */}
                    <Table.Head>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            Lớp:........... 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                             
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                           Sĩ số:..........
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Head>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            STT 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                           Họ Tên
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Giới tính 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Năm sinh 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            Địa chỉ 
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
                             Nam
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                              2002
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                             UIT
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

export default Class;