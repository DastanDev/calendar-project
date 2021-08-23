import React from "react"
import Calendar from "react-calendar"

const index = () => {
  return (
    <div className="flex flex-col lg:flex-row p-5 justify-evenly">
      <div className="text-left flex max-w-sm mx-auto flex-col bg-white ring-1 ring-gray-200 shadow-xl hover:shadow-2xl duration-200 p-5 rounded-lg ">
        <img
          className="object-cover "
          src="https://i.ibb.co/bsN0mfZ/image.png"
          alt="user"
        />
        <div className="flex justify-between place-items-center pt-5">
          <h2 className="font-semibold">Samuel Fernandez Cortez</h2>
          <i className="fas fa-pen cursor-pointer"></i>
        </div>
        <h2 className="text-lg mb-5">Samyfer@gmail.com</h2>
        <p>+591 78569355</p>
        
      </div>
      <Calendar className="max-w-sm mx-auto mt-5 rounded-lg" />
    </div>
  )
}

export default index
