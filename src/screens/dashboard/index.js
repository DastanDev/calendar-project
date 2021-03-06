import React from "react"
import SideBar from "./SideBar"
import { Route } from "react-router-dom"
import Calendar from "../../screens/calendar/index"
import User from "../../screens/user"
import Noticas from "../../screens/noticas/index"
import Classroom from "../classroom"

const Dashboard = ({ children, title }) => {
  return (
    <div className="flex w-full">
      <SideBar />
      <div className="flex bg-gray-100 flex-col p-5 w-full min-h-screen overflow-scroll">
        <h2 className="font-bold text-2xl mb-5">{title}</h2>
        <Route exact path="/dashboard/calendar" component={Calendar} />
        <Route exact path="/dashboard/user" component={User} />
        <Route exact path="/dashboard/noticas" component={Noticas} />
        <Route exact path="/dashboard/class-room" component={Classroom} />
      </div>
    </div>
  )
}

export default Dashboard
