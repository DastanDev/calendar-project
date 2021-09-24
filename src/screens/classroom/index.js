import React from "react"

const index = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 p-5 bg-gray-100 justify-evenly place-items-center ">
      <div className=" flex flex-col text-sm bg-white ring-1 ring-gray-200 rounded-lg mt-5 lg:mt-0 shadow-lg hover:shadow-2xl duration-200 ">
        <div className="flex flex-col sm:flex-row p-5 relative">
          <img
            className="object-cover"
            src="https://i.ibb.co/4737kYG/image.png"
            alt="course"
          />
          <div className="p-1 flex flex-col">
            <h2 className="">
              <span className="font-bold"> Curso 1: </span>
              Sociabilización con emprendedores.
            </h2>
            <div className="flex h-9 justify-start place-items-center space-x-7 text-2xl">
              <div className="flex place-items-center space-x-1">
                <i className="fas fa-user-friends text-gray-500"></i>
                <p className="text-base text-gray-500 font-semibold">68</p>
              </div>
              <div className="flex place-items-center space-x-1">
                <i className="fas fa-star text-yellow-400"></i>
                <p className="text-base text-gray-500 font-semibold">4.3</p>
              </div>
            </div>
            <button className=" absolute bottom-5 right-5 bg-secondary px-5 py-1 rounded text-white hover:bg-gray-700 duration-200 ">
              ASISTIR
            </button>
          </div>
        </div>
        <hr className="w-1/2 border-b-2 border-gray-400 rounded-full mx-auto" />
        <div className="flex flex-col sm:flex-row p-5 relative">
          <img
            className="object-cover"
            src="https://i.ibb.co/4737kYG/image.png"
            alt="course"
          />
          <div className="p-1 flex flex-col">
            <h2 className="">
              <span className="font-bold"> Curso 1: </span>
              Sociabilización con emprendedores.
            </h2>
            <div className="flex h-9 justify-start place-items-center space-x-7 text-2xl">
              <div className="flex place-items-center space-x-1">
                <i className="fas fa-user-friends text-gray-500"></i>
                <p className="text-base text-gray-500 font-semibold">68</p>
              </div>
              <div className="flex place-items-center space-x-1">
                <i className="fas fa-star text-yellow-400"></i>
                <p className="text-base text-gray-500 font-semibold">4.3</p>
              </div>
            </div>
            <button className=" absolute bottom-5 right-5 bg-secondary px-5 py-1 rounded text-white hover:bg-gray-700 duration-200 ">
              ASISTIR
            </button>
          </div>
        </div>
        <hr className="w-1/2 border-b-2 border-gray-400 rounded-full mx-auto" />
        <div className="flex flex-col sm:flex-row p-5 relative">
          <img
            className="object-cover"
            src="https://i.ibb.co/4737kYG/image.png"
            alt="course"
          />
          <div className="p-1 flex flex-col">
            <h2 className="">
              <span className="font-bold"> Curso 1: </span>
              Sociabilización con emprendedores.
            </h2>
            <div className="flex h-9 justify-start place-items-center space-x-7 text-2xl">
              <div className="flex place-items-center space-x-1">
                <i className="fas fa-user-friends text-gray-500"></i>
                <p className="text-base text-gray-500 font-semibold">68</p>
              </div>
              <div className="flex place-items-center space-x-1">
                <i className="fas fa-star text-yellow-400"></i>
                <p className="text-base text-gray-500 font-semibold">4.3</p>
              </div>
            </div>
            <button className=" absolute bottom-5 right-5 bg-secondary px-5 py-1 rounded text-white hover:bg-gray-700 duration-200 ">
              ASISTIR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
