import React from "react"

const PostItem = ({ title, description, author, tag, date, img }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <img
        className=" shadow-md max-h-60 object-cover rounded-sm hover:opacity-75 duration-200 cursor-pointer "
        src={img}
        alt={title}
      />
      <div className="flex flex-col sm:items-start sm:ml-3">
        <div className=" flex justify-center text-green-600 font-semibold space-x-2 cursor-pointer place-items-center my-2 ">
          <i className="fas fa-heart"></i>
          <p>{tag}</p>
        </div>
        <h2 className="text-center font-semibold text-xl">{title}</h2>
        <p className="text-center mb-4 text-xs mt-2 sm:text-justify">
          {description}
        </p>
        <p className="text-center text-sm">
          By
          <span>
            <a className="text-blue-600 font-bold" href="/">
              {author}
            </a>
            , {date}
          </span>
        </p>
        <button className=" bg-yellow-400 w-max mx-auto mt-2 sm:mx-0 px-5 py-1 text-white shadow-md hover:bg-yellow-500 duration-200 ">
          Read More
        </button>
      </div>
    </div>
  )
}

export default PostItem
