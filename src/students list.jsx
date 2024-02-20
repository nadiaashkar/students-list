import React, { Component } from 'react';

class StudentManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      grade: '',
      students: []
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, grade, students } = this.state;
    if (name.trim() !== '' && grade.trim() !== '') {
      const studentInfo = { name, grade };
      
      this.setState({
        name: '',
        grade: '',
        students: [...students, studentInfo]
      });
    }
  };

  handleDelete = (index) => {
    const updatedStudents = [...this.state.students];
    updatedStudents.splice(index, 1);
    this.setState({
      students: updatedStudents
    });
  };

  render() {
    const { name, grade, students } = this.state;
    return (
      <div>
        <h2>Students List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="grade"
            placeholder="Enter Grade"
            value={grade}
            onChange={this.handleChange}
          />    








          
          
          <button type="submit">Add Student</button>
        </form>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              Name: {student.name}, Grade: {student.grade}
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentManagement;
