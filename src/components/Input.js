import React from "react"

const Input = ({ onChange, type, value, placeholder }) => {
  return (
    <input
      className="px-5 w-full py-4 rounded-md outline-none"
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      value={value}
      type={type}
    />
  )
}

export default Input
