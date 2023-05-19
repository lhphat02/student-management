import Topbar from '@/components/Topbar';
import TeachermanageTable from '@/components/teachermanagement/teachermanageTable';
import React, { useEffect, useState } from 'react';

const TeacherManager = () => {
  const [giaovien, setGiaoVien] = useState([]);

  useEffect(() => {
    fetch('api/dbgiaovien').then(async (res) => {
      let data = await res.json();

      console.log(data);
      setGiaoVien(data);
    });
    console.log(giaovien);
  }, []);
    return (
      <div>
        <Topbar NamePage='Teacher Management'/>
        <div className="flex justify-center items-center mt-20 px-20">
        <TeachermanageTable />
      </div>
        {/* <div className="flex justify-center item-center">
          <Button 
            btnName="Sign in"
            classStyles={`mx-2 rounded-xl active:scale-110 duration-100`}
            handleClick={() => {
              router.push('/signin')
            }}
          />
        </div> */}
        <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Làm bảng cho cái trang này</p>
      </div>
    )
}

export default TeacherManager;