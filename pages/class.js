import Input from '@/components/Input';
import MyModal from '@/components/Modal';
import Topbar from '@/components/Topbar';
import ClassTable from '@/components/class/classTable';
import YearTable from '@/components/year-dashboard/year-table';
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const Class = () => {
  const [lop, setlop] = useState([]);
  // let curr_year = new Date().getFullYear();
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedYearName, setSelectedYearName] = useState('');
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState('');
  const [selectedSemesterName, setSelectedSemesterName] = useState('');
  const [classGroups, setClassGroups] = useState([]);
  const [selectedClassGroup, setSelectedClassGroup] = useState('');
  const [selectedClassGroupName, setSelectedClassGroupName] = useState('');
  const [classes, setClasses] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [classData, setClassData] = useState({
    TenLop: '',
    SiSo: '',
    idKhoiLop: '',
    idHocKy: '',
  });

  useEffect(() => {
    // Fetch the list of available years
    const fetchYears = async () => {
      try {
        const response = await axios.get('/api/years');
        setYears(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchYears();
  }, []);

  useEffect(() => {
    // Fetch the list of available semesters for the selected year
    const fetchSemesters = async () => {
      try {
        const response = await axios.get(
          `/api/semesters?idNam=${selectedYear}`
        );
        setSemesters(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedYear) {
      fetchSemesters();
    }
  }, [selectedYear]);

  useEffect(() => {
    // Fetch the list of available class groups for the selected semester
    const fetchClassGroups = async () => {
      try {
        const response = await axios.get(`/api/class-groups`);
        setClassGroups(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedYear) {
      fetchClassGroups();
    }
  }, [selectedYear]);

  useEffect(() => {
    // Fetch the available classes within the selected class group
    const fetchClasses = async () => {
      setClasses([]);

      try {
        const response = await axios.get(
          `/api/getClass?idHocKy=${selectedSemester}&idKhoiLop=${selectedClassGroup}`
        );
        setClasses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedClassGroup) {
      fetchClasses();
    }
  }, [selectedYear, selectedSemester, selectedClassGroup]);

  const addNewClass = async () => {
    const { idLop, TenLop, SiSo, idKhoiLop, idNam, idHocKy } = classData;

    if (!idLop || !TenLop || !SiSo || !idKhoiLop || !idNam || !idHocKy) {
      alert('Missing required information! Please try again.');
      return;
    }

    try {
      const response = await axios.post('/api/addClass', {
        TenLop: TenLop,
        SiSo: SiSo,
        idKhoiLop: idKhoiLop,
        idHocKy: idHocKy,
      });
      console.log(response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log('years:', years);
  console.log('semesters:', semesters);
  console.log('classGroups:', classGroups);

  console.log('classData:', classData);

  console.log('selectedYear', selectedYear);
  console.log('selectedSemester', selectedSemester);
  console.log('selectedClassGroup', selectedClassGroup);

  return (
    <div>
      <Topbar NamePage="Danh sách lớp học" />
      <div className="flex flex-col gap-10 px-20 pb-40 mt-10">
        {/* <div className="flex justify-between">
          <p className="text-3xl font-bold font-poppins">
            Lịch sử quá trình học
          </p>
          <Button>Thêm lớp học kỳ mới </Button>
        </div>
        <div className="z-0">
          <YearTable />
        </div> */}

        {toggleModal ? (
          <MyModal
            className="absolute "
            header={<p className="text-2xl font-bold">Thêm lớp học mới</p>}
            body={
              <>
                <div className="flex justify-between w-full px-3 my-5">
                  <p className="text-lg font-semibold">
                    Năm Học: {selectedYearName}
                  </p>
                  <p className="text-lg font-semibold">
                    Học Kỳ: {selectedSemesterName}
                  </p>
                  <p className="text-lg font-semibold">
                    Khối Lớp: {selectedClassGroupName}
                  </p>
                </div>
                <Input
                  inputType="input"
                  placeholder="Tên Lớp"
                  handleClick={(e) =>
                    setClassData({ ...classData, TenLop: e.target.value })
                  }
                />
              </>
            }
            footer={
              <div className="flex justify-center w-full gap-10">
                <Button pill={false} onClick={() => addNewClass()}>
                  Submit
                </Button>
                <Button
                  pill={false}
                  color="gray"
                  outline
                  onClick={() => setToggleModal(false)}
                >
                  Cancle
                </Button>
              </div>
            }
            handleClose={() => setToggleModal(false)}
            closeBtn={false}
          />
        ) : null}

        <p className="text-3xl font-bold font-poppins">Danh sách lớp</p>
        <div className="flex justify-between">
          {/* Filter */}
          <div className="flex w-4/5 gap-5">
            <select
              className="px-2 py-1 border-2 border-gray-300 rounded-md"
              value={selectedYear}
              onChange={(e) => {
                setSelectedYear(e.target.value);
                const selectedOptionData = years.find(
                  (option) => option.idNam === parseInt(e.target.value)
                );
                setSelectedYearName(selectedOptionData.Namhoc);
              }}
            >
              <option value="">Chọn năm học</option>
              {years.map((year) => (
                <option key={year.idNam} value={year.idNam}>
                  {year.Namhoc}
                </option>
              ))}
            </select>

            {selectedYear && (
              <select
                className="px-2 py-1 border-2 border-gray-300 rounded-md"
                value={selectedSemester}
                onChange={(e) => {
                  setSelectedSemester(e.target.value);
                  setClassData({
                    ...classData,
                    idHocKy: e.target.value,
                  });
                  const selectedOptionData = semesters.find(
                    (option) => option.idHocKy === parseInt(e.target.value)
                  );
                  setSelectedSemesterName(selectedOptionData.HocKy);
                }}
              >
                <option value="">Chọn học kỳ</option>
                {semesters.map((semester) => (
                  <option key={semester.idHocKy} value={semester.idHocKy}>
                    {semester.HocKy}
                  </option>
                ))}
              </select>
            )}

            {selectedYear && (
              <select
                className="px-2 py-1 border-2 border-gray-300 rounded-md"
                value={selectedClassGroup}
                onChange={(e) => {
                  setSelectedClassGroup(e.target.value);
                  setClassData({
                    ...classData,
                    idKhoiLop: e.target.value,
                  });
                  const selectedOptionData = classGroups.find(
                    (option) => option.idKhoiLop === parseInt(e.target.value)
                  );
                  setSelectedClassGroupName(selectedOptionData.TenKhoiLop);
                }}
              >
                <option value="">Chọn khối lớp</option>
                {classGroups.map((classGroup) => (
                  <option
                    key={classGroup.idKhoiLop}
                    value={classGroup.idKhoiLop}
                  >
                    {classGroup.TenKhoiLop}
                  </option>
                ))}
              </select>
            )}
          </div>
          <Button onClick={() => setToggleModal(true)}>
            Thêm lớp học mới{' '}
          </Button>
        </div>

        <ClassTable classes={classes} />
      </div>
    </div>
  );
};

export default Class;
