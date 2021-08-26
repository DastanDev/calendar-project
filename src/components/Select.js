import React from "react"

const Select = ({ children }) => {
  return (
    <select className="w-1/3 rounded-md py-4 h-12" name="select" id="">
      {children}
    </select>
  )
}

export default Select
