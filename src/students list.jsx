import React, { Component } from 'react';

class StudentManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      grade: '',
      students: [],
      editingIndex: -1,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, grade, students, editingIndex } = this.state;
    if (name.trim() !== '' && grade.trim() !== '') {
      const studentInfo = { name, grade };
      
      if (editingIndex !== -1) {
        // Editing an existing student
        const updatedStudents = [...students];
        updatedStudents[editingIndex] = studentInfo;
        this.setState({
          name: '',
          grade: '',
          students: updatedStudents,
          editingIndex: -1,
        });
      } else {
        // Adding a new student
        this.setState({
          name: '',
          grade: '',
          students: [...students, studentInfo]
        });
      }
    }
  };

  handleDelete = (index) => {
    const updatedStudents = [...this.state.students];
    updatedStudents.splice(index, 1);
    this.setState({
      students: updatedStudents
    });
  };

  handleEdit = (index) => {
    const studentToEdit = this.state.students[index];
    this.setState({
      name: studentToEdit.name,
      grade: studentToEdit.grade,
      editingIndex: index,
    });
  };

  render() {
    const { name, grade, students, editingIndex } = this.state;
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
          <button type="submit">{editingIndex !== -1 ? 'Update Student' : 'Add Student'}</button>
        </form>
        <ul>
          {students.map((student, index) => (
            <li key={index}>
              Name: {student.name}, Grade: {student.grade}
              <button onClick={() => this.handleEdit(index)}>Edit</button>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentManagement;




