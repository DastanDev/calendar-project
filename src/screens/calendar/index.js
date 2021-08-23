import React from "react"
import Calendar from "react-calendar"
import UserCard from "../../components/UserCard"

const index = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 p-5 bg-gray-100 justify-evenly place-items-center ">
      <UserCard
        name="John Doe"
        email="johnDoe@gmail.com"
        phone="+44 234 5678"
      />
      <Calendar className="max-w-sm mx-auto mt-5 rounded-lg" />
    </div>
  )
}

export default index
