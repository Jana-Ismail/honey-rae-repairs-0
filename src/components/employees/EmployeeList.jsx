import { useState, useEffect } from "react"
import { getEmployeeUsers } from "../../services/userService"
import { User } from "../users/User"
import './Employees.css'
import { Link } from "react-router-dom"


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useState(() => {
        getEmployeeUsers().then((employee) => {
            setEmployees(employee)
        })
    }, [])

    return (
    <>
        <hr></hr>
        <h2>Employees</h2>
        <div className="employees">
            {employees.map((user) => {
                return (
                    <Link to={`/employees/${user.id}`}>
                        <User user={user} key={user.id}/>
                    </Link>
                )
            })}
        </div>
    </>
    )
}