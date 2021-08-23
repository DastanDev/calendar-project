import React from "react"

const UserCard = ({ name, email, phone }) => {
  return (
    <div className="text-left flex max-w-sm mx-auto flex-col bg-white ring-1 ring-gray-200 shadow-xl hover:shadow-2xl duration-200 p-5 rounded-lg ">
      <img
        className="object-cover "
        src="https://i.ibb.co/bsN0mfZ/image.png"
        alt="user"
      />
      <div className="flex justify-between place-items-center pt-5">
        <h2 className="font-semibold">{name}</h2>
        <i className="fas fa-pen cursor-pointer"></i>
      </div>
      <h2 className="text-lg mb-5">{email}</h2>
      <p>{phone}</p>
    </div>
  )
}

export default UserCard
