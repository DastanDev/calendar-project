import React from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
dayjs.extend(relativeTime)

const PostItem = ({ title, description, author, tag, date, img }) => {
  return (
    <div className="flex flex-col sm:flex-row my-10 space-y-2">
      <img
        className="shadow-md max-h-60 object-cover rounded-sm hover:opacity-75 duration-200 cursor-pointer "
        src={img}
        alt={title}
      />
      <div className="flex flex-col space-y-4 sm:space-y-0 sm:items-start place-items-start sm:ml-7 justify-between">
        <div className="flex text-green-600 font-semibold space-x-2 cursor-pointer place-items-center">
          <i className="fas fa-heart"></i>
          <p>{tag}</p>
        </div>
        <h2 className="text-center font-semibold text-2xl capitalize">
          {title}
        </h2>
        <p className="text-center font-extralight text-gray-500 sm:text-justify">
          {description}
        </p>
        <p className="text-center text-gray-500">
          By
          <span>
            {" "}
            <a
              className="text-blue-500 font-bold hover:text-blue-800 duration-200 transition-colors"
              href="/"
            >
              {author}
            </a>
            , {dayjs(date).fromNow(true)} ago
          </span>
        </p>
        <button className="bg-secondary w-max mx-auto mt-2 rounded-sm sm:mx-0 px-7 py-3 text-sm text-white shadow-md hover:shadow-xl duration-200 ">
          Read More
        </button>
      </div>
    </div>
  )
}

export default PostItem
