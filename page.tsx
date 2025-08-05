'use client'; // New Code

import EmployeeForm from '../Components/EmployeeForm';
import React, { useState, useEffect } from 'react'; // New Code
import Link from 'next/link';

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

 <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees.map((emp) => (
            <li key={emp.EmployeeId}>
              {emp.name} – <Link href={`/employees/${emp.EmployeeId}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )} 
    </main>
  );
}
// onAddEmployee={addEmployee} is also new portion of code