import { useState, useEffect } from "react";
/* import { CloudinaryContext, Image } from "cloudinary-react"; */
import uploadImage from "../api/service"

const UserForm = ({ onSubmit, user }) => {
  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(
    (typeof user !== "undefined" && user.email) || "");
  const [selectedRace, setSelectedRace] = useState("");
  const [race, setRace] = useState([]);
  const [profileImage, setProfileImage] = useState(""); 


  const handleImageUpload = (e) => {

    console.log("image upload", e)
    const file = e.target.files[0];
  console.log("file", file)
    if (file) {
      const formData = new FormData();
      formData.append("profileImage", file);
  
        uploadImage(formData)
        .then((response) => {
          setProfileImage(response.fileUrl);
        })
        .catch((err) => console.log("Error while uploading the file: ", err));
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ username, email, race: selectedRace, profileImage });
    
    
      uploadImage({ profileImage })
      .then(res => {
 
        // Reset the form
      
        setProfileImage("");
      
        // navigate to another page
        navigate("/");
      })
      .catch(err => console.log("Error while adding the new profile image: ", err));

  }


  useEffect(() => {
    const raceOptions = [
      "Dwarf",
      "Elf",
      "Ent",
      "Hobbit",
      "Human",
      "Orc",
      "Uruk-hai",
      "Wizard",
      "Other",
    ];
    setRace(raceOptions);
  }, []);
  {/* 
  <CloudinaryContext cloudName="dw2f2da86">
    <Image publicId={profileImage} width="150" crop="thumb" />
  </CloudinaryContext>;
  */}
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="image/jpeg, image/png"
          onChange={(e) => handleImageUpload(e)}
        />
        {/*<CloudinaryContext
          cloudName={import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}
        >
          <Image publicId={profileImage} height="150" crop="thumb" />
  </CloudinaryContext> */}
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <select
          value={selectedRace}
          onChange={(e) => setSelectedRace(e.target.value)}
        >
          <option value="">Select Race</option>
          {race.map((raceOption, index) => {
            return (
              <option key={index} value={raceOption}>
                {raceOption}
              </option>
            );
          })}
        </select>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default UserForm;
