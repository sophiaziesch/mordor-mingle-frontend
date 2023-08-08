export const fetchUser = async (userId, setter) => {
    try {
      const response = await fetch(`http://localhost:5005/api/auth/${userId}`)
      if (response.status === 200) {
        const parsedUser = await response.json()
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

  
  
