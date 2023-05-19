import "../../../css/localpopupbasic.css"
import "../../../css/localpopup.css"
import { useState, useMemo, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import countryList from 'react-select-country-list'
import axios from 'axios'

export default function AddStudentModal({ close }) {
    const [startDate, setStartDate] = useState(new Date());
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
    const [isOpenPopup1, setIsOpenPopup1] = useState(false);

    const changeHandler = value => {
        setValue(value)
    }

    console.log(ID)

    const [nHoTen, setHoTen] = useState(hoten)
    const [nGioiTinh, setGioiTinh] = useState(gioitinh)
    const [nNgaySinh, setNgaySinh] = useState(ngaysinh)
    const [nDiaChi, setDiaChi] = useState(diachi)
    const [nEmail, setEmail] = useState(email)

    const [studentmanage, setStudent] = useState([]);

    const displayInfo = () => {
        console.log(nHoTen, nGioiTinh, nNgaySinh, nDiaChi, nEmail)
    }
    // displayInfo()

    const addStudent = () => {
        console.log(nHoTen, nGioiTinh, nNgaySinh, nDiaChi, nEmail)
        axios.put('http://localhost:3000/addstudent', {
            hoten: nHoTen,
            gioitinh: nGioiTinh,
            ngaysinh: nNgaySinh,
            diachi: nDiaChi,
            email: nEmail,
            id: ID,
        }).then((response) => {
            alert("updated")
        })
    }

    useEffect(() => {
        const getStudent = async () => {
            const response = await fetch("http://localhost:3000/student-manager");
            const jsonData = await response.json();
            console.log(jsonData);
            setRTList(jsonData);
        }
        getStudent()
    }, [])


    const RTdata = useMemo(() => studentmanage);

    return (
        <div className="h-[22rem]">
        <div className="translate-x-[600px] text-2xl">
            <a className="close cursor-pointer" onClick={close}>
                &times;
            </a>
        </div>
        <form onSubmit={handleSubmit} className="w-[40rem] grid grid-cols-2 gap-x-2 gap-y-12 items-center ml-4">
            <div className="ml-8 translate-y-[40px] text-xl font-medium -top-6 relative text-gray-900 dark:text-white"> <label htmlFor="hoten" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Ho Ten</label>
                <input className="ml-8 -mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[7rem] h-[2.6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="hoten"
                    id="hoten"
                    defaultValue={hoten}
                    onChange={(e) => {
                        setHoTen(e.target.value);
                    }}
                /></div>
            <div className="ml-8 translate-y-[10px]">
                <label htmlFor="gioitinh" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Gioi Tinh</label>
                <select className="ml-12" id="gioitinh"
                    onChange={(e) => {
                        setGioiTinh(e.target.value);
                    }}
                    defaultValue={gioitinh}
                >
                    {RTdata.map((val, key) => {
                        return (
                            <option value={val.GioiTinh}>{val.GioiTinh}</option>
                        )
                    })}
                </select>
            </div>
            <div className="ml-8 translate-y-[-5px] flex">
                <label htmlFor="ngaysinh" className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngay Sinh</label>
                <input className="ml-9 -mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-[7rem] h-[2.6rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="ngaysinh"
                    id="ngaysinh"
                    defaultValue={ngaysinh}
                    onChange={(e) => {
                        setNgaySinh(e.target.value);
                    }}
                />
            </div>
            <div className="ml-8 translate-y-[-6px] flex">
                <label htmlFor="diachi" className="mb-2 translate-y-2 text-sm font-medium text-gray-900 dark:text-white">Dia Chi</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-2 w-[7rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="diachi"
                    id="diachi"
                    defaultValue={diachi}
                    onChange={(e) => {
                        setDiaChi(e.target.value);
                    }}
                />
            </div>

            <div className="ml-8 translate-y-[-20px] flex">
                <label htmlFor="email" className="mb-2 translate-y-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 ml-4 w-[12rem] h-[4rem] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    name="email"
                    id="email"
                    defaultValue={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>

                <div className="relative translate-y-8">
                    {/* <button className="right-0 bottom-0 translate-y-20 -translate-x-40 absolute  bg-[#f59e0b] text-white p-2 rounded-lg" type="submit">Delete</button> */}
                    <button className="right-0 bottom-0 absolute translate-y-[-40px] translate-x-[18rem] bg-[#374151] text-white p-2 rounded-lg" onClick={addStudent}>Save Changes</button>
                </div>
            </form>
        </div>
    )
}