'use client';

import React from 'react';
import './EmployeeForm.css';

 class EmployeeForm extends
React.Component {
constructor(props) {
super(props);
this.state = {name: '', email: '', title: '',
department: '', employees: 0 };
}
handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = { // newly added code
      name: this.state.name,
      email: this.state.email, 
      title: this.state.title, 
      department: this.state.department
    };
    this.props.onAddEmployee(newEmployee); // Call parent handler
    this.setState({
      name: '',
      email: '',
      title: '',
      department: '',
    });
// End newly added code
    console.log('Form submitted:', this.state);
    // Optionally reset the form
    this.setState({
      name: '',
      email: '',
      title: '',
      department: ''
    });
  };

  render() {
    return (
      <form className="employee-form" onSubmit={this.handleSubmit}> 
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="department"
          value={this.state.department}
          onChange={this.handleChange}
          placeholder="Department"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default EmployeeForm;
