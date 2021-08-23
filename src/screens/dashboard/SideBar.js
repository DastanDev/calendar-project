import React from "react"
import RouteItem from "./RouteItem"
import { FaTachometerAlt } from "react-icons/fa"

const SideBar = () => {
  return (
    <div className="hidden max-h-screen space-y-2 overflow-y-scroll hide-scroll text-white bg-primary  font-semibold text-lg flex-col lg:flex lg:p-5 lg:w-3/12 ">
      <RouteItem name="calendar" Logo={FaTachometerAlt} />
      <RouteItem name="Applications" Logo={FaTachometerAlt} />
    </div>
  )
}

export default SideBar
