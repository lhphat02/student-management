import Topbar from '@/components/Topbar';
import SubjectsTable from '@/components/subjects/subjectsTable';
import React, { useEffect, useState } from 'react';

const Subjects = () => {
  const [monhoc, setMonHoc] = useState([]);

  useEffect(() => {
    fetch('api/dbmonhoc').then(async (res) => {
      let data = await res.json();

      console.log(data);
      setMonHoc(data);
    });
    console.log(monhoc);
  }, []);

    return(
        <div>
            <Topbar NamePage='Subjects'/>
            <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Danh sách môn học </p>
      <div className="flex justify-center items-center mt-10 px-20">
        <SubjectsTable />
      </div>
 </div>
          
    );
}

export default Subjects;