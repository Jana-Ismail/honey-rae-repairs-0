import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
// import BrowserRouter from 'react-dom/client'


const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
// wrap App component with BrowserRouter
    // BrowswerRouter keeps our application in sync with the url

// then import Routes and define routes in App.jsx 