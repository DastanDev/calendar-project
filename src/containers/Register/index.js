import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { baseUrl } from "../../baseUrl"
import { UserContext } from "../../contexts/UserContext"
import { useHistory } from "react-router-dom"

const Register = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
    profession: "",
    phone: null,
    gender: "",
    degree: "",
    descriptionOfEntrepreneurship: "",
  })
  const [error, setError] = useState("")
  const { login, user } = useContext(UserContext)
  const history = useHistory()

  const submitHandler = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios({
        method: "POST",
        url: `${baseUrl}/user/register`,
        data: inputs,
      })
      if (data) {
        login(data.email, data.token)
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (user?.email) {
      history.push("/dashboard/noticas")
    }
  }, [user])

  return (
    <>
      <form
        onSubmit={submitHandler}
        class="bg-gray-300 flex flex-col justify-center w-full h-screen"
      >
        <div class="flex flex-col sm:flex-row mx-auto">
          <div class="flex flex-col mb-12 px-5 max-w-xl mx-auto text-sm space-y-1">
            <input
              class="px-5 py-2 rounded-sm outline-none"
              placeholder="primer nombre"
              type="text"
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, firstName: e.target.value }))
              }
              value={inputs.firstName}
            />
            <div class="flex space-x-1">
              <input
                class="px-5 w-1/2 py-2 rounded-sm outline-none"
                placeholder="apellido"
                type="text"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, lastName: e.target.value }))
                }
                value={inputs.lastName}
              />
              <input
                class="px-5 w-1/2 py-2 rounded-sm outline-none"
                placeholder="Email"
                type="text"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, email: e.target.value }))
                }
                value={inputs.email}
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
                type="date"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, birthday: e.target.value }))
                }
                value={inputs.birthday}
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
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, profession: e.target.value }))
              }
              value={inputs.profession}
            />
            <div class="flex space-x-1">
              <input
                class="px-5 py-2 rounded-sm outline-none w-1/2"
                placeholder="Correo Electrónico"
                type="password"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, password: e.target.value }))
                }
                value={inputs.password}
              />
              <input
                class="px-5 py-2 rounded-sm outline-none w-1/2"
                placeholder="Teléfono / Celular"
                type="number"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={inputs.phone}
              />
            </div>
            <input
              class="px-5 py-2 rounded-sm outline-none"
              placeholder="Género"
              type="text"
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={inputs.gender}
            />
            <input
              class="px-5 py-2 rounded-sm outline-none"
              placeholder="Grado Académico"
              type="text"
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, degree: e.target.value }))
              }
              value={inputs.degree}
            />
          </div>
          <div class="flex flex-col space-y-1 max-h-full h-full mx-5 -mt-10 sm:mt-0">
            <textarea
              placeholder="Descripción del Emprendimiento"
              class="outline-none p-1 rounded-sm"
              name=""
              id=""
              cols="30"
              rows="10"
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  descriptionOfEntrepreneurship: e.target.value,
                }))
              }
              value={inputs.descriptionOfEntrepreneurship}
            ></textarea>
          </div>
        </div>
        <div class="px-5 flex space-x-1 mt-5 sm:mt-0 mx-auto">
          <button class="bg-green-500 px-5 py-1 rounded-sm">Accept</button>
          <button class="bg-red-500 px-5 py-1 rounded-sm">Cancel</button>
        </div>
      </form>

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
