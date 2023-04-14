import React from "react";
// import { ThemeProvider } from 'next-themes';
import { Table } from "flowbite-react";


import Topbar from "../components/Topbar";

const Report = () => {
    return(
        <div>
            <Topbar NamePage='Report'/>
            <div>
            <p className=" p-5 text-3xl font-poppins font-bold">Báo cáo tổng kết môn</p>
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
                           Học kỳ:..........
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
                           Lớp
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Sĩ số 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Số lượng đạt 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            Tỉ lệ 
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
                            Báo đời báo đốm
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                             150
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

            <div>
            <p className=" p-5 text-3xl font-poppins font-bold">Báo cáo tổng kết học kỳ</p>
            {/* <MyTable */}
            <Table>
                {/* nametable="Danh sách học sinh" 
                header={ */}
                    <Table.Head>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            Học kỳ:.............
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                             
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                           
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
                           Lớp
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Sĩ số 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium  text-gray-900">
                            Số lượng đạt 
                        </Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium text-gray-900">
                            Tỉ lệ 
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
                            Báo đời báo đốm
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium  border-y  text-gray-900">
                             150
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

export default Report;