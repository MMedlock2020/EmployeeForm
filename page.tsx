'use client'; // New Code
import EmployeeForm from '../Components/EmployeeForm';
import React, { useState, useEffect } from 'react'; // New Code

export default function HomePage() {
const [employees, setEmployees] = useState([]); // New Code

// Load employees from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('employees');
    if (saved) {
      setEmployees(JSON.parse(saved));
    }
  }, []);

  const saveData = (data: any[]) => {
    localStorage.setItem('employees', JSON.stringify(data));
  };

  const addEmployee = (employee: any) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };
// End New Code for Local Storage
  return (
    <main>
      <h1>Employee Form</h1>
      <EmployeeForm onAddEmployee={addEmployee} /> 
    </main>
  );
}
// onAddEmployee={addEmployee} is also new portion of code