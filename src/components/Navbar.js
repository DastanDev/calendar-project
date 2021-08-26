import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/UserContext"

const Navbar = ({ className, setShowSideNav }) => {
  const { user, logout } = useContext(UserContext)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    window.onscroll = () => {
      if (document.documentElement.scrollTop > 200) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
  }, [isScrolled])

  return (
    <div className={`overflow-hidden z-30  ${className}`}>
      <div className="bg-primary">
        <div
          className={` flex px-5 py-2 duration-700 max-w-6xl mx-auto justify-between place-items-center text-md text-white ${
            isScrolled ? "h-12" : "h-16"
          }`}
        >
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
              Home
            </Link>
            <Link
              to="/"
              className="flex place-items-center hover:opacity-70 duration-200 invisible lg:visible"
            >
              About Us
            </Link>
            <Link
              to="/"
              className="flex place-items-center hover:opacity-70 duration-200 invisible lg:visible"
            >
              Contact Us
            </Link>
            <Link
              to="/terms"
              className="flex place-items-center hover:opacity-70 duration-200 invisible lg:visible"
            >
              Terms
            </Link>
          </div>
          <i
            onClick={() => setShowSideNav((prev) => !prev)}
            className="fas sm:invisible sm:hidden fa-bars text-xl cursor-pointer"
          ></i>
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
