
import "./index.css"
import { Routes, Route } from "react-router-dom"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import { Authorized } from "./views/Authorized.jsx"
import { ApplicationViews } from "./views/ApplicationViews.jsx"
// import Routes


export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route 
        path="*" 
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
      } 
      />
      
    </Routes>
  )
}
// wrap all of our routes in a Routes component here
// create Route for each route, with a path [i.e. '/tickets'] & an element that renders the component
  // - This sets

// create a 'nav' component folder with 'NavBar.jsx' and 'NavBar.css'

// import 'NavBar.css' & create NavBar component

// useEffect() hook prevents infinite loop, takes 2 arguments:
  // 1. a function
  //    - what we want to happen
  // 2. an array-called the 'dependency array'
  //    - when we want it to happen
  // - Kind of like an event listener - when we have an empty dependency array,
  //   tells the function to only run on the initial render of our component

