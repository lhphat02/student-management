import React, { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';
import axios from 'axios';

import Input from '@/components/Input';
import MyModal from '@/components/Modal';

const SubjectResultControllerModal = ({
  close,
  idHS,
  HoTen,
  idMH,
  idLop,
  DiemHS1,
  DiemHS2,
  DiemTBMon,
}) => {
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
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedClassName, setSelectedClassName] = useState('');

  const [examTypes, setExamTypes] = useState([]);
  const [selectedExamType, setSelectedExamType] = useState('');
  const [selectedExamTypeName, setSelectedExamTypeName] = useState('');

  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedSubjectName, setSelectedSubjectName] = useState('');

  const [newScoreData, setNewScoreData] = useState({
    idHS: idHS,
    idLop: idLop,
    Diem: '',
    LHKT: '',
    idMH: '',
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
    // Fetch the list of available exam types for the selected semester
    const fetchExamTypes = async () => {
      try {
        const response = await axios.get(`/api/getExamType`);
        setExamTypes(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchExamTypes();
  }, []);

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

  useEffect(() => {
    // Fetch the available subjects within the selected class
    const fetchSubjects = async () => {
      setSubjects([]);

      try {
        const response = await axios.get(`/api/getSubject`);
        setSubjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSubjects();
  }, []);

  const addScore = async () => {
    if (!selectedSubject) {
      alert('Vui lòng chọn môn học');
      return;
    }

    if (!newScoreData.LHKT) {
      alert('Vui lòng chọn loại hình kiểm tra');
      return;
    }

    if (!newScoreData.Diem) {
      alert('Vui lòng nhập điểm');
      return;
    }

    try {
      const response = await axios.post('/api/scores', newScoreData);
      console.log(response.data);
      close();
    } catch (error) {
      console.error(error);
      close();
    }
  };

  console.log('newScoreData: ', newScoreData);

  return (
    <MyModal
      className="absolute "
      header={
        <div className="text-2xl font-bold">
          Nhập Điểm Học Sinh <div className="text-blue-600 ">{HoTen}</div>
        </div>
      }
      body={
        <>
          <p className="py-3 text-lg font-semibold">
            Môn Học <span className="text-red-500 text-xl">*</span>:
          </p>
          <select
            className="w-full h-10 border-2 border-gray-300 rounded-md"
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setNewScoreData({
                ...newScoreData,
                idMH: e.target.value,
              });
              const selectedOptionData = subjects.find(
                (option) => option.idMH === parseInt(e.target.value)
              );
              setSelectedSubjectName(selectedOptionData.TenMH);
            }}
          >
            <option value="" disabled selected hidden>
              Chọn Môn Học
            </option>
            {subjects.map((subject) => (
              <option key={subject.idMH} value={subject.idMH}>
                {subject.TenMH}
              </option>
            ))}
          </select>
          <p className="py-3 mt-2 text-lg font-semibold">
            Loại Hình Kiểm Tra <span className="text-red-500 text-xl">*</span>:
          </p>
          <select
            className="w-full h-10 border-2 border-gray-300 rounded-md"
            value={selectedExamType}
            onChange={(e) => {
              setSelectedExamType(e.target.value);
              setNewScoreData({
                ...newScoreData,
                LHKT: e.target.value,
              });
              setSelectedExamTypeName(
                e.target.options[e.target.selectedIndex].text
              );
            }}
          >
            <option value="" disabled selected hidden>
              Chọn Loại Kiểm Tra
            </option>
            {examTypes.map((examType) => (
              <option key={examType.idLHKT} value={examType.idLHKT}>
                {examType.TenLHKT}
              </option>
            ))}
          </select>
          <p className="mt-5 text-lg font-semibold ">
            Nhập Điểm Số <span className="text-red-500 text-xl">*</span>:
          </p>
          <Input
            inputType="number"
            placeholder="Điểm Môn Học"
            handleClick={(e) =>
              setNewScoreData({
                ...newScoreData,
                Diem: e.target.value,
              })
            }
          />
        </>
      }
      footer={
        <div className="flex justify-center w-full gap-10">
          <Button
            pill={false}
            onClick={() => {
              addScore();
            }}
          >
            Chấp nhận
          </Button>
          <Button pill={false} color="gray" outline onClick={() => close()}>
            Hủy
          </Button>
        </div>
      }
      handleClose={() => {
        close();
        setNewScoreData({
          idHS: '',
          idMH: '',
          idLop: '',
          Diem: '',
          LHKT: '',
        });
      }}
      closeBtn={false}
    />
  );
};

export default SubjectResultControllerModal;
