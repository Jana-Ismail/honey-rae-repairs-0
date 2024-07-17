import { useState, useEffect } from "react"
import { getCustomerUsers } from "../../services/userService.js"
import { User } from "../users/User.jsx"
import { Link } from "react-router-dom"
import './Customers.css'

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomerUsers().then((customers) => {
            setCustomers(customers)
        })
    }, [])

    return (
        <>
            <h2>Customers</h2>
            <div className="customers">
                {customers.map((user) => {
                    return (
                        <Link to={`/customers/${user.id}`}>
                            <User user={user} key={user.id}/>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}