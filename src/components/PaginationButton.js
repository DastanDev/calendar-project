import React from "react"

const PaginationButton = ({ num, isActive }) => {
  return (
    <>
      <div
        className={`p-1 px-3 cursor-pointer duration-200 ${
          isActive ? "bg-black hover:bg-gray-900 text-white" : "text-black"
        }`}
      >
        {num}
      </div>
    </>
  )
}

export default PaginationButton
