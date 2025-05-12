import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Auth/Login.jsx"
import SignUp from "./pages/Auth/SignUp.jsx"
import Home from "./pages/Dashboard/Home.jsx"
import Income from "./pages/Dashboard/Income.jsx"
import Expense from "./pages/Dashboard/Expense.jsx"
import UserProvider from"./context/userContext.jsx"

const App = () => {
  return (
    <UserProvider>
    <div className=''>
       <Router>
        <Routes>
          <Route path="/" element={<Root/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/signUp" exact element={<SignUp/>}></Route>
          <Route path="/dashboard" exact element={<Home/>}></Route>
          <Route path="/income" exact element={<Income/>}></Route>
          <Route path="/expense" exact element={<Expense/>}></Route>
        </Routes>
       </Router>
    </div>
    </UserProvider>
  )
}

export default App


const Root = ()=>{
  // Checks if token exists in Local Storage
  const isAuthenticated = !!localStorage.getItem("token");
   
  // Redirect to dashboard if authenticated , otherwise to login 

  return isAuthenticated ? (
    <Navigate to="/dashboard"/>
  ) : (
    <Navigate to="/login"/>
  )

}