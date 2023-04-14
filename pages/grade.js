import React from "react";
// import { ThemeProvider } from 'next-themes';
import { Table } from "flowbite-react";


import Topbar from "../components/Topbar";

const Grade = () => {
    return(
        <div>
            <Topbar NamePage='Grade'/>
            <div>
            <p className=" p-5 text-3xl font-poppins font-bold">Bảng điểm môn học</p>
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
                           Môn:..........
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Học kỳ:.......
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
                            Điểm 15' 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Điểm 1 tiết 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            Điểm TB 
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
                             Cook
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                              Đi
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y text-gray-900">
                             Suy
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

export default Grade;