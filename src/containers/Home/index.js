import React from "react"
import "./styles.css"
import { withTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import PostItem from "../../components/PostItem"

const Home = () => {
  return (
    <>
      <div className="relative bg-primary h-96 p-5 text-white">
        <div className=" absolute flex flex-col left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-32 text-4xl sm:text-5xl font-bold text-center ">
          <h2>BANCO DE DESARROLLO PRODUCTIVO</h2>
          <hr className="text-white mt-5 border-b-2 w-20 mx-auto" />
          <h2 className="text-xl mt-2">SUBTITLE</h2>
          <div className="flex space-x-3 mt-5 mx-auto">
            <button className=" text-lg ring-1 ring-white px-5 py-1 rounded-sm hover:shadow-md transition-colors duration-200 ">
              Register
            </button>
            <button className=" text-lg ring-1 ring-white px-5 py-1 rounded-sm hover:shadow-md transition-colors duration-200 ">
              About us
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full p-5 max-w-5xl mx-auto">
        <h2 className="font-bold text-center text-3xl mb-7 mt-2">
          Recent Posts
        </h2>
        <p className="text-center mb-9 text-sm max-w-sm mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <PostItem
          img="https://mdbootstrap.com/img/Photos/Others/img%20(38).jpg"
          date="26/08/2016"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          tag="Lifestyle"
          title="This is title of the news"
          author="Jessica Clark"
        />
        <hr className="my-5" />
        <PostItem
          img="https://mdbootstrap.com/img/Photos/Others/forest-sm.jpg"
          date="26/08/2016"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          tag="Lifestyle"
          title="This is title of the news"
          author="Jessica Clark"
        />
        <hr className="my-5" />
        <PostItem
          img="https://mdbootstrap.com/img/Photos/Others/img (35).jpg"
          date="26/08/2016"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          tag="Lifestyle"
          title="This is title of the news"
          author="Jessica Clark"
        />
        <hr className="my-5" />
        <h2 className="font-bold text-center text-3xl mb-7 mt-2">
          Older Posts
        </h2>
        <p className="text-center mb-9 text-sm max-w-sm mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <PostItem
          img="https://mdbootstrap.com/img/Photos/Others/img (39).jpg"
          date="26/08/2016"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          tag="Lifestyle"
          title="This is title of the news"
          author="Jessica Clark"
        />
        <hr className="my-5" />
        <PostItem
          img="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg"
          date="26/08/2016"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          tag="Lifestyle"
          title="This is title of the news"
          author="Jessica Clark"
        />
        <hr className="my-5" />
        <PostItem
          img="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
          date="26/08/2016"
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          tag="Lifestyle"
          title="This is title of the news"
          author="Jessica Clark"
        />
        <hr className="my-5" />
      </div>
    </>
  )
}

export default withTranslation("common")(Home)