import React from "react";
import { useState, useEffect } from "react";
import StudentmanageTable from "./studentmanagement/studentmanageTable";
import Popup from "reactjs-popup";
// import { ThemeProvider } from 'next-themes';


import Topbar from "../components/Topbar";

const StudentManagement = () => {

    const [hocsinh, setHocSinh] = useState([]);

    // useEffect(()=>{
    //   fetch('api/hello')
    //   .then( async (res)=>{
    //     let data = await res.json();
    //     console.log(data)
    //     setHocSinh(data)
    //   })
    //   console.log(hocsinh)
    // }, [])
    
    return(
        <div>
            <Topbar NamePage='Student Management'/>
             <div className="relative">
                <div className="relative top-[150px] ml-[10px] font-neon">
                  <StudentmanageTable/>
                </div>

            </div>
            
         
        </div>
    )
}

export default StudentManagement;