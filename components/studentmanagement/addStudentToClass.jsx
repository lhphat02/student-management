import React, { useState, useEffect } from 'react';
import { Button } from 'flowbite-react';

const AddStudentToClassForm = () => {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    // Fetch data from the hocsinh and lop API endpoints
    fetch('/api/getStudent')
      .then(response => response.json())
      .then(data => setStudents(data));

    fetch('/api/dblop')
      .then(response => response.json())
      .then(data => setClasses(data));
  }, []);

  const handleStudentChange = event => {
    setSelectedStudent(event.target.value);
  };

  const handleClassChange = event => {
    setSelectedClass(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Send a POST request to the hocsinh_lop API endpoint to add the student to the class
    fetch('/api/addStudentToClass', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idHS: selectedStudent,
        idLop: selectedClass
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Student added to class:', data);
        // Reset the form fields
        setSelectedStudent('');
        setSelectedClass('');
      })
      .catch(error => {
        console.error('Error adding student to class:', error);
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold font-poppins">Add Student to Class</h2>
      <form onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <div className="flex w-4/5 gap-5">
          <select className="px-2 py-1 border-2 border-gray-300 rounded-md"
          id="student" 
          value={selectedStudent} onChange={handleStudentChange}>
            <option value="">Select a student</option>
            {students.map(student => (
              <option key={student.idHS} value={student.idHS}>
                {student.HoTen}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select className="px-2 py-1 border-2 border-gray-300 rounded-md"
          id="class" value={selectedClass} onChange={handleClassChange}>
            <option value="">Select a class</option>
            {classes.map(clas => (
              <option key={clas.idLop} value={clas.idLop}>
                {clas.TenLop}
              </option>
            ))}
          </select>
        </div>
        </div>
        {/* <button type="submit">Add Student to Class</button> */}
        <Button type="submit">
            Add Student to Class{' '}
          </Button>
      </form>
    </div>
  );
};

export default AddStudentToClassForm;
