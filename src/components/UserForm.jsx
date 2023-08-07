import { useState, useEffect } from 'react'
import {CloudinaryContext, Image} from 'cloudinary-react';

const UserForm = ({ onSubmit, user }) => {
  const [username, setUsername] = useState(user?.username || '')
  const [email, setEmail] = useState((typeof user !== 'undefined' && user.email) || '')
  /* const [priorXp, setPriorXp] = useState(student?.priorXp.join(' ') || '') */
  const [password, setPassword] = useState('')
  const [selectedRace, setSelectedRace] = useState('')
  const [race, setRace] = useState([])
  const [profileImage, setProfileImage] = useState(user?.profileImage || 'https://res.cloudinary.com/dw2f2da86/image/upload/v1691446459/Screenshot_2023-08-08_at_00.13.58_vuv4vy.png');


  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ username, email, password, race: selectedRace, profileImage })
  }

  const handleImageUpload = async file => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'MordorMingle')

    const response = await fetch(`https://api.cloudinary.com/v1_1/dw2f2da86/image/upload`, {
      method: 'POST',
      body: formData,
    })

    const data = await response.json();
    setProfileImage(data.secure_url);
  }

  useEffect(() => {
    const raceOptions = [
        'Dwarf',
        'Elf',
        'Ent',
        'Hobbit',
        'Human',
        'Orc',
        'Uruk-hai',
        'Wizard',
        'Other'
      ]
      setRace(raceOptions);
  }, []);

  <CloudinaryContext cloudName="dw2f2da86">
  <Image publicId={profileImage} width="150" height="150" crop="thumb" />
</CloudinaryContext>


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/jpeg, image/png"
          onChange={e => handleImageUpload(e.target.files[0])}
        />
        <CloudinaryContext cloudName="dw2f2da86">
          <Image publicId={profileImage} width="150" height="150" crop="thumb" />
        </CloudinaryContext>
        <input
            type='text'
            value={username}
            placeholder='username'
            onChange={e => {
            setUsername(e.target.value)
            }}
        />
        <input
            type='text'
            value={email}
            placeholder='email'
            onChange={e => {
            setEmail(e.target.value)
            }}
        />
        <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
        <select
          value={selectedRace}
          onChange={(e) => setSelectedRace(e.target.value)}
        >
          <option value=''>Select Race</option>
          {race.map((raceOption, index) => {
              return (
                  <option key={index} value={raceOption}>{raceOption}
                  </option>
              )
          })}
        </select>
        <button type='submit'>Update</button>
        </form>
    </div>

    )
}

export default UserForm