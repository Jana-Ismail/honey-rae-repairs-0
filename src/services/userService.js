export const getCustomerUsers = () => {
  return fetch('http://localhost:8088/users?isStaff=false').then(res => res.json())
}

export const getEmployeeUsers = () => {
  return fetch('http://localhost:8088/users?isStaff=true').then((res => res.json()))
}

export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  )
}

export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json())
}
