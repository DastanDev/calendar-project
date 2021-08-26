import React from "react"

const Input = ({ onChange, type, value, placeholder }) => {
  return (
    <input
      class="px-5 py-4 rounded-md outline-none"
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      value={value}
      type={type}
    />
  )
}

export default Input
