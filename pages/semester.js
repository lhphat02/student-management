import { useEffect, useState } from 'react';
import axios from 'axios';

const AddStudentToClass = () => {
  const [years, setYears] = useState([]);
  const [selectedYear, setSelectedYear] = useState('');
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState('');
  const [classGroups, setClassGroups] = useState([]);
  const [selectedClassGroup, setSelectedClassGroup] = useState('');

  useEffect(() => {
    // Fetch the list of available years
    const fetchYears = async () => {
      try {
        const response = await axios.get('/api/years');
        setYears(response.data);
        console.log(years);
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
          `/api/semesters?Namhoc=${selectedYear}`
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
        const response = await axios.get(
          `/api/class-groups?HocKy=${selectedSemester}`
        );
        setClassGroups(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (selectedSemester) {
      fetchClassGroups();
    }
  }, [selectedSemester]);

  return (
    <div>
      <h2>Add Student to Class</h2>

      <div>
        <label>
          Year:
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Select a year</option>
            {years.map((year) => (
              <option key={year.idNam} value={year.idNam}>
                {year.Namhoc}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedYear && (
        <div>
          <label>
            Semester:
            <select
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
            >
              <option value="">Select a semester</option>
              {semesters.map((semester) => (
                <option key={semester.idHocKy} value={semester.idHocky}>
                  {semester.HocKy}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {selectedSemester && (
        <div>
          <label>
            Class Group:
            <select
              value={selectedClassGroup}
              onChange={(e) => setSelectedClassGroup(e.target.value)}
            >
              <option value="">Select a class group</option>
              {classGroups.map((classGroup) => (
                <option key={classGroup.idKhoiLop} value={classGroup.idKhoiLop}>
                  {classGroup.TenKhoiLop}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      {/* Rest of the component */}
    </div>
  );
};

export default AddStudentToClass;
