import React from "react";
// import { ThemeProvider } from 'next-themes';


import Topbar from "../components/Topbar";

const Subject = () => {
    return(
        <div>
            <Topbar NamePage='Subjects'/>
            <p className=" p-5 mt-5 text-3xl font-poppins font-bold">Làm bảng cho cái trang này</p>
        </div>
    )
}

export default Subject;