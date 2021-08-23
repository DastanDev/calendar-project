import React from "react"
import SideBar from "./SideBar"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Route } from "react-router-dom"
import Calendar from "../../screens/calendar/index"

const Dashboard = ({ children, title }) => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex bg-gray-100 flex-col p-5 w-full min-h-screen">
        <h2 className="font-bold text-2xl mb-5">{title}</h2>
        <Router>
          <Route exact path="/dashboard/calendar" component={Calendar} />
        </Router>
      </div>
    </div>
  )
}

export default Dashboard
