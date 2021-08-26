import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { baseUrl } from "../../baseUrl"
import { UserContext } from "../../contexts/UserContext"
import { useHistory } from "react-router-dom"
import Input from "../../components/Input"
import Select from "../../components/Select"

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
  }, [user, history])

  return (
    <div className="relative">
      <img
        className="absolute top-0 h-full object-cover w-full z-0"
        src="https://i.ibb.co/d5wsFD3/wp.jpg"
        alt="bg"
      />
      <form
        onSubmit={submitHandler}
        className="bg-gray-300 flex flex-col h-screen z-10"
      >
        <div className="flex flex-col sm:flex-row mx-auto z-10 mt-20">
          <div className="flex flex-col mb-12 px-5 max-w-4xl mx-auto text-sm space-y-3">
            <Input
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, firstName: e.target.value }))
              }
              value={inputs.firstName}
              placeholder="primer nombre"
              type="text"
            />

            <div className="flex space-x-1">
              <Input
                placeholder="apellido"
                type="text"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, lastName: e.target.value }))
                }
                value={inputs.lastName}
              />
              <Input
                placeholder="Email"
                type="text"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, email: e.target.value }))
                }
                value={inputs.email}
              />
            </div>
            <div className="flex space-x-1">
              <Select>
                <option>Departamento</option>
              </Select>

              <Select className="w-1/3 rounded-md h-8" name="select" id="">
                <option>Departamento</option>
              </Select>
              <Select className="w-1/3 rounded-md h-8" name="select" id="">
                <option>Departamento</option>
              </Select>
            </div>
            <div className="flex space-x-1 place-items-center">
              <Input
                className="px-5 py-2 rounded-sm outline-none w-2/4"
                placeholder="Cédula de Identidad"
                type="text"
              />
              <Select className="w-1/4 rounded-sm" name="select" id="">
                <option>Extensión</option>
              </Select>
              <Select className="w-1/4 rounded-sm" name="select" id="">
                <option>Estado Civil</option>
              </Select>
            </div>
            <div className="flex space-x-2 place-items-center">
              <Input
                className="px-5 py-2 rounded-sm outline-none w-2/4"
                placeholder="Fecha de Nacimiento"
                type="date"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, birthday: e.target.value }))
                }
                value={inputs.birthday}
              />
              <Select className="w-1/4 rounded-sm" name="select" id="">
                <option>Edad</option>
              </Select>
              <Select className="w-1/4 rounded-sm" name="select" id="">
                <option>Rango</option>
              </Select>
            </div>
            <Input
              className="px-5 py-2 rounded-sm outline-none"
              placeholder="Profesión / Ocupación"
              type="text"
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, profession: e.target.value }))
              }
              value={inputs.profession}
            />
            <div className="flex space-x-1">
              <Input
                className="px-5 py-2 rounded-sm outline-none w-1/2"
                placeholder="Correo Electrónico"
                type="password"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, password: e.target.value }))
                }
                value={inputs.password}
              />
              <Input
                className="px-5 py-2 rounded-sm outline-none w-1/2"
                placeholder="Teléfono / Celular"
                type="number"
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={inputs.phone}
              />
            </div>
            <Input
              className="px-5 py-2 rounded-sm outline-none"
              placeholder="Género"
              type="text"
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={inputs.gender}
            />
            <Input
              className="px-5 py-2 rounded-sm outline-none"
              placeholder="Grado Académico"
              type="text"
              onChange={(e) =>
                setInputs((prev) => ({ ...prev, degree: e.target.value }))
              }
              value={inputs.degree}
            />
          </div>
          <div className="flex flex-col space-y-1 max-h-full h-full mx-5 -mt-10 sm:mt-0">
            <textarea
              placeholder="Descripción del Emprendimiento"
              className="outline-none p-2 rounded-md w-full"
              cols="30"
              rows="7"
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
        <div className="px-5 flex space-x-1 mt-5 sm:mt-0 mx-auto z-10">
          <button className="bg-green-primary px-10 py-3 rounded-sm z-10 text-white">
            Accept
          </button>
          <button className="bg-red-primary px-10 py-3 rounded-sm z-10 text-white">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
