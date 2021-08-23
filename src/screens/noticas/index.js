import React from "react"

const index = () => {
  return (
    <div class=" flex flex-col lg:flex-row lg:space-x-5 p-5 bg-gray-100 justify-evenly place-items-center ">
      <div class=" flex flex-col bg-white ring-1 ring-gray-200 shadow-xl hover:shadow-2xl duration-200 p-5 rounded-lg ">
        <div>
          <img
            class="object-cover"
            src="https://i.ibb.co/bsN0mfZ/image.png"
            alt="user"
          />
          <div class="flex justify-between place-items-center pt-5">
            <h2 class="font-semibold">Samuel Fernandez Cortez</h2>
            <i class="fas fa-pen cursor-pointer"></i>
          </div>
          <h2 class="text-lg mb-5">Samyfer@gmail.com</h2>
          <p>+591 78569355</p>
        </div>
      </div>
      <div class=" flex flex-col text-sm bg-white ring-1 ring-gray-200 rounded-lg mt-5 lg:mt-0 shadow-lg hover:shadow-2xl duration-200 ">
        <div class="flex flex-col sm:flex-row p-5 relative">
          <img
            class="object-cover"
            src="https://i.ibb.co/4737kYG/image.png"
            alt="course"
          />
          <div class="p-1 flex flex-col">
            <h2 class="">
              <span class="font-bold"> Curso 1: </span>
              Sociabilización con emprendedores.
            </h2>
            <div class="flex h-9 justify-start place-items-center space-x-7 text-2xl">
              <div class="flex place-items-center space-x-1">
                <i class="fas fa-user-friends text-gray-500"></i>
                <p class="text-base text-gray-500 font-semibold">68</p>
              </div>
              <div class="flex place-items-center space-x-1">
                <i class="fas fa-star text-yellow-400"></i>
                <p class="text-base text-gray-500 font-semibold">4.3</p>
              </div>
            </div>
            <button class=" absolute bottom-5 right-5 bg-gray-500 px-5 py-1 rounded text-white hover:bg-gray-700 duration-200 ">
              ASISTIR
            </button>
          </div>
        </div>
        <hr class="w-1/2 border-b-2 border-gray-400 rounded-full mx-auto" />
        <div class="flex flex-col sm:flex-row p-5 relative">
          <img
            class="object-cover"
            src="https://i.ibb.co/4737kYG/image.png"
            alt="course"
          />
          <div class="p-1 flex flex-col">
            <h2 class="">
              <span class="font-bold"> Curso 1: </span>
              Sociabilización con emprendedores.
            </h2>
            <div class="flex h-9 justify-start place-items-center space-x-7 text-2xl">
              <div class="flex place-items-center space-x-1">
                <i class="fas fa-user-friends text-gray-500"></i>
                <p class="text-base text-gray-500 font-semibold">68</p>
              </div>
              <div class="flex place-items-center space-x-1">
                <i class="fas fa-star text-yellow-400"></i>
                <p class="text-base text-gray-500 font-semibold">4.3</p>
              </div>
            </div>
            <button
              class="
            absolute
            bottom-5
            right-5
            bg-gray-500
            px-5
            py-1
            rounded
            text-white
            hover:bg-gray-700
            duration-200
          "
            >
              ASISTIR
            </button>
          </div>
        </div>
        <hr class="w-1/2 border-b-2 border-gray-400 rounded-full mx-auto" />
        <div class="flex flex-col sm:flex-row p-5 relative">
          <img
            class="object-cover"
            src="https://i.ibb.co/4737kYG/image.png"
            alt="course"
          />
          <div class="p-1 flex flex-col">
            <h2 class="">
              <span class="font-bold"> Curso 1: </span>
              Sociabilización con emprendedores.
            </h2>
            <div class="flex h-9 justify-start place-items-center space-x-7 text-2xl">
              <div class="flex place-items-center space-x-1">
                <i class="fas fa-user-friends text-gray-500"></i>
                <p class="text-base text-gray-500 font-semibold">68</p>
              </div>
              <div class="flex place-items-center space-x-1">
                <i class="fas fa-star text-yellow-400"></i>
                <p class="text-base text-gray-500 font-semibold">4.3</p>
              </div>
            </div>
            <button class=" absolute bottom-5 right-5 bg-gray-500 px-5 py-1 rounded text-white hover:bg-gray-700 duration-200 ">
              ASISTIR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
