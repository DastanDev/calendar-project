import React from "react"
import "./styles.css"
import { withTranslation } from "react-i18next"

const Footer = () => {
  //console.log("Test", t('welcome.title', {framework:'React'}))
  return (
    <div className="bg-primary w-full">
      <footer className=" h-44 max-w-4xl px-5 sm:space-y-0 space-y-10 justify-center sm:text-xl sm:justify-between flex-col sm:flex-row text-white mx-auto w-full flex place-items-center ">
        <div className="">© 2021 Copyright: Ventse</div>{" "}
        <div className="space-x-5">
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-google-plus-g"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </footer>
    </div>
  )
}

export default withTranslation("common")(Footer)
