import React, { useEffect, useState } from "react"

export const UserContext = React.createContext({
  user: { email: "", token: "" },
  logout: undefined,
  login: undefined,
})

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const userDataFromLocalStorage = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : { email: "", password: "" }

    setUser(userDataFromLocalStorage)
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <UserContext.Provider
      value={{
        login: (email, token) => {
          localStorage.setItem("userData", JSON.stringify({ email, token }))
          setUser({ email, token })
        },
        logout: () => {
          setUser({ email: "", password: "" })
          localStorage.removeItem("userData")
        },
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
