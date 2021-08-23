import React from "react"

const CourseItem = ({ title, rating, numRating }) => {
  return (
    <div class="flex flex-col  sm:flex-row p-5 relative">
      <img
        class="object-cover"
        src="https://i.ibb.co/4737kYG/image.png"
        alt="course"
      />
      <div class="p-1 flex flex-col">
        <h2 class="">
          <span class="font-bold"> Curso 1: </span>
          {title}
        </h2>
        <div class="flex h-9 justify-start place-items-center space-x-7 text-2xl">
          <div class="flex place-items-center space-x-1">
            <i class="fas fa-user-friends text-gray-500"></i>
            <p class="text-base text-gray-500 font-semibold">{numRating}</p>
          </div>
          <div class="flex place-items-center space-x-1">
            <i class="fas fa-star text-yellow-400"></i>
            <p class="text-base text-gray-500 font-semibold">{rating}</p>
          </div>
        </div>
        <button class=" absolute bottom-5 right-5 bg-gray-500 px-5 py-1 rounded text-white hover:bg-gray-700 duration-200 ">
          ASISTIR
        </button>
      </div>
    </div>
  )
}

export default CourseItem
