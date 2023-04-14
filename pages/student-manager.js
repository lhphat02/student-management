import Topbar from '@/components/Topbar';
import StudentmanageTable from '@/components/studentmanagement/studentmanageTable';
import React, { useEffect, useState } from 'react';

const StudentManager = () => {
  const [hocsinh, setHocSinh] = useState([]);

  useEffect(() => {
    fetch('api/db').then(async (res) => {
      let data = await res.json();

      console.log(data);
      setHocSinh(data);
    });
    console.log(hocsinh);
  }, []);

  return (
    <div>
      <Topbar NamePage="Student Management" />
      <div className="flex justify-center items-center mt-20 px-20">
        <StudentmanageTable />
      </div>
    </div>
  );
};

export default StudentManager;
