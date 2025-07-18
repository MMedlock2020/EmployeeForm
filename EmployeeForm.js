'use client';

import React from 'react';
import './EmployeeForm.css';

 class EmployeeForm extends
React.Component {
constructor(props) {
super(props);
this.state = {name: '', email: '', title: '',
department: ''};
}
handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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
