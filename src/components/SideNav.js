import React from "react"
import { Link } from "react-router-dom"

const SideNav = ({ className, showSideNav }) => {
  return (
    <div
      className={`bg-primary transform flex flex-col fixed transition-all z-20 duration-500 text-center w-full text-white p-5  ${
        showSideNav ? "" : "-translate-y-96"
      } ${className}`}
    >
      <Link
        to="/"
        className="hover:bg-blue-secondary duration-200 cursor-pointer mx-auto px-5 w-full py-2"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="hover:bg-blue-secondary duration-200 cursor-pointer mx-auto px-5 w-full py-2"
      >
        About us
      </Link>
      <Link
        to="/contact"
        className="hover:bg-blue-secondary duration-200 cursor-pointer mx-auto px-5 w-full py-2"
      >
        Contact us
      </Link>
      <Link
        to="/terms"
        className="hover:bg-blue-secondary duration-200 cursor-pointer mx-auto px-5 w-full py-2"
      >
        Terms
      </Link>
      <Link
        to="/login"
        className="hover:bg-blue-secondary duration-200 cursor-pointer mx-auto px-5 w-full py-2"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="hover:bg-blue-secondary duration-200 cursor-pointer mx-auto px-5 w-full py-2"
      >
        Register
      </Link>
    </div>
  )
}

export default SideNav
