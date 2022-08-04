import React from 'react'
import StudentContext from './StudentContext'

export default class AddStudent extends React.Component{
    static contextType = StudentContext;

    state = {
        studentYear : "",
        studentGraduated: "",
        studentGender : ""
    }

    onUpdateFormField = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onUpdateGender = e => {
        this.setState({
            studentGender: e.target.value
        })
    }

    onUpdateGraduated = e => {
        this.setState({
            studentGraduated: e.target.value
        })
    }
    
    onAddStudent = () => {
        this.context.addStudent(this.state.studentYear, this.state.studentGender, this.state.studentGraduated)
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add New Student</h1>
                <div>
                    <label>Student Year</label>
                    <input
                    type ="text"
                    name="studentYear"
                    value={this.state.studentYear}
                    onChange={this.onUpdateFormField}
                    ></input>
                </div>
                <div>
                    <label>Student Gender</label>
                    <input
                    type ="radio"
                    name="studentYear"
                    value= "male"
                    onChange={this.onUpdateGender}
                    />
                    <label for="male">Male</label>
                    <input
                    type ="radio"
                    name="studentYear"
                    value= "female"
                    onChange={this.onUpdateGender}
                    />
                    <label for="female">Female</label>

                </div>
                <div>
                    <label>Student Graduated?</label>
                    <input
                    type ="radio"
                    name="studentGraduated"
                    value= {true}
                    onChange={this.onUpdateGraduated}
                    />
                    <label for={true}>Yes</label>
                    <input
                    type ="radio"
                    name="studentYear"
                    value= {false}
                    onChange={this.onUpdateGraduated}
                    />
                    <label for={false}>No</label>

                </div>
                <button onClick={this.onAddStudent}>Submit</button>
            </React.Fragment>
        )
    }


}