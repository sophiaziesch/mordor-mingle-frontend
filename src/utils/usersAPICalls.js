import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";


export const fetchUser = async (userId, setter) => {
  const tokenStored = localStorage.getItem("authToken");
  try {
    const response = await fetch(`http://localhost:5005/api/auth/${userId}`, {
      method: 'GET',
      headers: { "authorization": `Bearer ${tokenStored}`, 'Content-Type': 'application/json' },
  })
    if (response.status === 200) {
      const parsedUser = await response.json()
      console.log("parsed user", parsedUser)
      setter(parsedUser)
    }
  } catch (error) {
    console.error(error)
  }
}

export const sendUser = async (user, userId = '', method = 'POST') => {
  return fetch(`http://localhost:5005/api/auth/${userId}`, {
      method,
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
  })
}

