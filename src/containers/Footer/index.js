import React from "react"
import "./styles.css"
import { withTranslation } from "react-i18next"

const Footer = () => {
  //console.log("Test", t('welcome.title', {framework:'React'}))
  return (
    <div className="bg-primary w-full">
      <footer className=" h-32 max-w-6xl px-6 sm:space-y-0 space-y-10 justify-center sm:text-xl sm:justify-between flex-col sm:flex-row text-white mx-auto w-full flex place-items-center ">
        <div className="text-gray-500 text-base">
          © 2021 Copyright:
          <span className="text-white font-semibold ml-1">Ventse</span>
        </div>{" "}
        <div className="space-x-5 text-2xl">
          <i className="fab fa-linkedin hover:text-gray-500 cursor-pointer duration-200"></i>
          <i className="fab fa-facebook hover:text-gray-500 cursor-pointer duration-200"></i>
          <i className="fab fa-google-plus-g hover:text-gray-500 cursor-pointer duration-200"></i>
          <i className="fab fa-twitter hover:text-gray-500 cursor-pointer duration-200"></i>
        </div>
      </footer>
    </div>
  )
}

export default withTranslation("common")(Footer)
