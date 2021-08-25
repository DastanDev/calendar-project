import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

const Navbar = ({ className }) => {
  const { user, logout } = useContext(UserContext)
  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="bg-primary">
        <div className=" flex px-5 py-2 max-w-7xl mx-auto justify-between text-white text-xs sm:text-sm ">
          <div className="flex place-items-center space-x-1 sm:space-x-5">
            <Link to="/" className="flex place-items-center">
              MDB
            </Link>
            <div>|</div>
            <Link to="/" className="flex place-items-center">
              HOME
            </Link>
            <div>|</div>
            <Link to="/" className="flex place-items-center">
              ABOUT US
            </Link>
            <div>|</div>
            <Link to="/" className="flex place-items-center">
              CONTACT US
            </Link>
            <div>|</div>
            <Link to="/terms" className="flex place-items-center">
              TERMS
            </Link>
          </div>
          <i className="fas sm:invisible sm:hidden fa-bars text-xl cursor-pointer"></i>
          <div className="sm:flex hidden place-items-center space-x-4">
            {!user?.email ? (
              <>
                <Link className="" to="/login">
                  Login
                </Link>
                <Link className="" to="/register">
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
