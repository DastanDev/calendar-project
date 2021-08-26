import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

const Navbar = ({ className }) => {
  const { user, logout } = useContext(UserContext)
  return (
    <div className={`overflow-hidden  ${className}`}>
      <div className="bg-primary ">
        <div className=" flex px-5 h-16 py-2 max-w-7xl mx-auto justify-between place-items-center text-md text-white ">
          <div className="place-items-center space-x-1 sm:space-x-5 flex">
            <Link
              to="/"
              className="flex place-items-center font-bold text-lg hover:opacity-70 duration-200"
            >
              MDB
            </Link>
            <Link
              to="/"
              className="flex place-items-center hover:opacity-70 duration-200 invisible lg:visible"
            >
              HOME
            </Link>
            <Link
              to="/"
              className="flex place-items-center hover:opacity-70 duration-200 invisible lg:visible"
            >
              ABOUT US
            </Link>
            <Link
              to="/"
              className="flex place-items-center hover:opacity-70 duration-200 invisible lg:visible"
            >
              CONTACT US
            </Link>
            <Link
              to="/terms"
              className="flex place-items-center hover:opacity-70 duration-200 invisible lg:visible"
            >
              TERMS
            </Link>
          </div>
          <i className="fas sm:invisible sm:hidden fa-bars text-xl cursor-pointer"></i>
          <div className="sm:flex hidden place-items-center space-x-4">
            {!user?.email ? (
              <>
                <Link className="hover:opacity-70 duration-200" to="/login">
                  Login
                </Link>
                <Link
                  className="hover:opacity-70 duration-200 bg-blue-secondary px-3 py-2"
                  to="/register"
                >
                  Register
                </Link>
              </>
            ) : (
              <button onClick={logout} className="">
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
