import React, { useState } from "react"
import { Link } from "react-router-dom"

const RouteItem = ({ name, Logo, history }) => {
  const [isAcitvePage] = useState(false)

  return (
    <Link
      to={
        name.toLocaleLowerCase() === "dashboard"
          ? "/dashboard"
          : `/dashboard/${name.toLocaleLowerCase()}`
      }
    >
      <div
        className={`hover:bg-white cursor-pointer hover:text-black rounded-sm px-2 py-3 place-items-center flex space-x-2 ${
          isAcitvePage ? "bg-white hover:bg-gray-200" : ""
        }`}
      >
        <Logo />
        <div>{name}</div>
      </div>
    </Link>
  )
}

export default RouteItem
