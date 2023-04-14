import React from 'react';
import { useState, useEffect } from 'react';
import StudentmanageTable from '../components/studentmanagement/studentmanageTable';
import Popup from 'reactjs-popup';
// import { ThemeProvider } from 'next-themes';

import Topbar from '../components/Topbar';
import { Button, Label, Modal, Table, TextInput } from 'flowbite-react';

const StudentManagement = () => {
  const [hocsinh, setHocSinh] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [formInput, setFormInput] = useState({
    id: '',
    name: '',
    class: '',
    GPA1: '',
    GPA2: '',
  });

  // useEffect(()=>{
  //   fetch('api/hello')
  //   .then( async (res)=>{
  //     let data = await res.json();
  //     console.log(data)
  //     setHocSinh(data)
  //   })
  //   console.log(hocsinh)
  // }, [])

  //   return (
  //     <div>
  //       <Topbar NamePage="Student Management" />
  //       <div className="relative">
  //         <div className="relative top-[150px] ml-[10px] font-neon">
  //           <StudentmanageTable />
  //         </div>
  //       </div>
  //     </div>
  //   );
  // };

  const hs1 = {
    id: 1,
    name: 'Quan',
    class: '10A4',
    GPA1: 9,
    GPA2: 7,
  };
  const hs2 = {
    id: 2,
    name: 'Phat',
    class: '10A4',
    GPA1: 5,
    GPA2: 8,
  };
  const hs3 = {
    id: 3,
    name: 'Huy',
    class: '10A4',
    GPA1: 2,
    GPA2: 4,
  };

  let students = [hs1, hs2, hs3];

  console.log(formInput);

  return (
    <div>
      <Topbar NamePage="Student Management" />

      <Modal
        show={toggleModal}
        size="md"
        popup={true}
        onClose={() => {
          setToggleModal(false);
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Add new student
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Student name" />
              </div>
              <TextInput
                id="text"
                required={true}
                onChange={(e) =>
                  setFormInput({ ...formInput, name: e.target.value })
                }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="text" value="Class" />
              </div>
              <TextInput
                id="text"
                type="text"
                required={true}
                onChange={(e) =>
                  setFormInput({ ...formInput, class: e.target.value })
                }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="number" value="GPA Sem 1" />
              </div>
              <TextInput
                id="number"
                type="number"
                onChange={(e) =>
                  setFormInput({ ...formInput, GPA1: e.target.value })
                }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="number" value="GPA Sem 2" />
              </div>
              <TextInput
                id="number"
                type="number"
                onChange={(e) =>
                  setFormInput({ ...formInput, GPA2: e.target.value })
                }
              />
            </div>
            <div className="w-full justify-center flex">
              <Button onClick={() => {}}>Submit</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div>
        <div className="flex flex-row justify-between items-center px-5">
          <p className=" p-5 text-3xl font-poppins font-bold">
            Danh sách học sinh
          </p>
          <Button
            onClick={() => {
              setToggleModal(true);
            }}
          >
            Add student
          </Button>
        </div>
        {/* <MyTable */}
        <div className="w-full flex items-center justify-center">
          <div className="w-4/5">
            <Table>
              <Table.Head>
                <Table.HeadCell className="table-style">STT</Table.HeadCell>
                <Table.HeadCell className="table-style">Họ Tên</Table.HeadCell>
                <Table.HeadCell className="table-style">Lớp</Table.HeadCell>
                <Table.HeadCell className="table-style">
                  TB Học Kỳ I
                </Table.HeadCell>
                <Table.HeadCell className="table-style">
                  TB Học Kỳ II
                </Table.HeadCell>
              </Table.Head>

              <Table.Body className=" divide-y">
                {students.map((student) => (
                  <Table.Row key={student.id} className="bg-white">
                    <Table.Cell className="table-style">
                      {student.id}
                    </Table.Cell>
                    <Table.Cell className="table-style">
                      {student.name}
                    </Table.Cell>
                    <Table.Cell className="table-style">
                      {student.class}
                    </Table.Cell>
                    <Table.Cell className="table-style">
                      {student.GPA1}
                    </Table.Cell>
                    <Table.Cell className="table-style">
                      {student.GPA2}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
