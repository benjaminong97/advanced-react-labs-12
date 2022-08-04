import logo from './logo.svg';
import './App.css';
import StudentContext from './StudentContext';
import React, {useState} from 'react'
import StudentListing from './StudentListing';
import AddStudent from './AddStudent';

function App() {

  //create a list of students in a state
  const [students, setStudents] = useState([
    {
      id: '1',
      year: 2,
      gender: "male",
      graduated: false
    },
    {
      id : '2',
      year: 4,
      gender: 'female',
      graduated: true
    },
    {
      id: '3',
      year: 3,
      gender: 'male',
      graduated: false 
    }
  ])

  const context = {
    getStudents: () => {
      return students;
    },
    addStudent: (studentYear, studentGender, studentGraduated) => {
      const cloned = [...students, {
        id: Math.floor((Math.random() * 100000) + 10000),
        year: studentYear,
        gender: studentGender,
        graduated: studentGraduated
      }]
      setStudents(cloned)
    },
    deleteStudent: (studentId) => {
      const cloned = [...students]
      const studentIndex = cloned.findIndex((student) => student.id === studentId)
      cloned.splice(studentIndex,1)
      setStudents(cloned)
    }
  }

  return (
    <React.Fragment>
      <StudentContext.Provider value ={context}>
        <h1>Students</h1>
        <StudentListing/>
        <AddStudent/>
      </StudentContext.Provider>
    </React.Fragment>
    
  );
}

export default App;
