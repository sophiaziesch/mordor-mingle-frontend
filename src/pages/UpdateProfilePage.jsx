import { useNavigate, useParams } from 'react-router-dom'
import UserForm from '../components/UserForm'
import { useEffect, useState } from 'react'
import { fetchUser, sendUser } from '../utils/usersAPICalls'

const UpdateProfilePage = () => {
  const navigate = useNavigate()
  const { userId } = useParams()
  const [user, setUser] = useState()

  useEffect(() => {
    fetchUser(userId, setUser)
  }, [])

  const handleUpdateUser = async payload => {
    /* const priorXpArray = payload.priorXp.split(' ') */
    const updatedUser = {
      username: payload.username,
      email: payload.email,
      password: payload.password,
      race: payload.race,
      profileImage: payload.profileImage

      /* priorXp: priorXpArray, */
    }
    const response = await sendUser (updatedUser, userId, 'PUT')

    const parsed = await response.json()
    navigate(`/${parsed._id}`)
  }

  return (
    <>
      <h1>Update Profile</h1>
      {user && <UserForm onSubmit={handleUpdateUser} user={user} />}
    </>
  )
}

export default UpdateProfilePage