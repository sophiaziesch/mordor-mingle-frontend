import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import { Image } from 'cloudinary-react';

const UserProfilePage = () => {
    const { userId } = useParams()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:5005/api/auth/${userId}?populate=eventsCreated`)
                if (response.status === 200) {
                    setUser(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        } 
        fetchUser()
    }, [userId])

    return user ? (
        <div>
            
            <Image cloudName="dw2f2da86" publicId={user.profileImage} height="150" crop="thumb" />

            <h1>Welcome, {user.username}!</h1>
            
            <h3>{user.email}</h3>
            {user.eventsCreated && user.eventsCreated.length > 0 ? (
            <ul>
                {user.eventsCreated.map((event) => (
                    <li key={event._id}>
                        <h4>{event.title}</h4>
                        <p>{event.location}</p>
                        <p>{event.date}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No events created yet.</p>
        )}
            <h3>{user.eventsLiked}</h3>
            <h3>{user.race}</h3>

            <button onClick={() => navigate(`/${userId}/update`)}>Update</button>

        </div>
    ) : (
        <h1>Loading...</h1>
    )
}

export default UserProfilePage;