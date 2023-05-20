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
<<<<<<< HEAD
            <div className="flex justify-center items-center mt-20 px-20">
        <SubjectsTable />
      </div>
=======
            <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Làm bảng cho cái trang này</p>
>>>>>>> 73249078cb52adb54968f9d986e3e61a19270e44
        </div>
    )
}

export default Subjects;