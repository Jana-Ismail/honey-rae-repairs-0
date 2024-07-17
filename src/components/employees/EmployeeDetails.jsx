import { useParams } from 'react-router-dom'
import './Employees.css'
import { getEmployeeByUserId } from '../../services/employeeServices'
import { useState, useEffect } from 'react'

export const EmployeeDetails = () => {
    const [ employee, setEmployee ] = useState({})
    const { employeeId } = useParams()
    const [ employeeTickets, setEmployeeTickets] = useState([])

    useEffect(() => {
        getEmployeeByUserId(employeeId).then(data => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
            const employeeTicketsNum = data.map(employee => employee.employeeTickets.length)
            if (employeeTicketsNum) {
                setEmployeeTickets(employeeTicketsNum)
            } else {
                setEmployeeTickets("None")
            }
        })
    }, [])

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
                <div>
                    <span className="employee-info">Email : </span>
                    {employee.user?.email}
                </div>
                <div>
                    <span className="employee-info">Rate : </span>
                    ${employee.rate} / hour
                </div>
                <div>
                    <span className="employee-info">Specialty : </span>
                    {employee.specialty}
                </div>
            <footer className="employee-footer">
                <div>
                    <span># of tickets working on : </span>
                    {employeeTickets}
                </div>
            </footer>
        </section>
    )
}