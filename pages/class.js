import Topbar from '@/components/Topbar';
import ClassTable from '@/components/class/classTable';
import React, { useEffect, useState } from 'react';
import Popup from "reactjs-popup";


const Class = () => {
    const [lop, setlop] = useState([]);
  
    useEffect(() => {
      fetch('api/dblop').then(async (res) => {
        let data = await res.json();
  
        console.log(data);
        setlop(data);
      });
      console.log(lop);
    }, []);
  
    return (
      <div>
        <Topbar NamePage="Class" />
        <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Danh sách lớp</p>
        <div className="flex justify-center items-center mt-20 px-20">
          <ClassTable />
        </div>
      </div>
    );
  };
  
  export default Class;
  