'use client';

import React from 'react';
import Link from 'next/link';
import './EmployeeForm.css';

export default function EmployeeList(props) {


return (
<div className="employee-list">
<h1>Employee List</h1>
<ul>
{props.employees.map((employee) => (
<li key={employee.EmployeeId}>
{/* Create a link to the employee detail page */}
<Link href={`/employees/${employee.EmployeeId}`}>
{employee.name}
</Link>
</li>
))}
</ul>
</div>
);
}
