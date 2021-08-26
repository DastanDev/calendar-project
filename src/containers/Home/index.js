import React, { useEffect, useState } from "react"
import "./styles.css"
import { withTranslation } from "react-i18next"
import PostItem from "../../components/PostItem"
import axios from "axios"
import { baseUrl } from "../../baseUrl"
import PaginationButton from "../../components/PaginationButton"
import OlderPostItem from "../../components/older posts/OlderPostItem"

const Home = () => {
  const [news, setNews] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    const getNewsFromBackend = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: `${baseUrl}/news/get`,
        })
        setNews(data)
      } catch (error) {
        setError(error.message)
      }
    }
    getNewsFromBackend()
  }, [])
  return (
    <>
      <div className="relative bg-primary h-96 p-5 text-white">
        <div className="z-10 absolute flex flex-col left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-32 text-4xl sm:text-5xl font-normal text-center ">
          <h2>BANCO DE DESARROLLO PRODUCTIVO</h2>
          <hr className="text-white mt-5 border-b-2 w-20 mx-auto" />
          <h2 className="text-xl mt-2 font-semibold tracking-widest">
            SUBTITLE
          </h2>
          <div className="flex space-x-3 mt-5 mx-auto">
            <button className=" text-lg ring-1 ring-white px-5 py-1 rounded-sm hover:shadow-md transition-all  duration-200 ">
              Register
            </button>
            <button className=" text-lg ring-1 ring-white px-5 py-1 rounded-sm hover:shadow-md transition-all duration-200 ">
              About us
            </button>
          </div>
        </div>
        <img
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full object-cover z-0 h-96"
          src="https://mocah.org/uploads/posts/5413445-path-tree-trail-palm-green-nature-garden-tropical-greenery-outdoor-outside-road-palm-tree-walk-wandering-journey-florida-tampa-sand-shell-free-pictures.jpg"
          alt="header"
        />
      </div>

      <div className="flex flex-col w-full p-5 max-w-5xl mx-auto">
        <h2 className=" text-center text-4xl mb-7 mt-2 font-semibold">
          Recent Posts
        </h2>
        <p className="text-center mb-9 text-sm max-w-lg mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="text-red-500 text-xs">{error}</div>
        {news?.map((post, _idx) => {
          return (
            <React.Fragment key={post.id}>
              <PostItem
                img={post.image}
                date={Date.now()}
                description={post.description}
                tag={post.tag}
                title={post.title}
                author="john doe"
              />
              {news.length - 1 === _idx ? null : <hr className="my-5" />}
            </React.Fragment>
          )
        })}
        {/* pagination */}
        <div className="flex justify-center place-items-center space-x-3 text-sm">
          <i className="fas fa-angle-double-left"></i>
          <PaginationButton isActive={true} num={1} />
          <PaginationButton isActive={false} num={2} />
          <PaginationButton isActive={false} num={3} />
          <PaginationButton isActive={false} num={4} />
          <PaginationButton isActive={false} num={5} />
          <i className="fas fa-angle-double-right"></i>
        </div>
        <hr className="my-5" />
        <h2 className=" text-center text-4xl mb-7 mt-2 font-semibold">
          Older Posts
        </h2>
        <p className="text-center mb-9 text-sm max-w-lg mx-auto">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <div className="grid grid-cols-12 gap-5">
          <OlderPostItem
            className="col-span-12 md:col-span-4"
            img="https://mdbootstrap.com/img/Photos/Others/img (39).jpg"
            date="26/08/2016"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            tag="Lifestyle"
            title="This is title of the news"
            author="Jessica Clark"
          />
          <OlderPostItem
            className="col-span-12 sm:col-span-6 md:col-span-4"
            img="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg"
            date="26/08/2016"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            tag="Lifestyle"
            title="This is title of the news"
            author="Jessica Clark"
          />
          <OlderPostItem
            className="col-span-12 sm:col-span-6 md:col-span-4"
            img="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
            date="26/08/2016"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            tag="Lifestyle"
            title="This is title of the news"
            author="Jessica Clark"
          />
        </div>
      </div>
    </>
  )
}

export default withTranslation("common")(Home)
