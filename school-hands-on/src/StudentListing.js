import React, { useContext } from 'react';
import StudentContext from './StudentContext'

export default function StudentListing() {


    const studentContext = useContext(StudentContext);
    return (
        <React.Fragment>
            <ul>
                {
                    studentContext.getStudents().map(s => {
                        return(
                        <React.Fragment>
                            <li>{s.year} {s.graduated} {s.gender}</li> 
                            <button onClick={studentContext.deleteStudent}>delete</button>
                        </React.Fragment>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}