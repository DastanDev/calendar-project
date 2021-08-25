import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { UserContext } from "../../contexts/UserContext"
import { baseUrl } from "../../baseUrl"
import { useHistory } from "react-router-dom"

const Login = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" })
  const { login, user } = useContext(UserContext)
  const [error, setError] = useState("")
  const history = useHistory()

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios({
        method: "POST",
        url: `${baseUrl}/user/login`,
        data: inputs,
      })
      if (data) {
        login(data.email, data.token)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    if (user?.email) {
      history.push("/dashboard/noticas")
    }
  }, [user, history])

  return (
    <>
      <div class="bg-gray-300 flex flex-col justify-center w-full h-screen">
        <div class="flex flex-col mb-12 max-w-xl mx-auto w-full text-sm">
          <div class="px-5">
            <div class="bg-white ring-gray-400 ring-1 rounded-3xl">
              <div class="bg-primary p-10 rounded-t-3xl py-11">
                <h2 class="font-bold text-2xl sm:text-4xl text-white mb-2">
                  BIENVENIDO
                </h2>
                <p class="font-extralight text-xl sm:text-3xl text-white">
                  Porfavor Inicia Sesión
                </p>
              </div>
              <form
                onSubmit={submitHandler}
                class="flex flex-col mb-12 px-10 space-y-9"
              >
                <div class="flex flex-col space-y-10">
                  <div className="text-left text-red-500 -mb-5 mt-4">
                    {error}
                  </div>
                  <h2
                    class="font-semibold text-md sm:text-lg mt-5 -mb-7 self-start"
                    for="correo "
                  >
                    Correo
                  </h2>
                  <input
                    class="w-full text-xs sm:text-sm border-b-2 border-gray-500 outline-none"
                    placeholder="Ingrese su correo electrónico"
                    type="email"
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, email: e.target.value }))
                    }
                    value={inputs.email}
                  />
                </div>
                <div class="flex flex-col space-y-10">
                  <h2
                    class="font-semibold text-md sm:text-lg mt-5 -mb-7 self-start"
                    for="correo "
                  >
                    Contraseña
                  </h2>
                  <input
                    class="w-full text-xs sm:text-sm border-b-2 border-gray-500 outline-none"
                    placeholder="Ingrese su correo electrónico"
                    type="text"
                    id="correo"
                    onChange={(e) =>
                      setInputs((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    value={inputs.password}
                  />
                </div>
                <label class="flex justify-start items-start scale-90 self-start">
                  <div class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                    <input type="checkbox" class="opacity-0 absolute" />
                    <svg
                      class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none"
                      viewBox="0 0 20 20"
                    >
                      <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                  </div>
                  <div class="select-none textxs">Recordarme</div>
                </label>
                <button
                  type="submit"
                  class="flex px-5 bg-blue-500 w-max mt-5 rounded-md text-sm py-1 text-white font-light hover:bg-blue-600 duration-200 transition-colors cursor-pointer bg-primary"
                >
                  INICIAR
                </button>
                <div class="text-xs text-gray-400 pb-16">
                  Aún no eres parte del BDP?{" "}
                  <span class="text-black font-bold ml-1">
                    <a href="/register">POSTULAR</a>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
