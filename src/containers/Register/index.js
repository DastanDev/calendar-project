import React from "react"
import Input from "../../StyledCompoents/Input"
import Select from "../../StyledCompoents/Select"
import Textarea from "../../StyledCompoents/Textarea"
import Button from "../../StyledCompoents/Button"

const Register = () => {
  return (
    <>
      <div class="bg-gray-300 flex flex-col justify-center w-full h-screen">
        <div class="flex flex-col sm:flex-row mx-auto">
          <div class="flex flex-col mb-12 px-5 max-w-xl mx-auto text-sm space-y-1">
            <input
              class="px-5 py-2 rounded-sm outline-none"
              placeholder="Fecha"
              type="text"
            />
            <div class="flex space-x-1">
              <input
                class="px-5 w-1/2 py-2 rounded-sm outline-none"
                placeholder="Fecha"
                type="text"
              />
              <input
                class="px-5 w-1/2 py-2 rounded-sm outline-none"
                placeholder="Fecha"
                type="text"
              />
            </div>
            <div class="flex space-x-1">
              <select class="w-1/3 rounded-sm h-8" name="select" id="">
                <option>Departamento</option>
              </select>
              <select class="w-1/3 rounded-sm h-8" name="select" id="">
                <option>Departamento</option>
              </select>
              <select class="w-1/3 rounded-sm h-8" name="select" id="">
                <option>Departamento</option>
              </select>
            </div>
            <div class="flex space-x-1">
              <input
                class="px-5 py-2 rounded-sm outline-none w-2/4"
                placeholder="Cédula de Identidad"
                type="text"
              />
              <select class="w-1/4 rounded-sm" name="select" id="">
                <option>Extensión</option>
              </select>
              <select class="w-1/4 rounded-sm" name="select" id="">
                <option>Estado Civil</option>
              </select>
            </div>
            <div class="flex space-x0">
              <input
                class="px-5 py-2 rounded-sm outline-none w-2/4"
                placeholder="Fecha de Nacimiento"
                type="text"
              />
              <select class="w-1/4 rounded-sm" name="select" id="">
                <option>Edad</option>
              </select>
              <select class="w-1/4 rounded-sm" name="select" id="">
                <option>Rango</option>
              </select>
            </div>
            <input
              class="px-5 py-2 rounded-sm outline-none"
              placeholder="Profesión / Ocupación"
              type="text"
            />
            <div class="flex space-x-1">
              <input
                class="px-5 py-2 rounded-sm outline-none w-1/2"
                placeholder="Correo Electrónico"
                type="text"
              />
              <input
                class="px-5 py-2 rounded-sm outline-none w-1/2"
                placeholder="Teléfono / Celular"
                type="text"
              />
            </div>
            <input
              class="px-5 py-2 rounded-sm outline-none"
              placeholder="Género"
              type="text"
            />
            <input
              class="px-5 py-2 rounded-sm outline-none"
              placeholder="Grado Académico"
              type="text"
            />
          </div>
          <div class="flex flex-col space-y-1 max-h-full h-full mx-5 -mt-10 sm:mt-0">
            <textarea
              placeholder="Descripción del Emprendimiento"
              class="outline-none p-1 rounded-sm"
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
            <textarea
              placeholder="Descripción del Emprendimiento"
              class="outline-none p-1 rounded-sm"
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
            <textarea
              placeholder="Descripción del Emprendimiento"
              class="outline-none p-1 rounded-sm"
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
            <textarea
              placeholder="Descripción del Emprendimiento"
              class="outline-none p-1 rounded-sm"
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
          </div>
        </div>
        <div class="px-5 flex space-x-1 mt-5 sm:mt-0 mx-auto">
          <button class="bg-green-500 px-5 py-1 rounded-sm">Accept</button>
          <button class="bg-red-500 px-5 py-1 rounded-sm">Cancel</button>
        </div>
      </div>

      <div class="bg-primary w-full">
        <footer
          class="
        h-44
        max-w-4xl
        px-5
        sm:space-y-0
        space-y-10
        justify-center
        sm:text-xl sm:justify-between
        flex-col
        sm:flex-row
        text-white
        mx-auto
        w-full
        flex
        place-items-center
      "
        >
          <div class="">© 2021 Copyright: Ventse</div>
          <div class="space-x-5">
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-google-plus-g"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Register
