import React from "react"

class Login extends React.Component {
   state = {
      collapseID: "",
   };

   toggleCollapse = (collapseID) => () =>
      this.setState((prevState) => ({
         collapseID: prevState.collapseID !== collapseID ? collapseID : "",
      }));

   render() {
      return (
         <>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

            <div class="bg-primary">
               <div class="flex px-5 py-2 max-w-7xl mx-auto justify-between text-white text-xs sm:text-sm">
                  <div class="flex place-items-center space-x-5">
                     <a href="/" class="flex place-items-center">MDB</a>
                     <div>|</div>
                     <a href="/" class="flex place-items-center">HOME</a>
                     <div>|</div>
                     <a href="/" class="flex place-items-center">ABOUT US</a>
                     <div>|</div>
                     <a href="/" class="flex place-items-center">CONTACT US</a>
                  </div>
                  <div class="flex place-items-center space-x-4">
                     <div class="flex place-items-center space-x-4 bg-gray-300 px-5 py-2 rounded-sm">
                        <i class="fas fa-search"></i>
                        <input class="bg-gray-300 outline-none" placeholder="Buscar" type="text" />
                     </div>
                     <a class="" href="/login">Login</a>
                     <a class="" href="/login">Register</a>
                  </div>
               </div>
            </div>
            <div class="bg-gray-300 flex flex-col justify-center w-full h-screen">
               <div class="flex flex-col mb-12 max-w-xl mx-auto w-full text-sm">
                  <div class="px-5">
                     <div class="bg-white ring-gray-400 ring-1 rounded-3xl">
                        <div class="bg-primary p-10 rounded-t-3xl py-11">
                           <h2 class="font-bold text-2xl sm:text-4xl text-white mb-2">BIENVENIDO</h2>
                           <p class="font-extralight text-xl sm:text-3xl text-white">Porfavor Inicia Sesión</p>
                        </div>
                        <div class="flex flex-col mb-12 px-10 space-y-9">
                           <div class="flex flex-col space-y-10">
                              <h2 class="font-semibold text-md sm:text-lg mt-5 -mb-7 self-start" for="correo ">Correo</h2>
                              <input class="w-full text-xs sm:text-sm border-b-2 border-gray-500 outline-none" placeholder="Ingrese su correo electrónico" type="text" id="correo" />
                           </div>
                           <div class="flex flex-col space-y-10">
                              <h2 class="font-semibold text-md sm:text-lg mt-5 -mb-7 self-start" for="correo ">Contraseña</h2>
                              <input class="w-full text-xs sm:text-sm border-b-2 border-gray-500 outline-none" placeholder="Ingrese su correo electrónico" type="text" id="correo" />
                           </div>
                           <label class="flex justify-start items-start scale-90 self-start">
                              <div class="bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-blue-500">
                                 <input type="checkbox" class="opacity-0 absolute" />
                                 <svg class="fill-current hidden w-4 h-4 text-green-500 pointer-events-none" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z" /></svg>
                              </div>
                              <div class="select-none textxs">Recordarme</div>
                           </label>
                           <div class="flex px-5 bg-blue-500 w-max mt-5 rounded-md text-sm py-1 text-white font-light hover:bg-blue-600 duration-200 transition-colors cursor-pointer bg-primary">INICIAR</div>
                           <div class="text-xs text-gray-400 pb-16">
                              Aún no eres parte del BDP? <span class="text-black font-bold ml-1"><a href="/register">POSTULAR</a></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div></>

      )
   }
}

export default Login
