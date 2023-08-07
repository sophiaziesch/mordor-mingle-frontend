import { useState, useEffect } from 'react'

const UserForm = ({ onSubmit, user }) => {
  const [username, setUsername] = useState(user?.username || '')
  const [email, setEmail] = useState((typeof user !== 'undefined' && user.email) || '')
  /* const [priorXp, setPriorXp] = useState(student?.priorXp.join(' ') || '') */
  const [password, setPassword] = useState('')
  const [selectedRace, setSelectedRace] = useState('')
  const [race, setRace] = useState([])
  const [profileImage, setProfileImage] = useState(user?.profileImage || '')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ username, email, password, race: selectedRace, profileImage })
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


  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={user?.profileImage || ''}
            placeholder="Profile Image URL"
            onChange={(e) =>
            setProfileImage(e.target.value)}
            />
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