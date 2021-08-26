import React from "react"
import dayjs from "dayjs"
import rt from "dayjs/plugin/relativeTime"
dayjs.extend(rt)

const OlderPostItem = ({
  img,
  title,
  description,
  author,
  date,
  tag,
  className,
}) => {
  return (
    <div className={`flex flex-col my-10 space-y-2 ${className}`}>
      <img
        className=" shadow-md max-h-60 object-cover rounded-sm hover:opacity-75 duration-200 cursor-pointer "
        src={img}
        alt={title}
      />
      <div className="flex flex-col place-items-center space-y-4 sm:ml-3">
        <div className=" flex justify-center mt-5 text-green-600 font-semibold space-x-2 cursor-pointer place-items-center">
          <i className="fas fa-heart"></i>
          <p>{tag}</p>
        </div>
        <h2 className="text-center font-semibold text-xl">{title}</h2>
        <p className="text-center mb-4 text-sm font-extralight text-gray-500 mt-2 sm:text-justify">
          {description}
        </p>
        <p className="text-center text-sm">
          By
          <span>
            {" "}
            <a
              className="text-blue-600 font-bold hover:text-blue-800 duration-200 transition-colors"
              href="/"
            >
              {author}
            </a>
            , {dayjs(date).fromNow(true)} ago
          </span>
        </p>
        <button className="bg-yellow-primary w-max mx-auto mt-2 rounded-sm sm:mx-0 px-7 py-3 text-sm text-white shadow-md hover:shadow-xl duration-200">
          Read More
        </button>
      </div>
    </div>
  )
}

export default OlderPostItem
