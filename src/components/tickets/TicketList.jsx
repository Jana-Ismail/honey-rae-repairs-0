import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService.js"
import "./Tickets.css"
import { Ticket } from "./Ticket.jsx"
import { FilterBar } from "./FilterBar.jsx"

export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => {
      if (currentUser.isStaff) {
        setAllTickets(ticketsArray)
      } else {
        const customerTickets = ticketsArray.filter(
          (ticket) => ticket.userId === currentUser.id
        )
        setAllTickets(customerTickets)
      }
    })
  }

  useEffect(() => {
    getAndSetTickets()
  }, [currentUser])

  useEffect(() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(ticket => ticket.emergency === true)
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergencyOnly, allTickets]) // when value of showEmergencyOnly changes - this function will run

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) => 
    ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
    setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])
  
  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      <FilterBar 
        setShowEmergencyOnly={setShowEmergencyOnly} 
        setSearchTerm={setSearchTerm}
      />
      <article className="tickets">
        {filteredTickets.map((ticket) => {
          return (
            <Ticket 
              ticket={ticket} 
              key={ticket.id} 
              currentUser={currentUser}
              getAndSetTickets={getAndSetTickets}
            />
          )
        })}
      </article>
    </div>
  )
}


  // useEffect(() => {
  //   const getTickets = async () => {
  //     setAllTickets(ticketsArray)
  //     const ticketsArray = await getAllTickets()
  //   }
  //   getTickets()
  //   console.log('Tickets set!')
  // }, [])