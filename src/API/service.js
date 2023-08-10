import axios from "axios";

const errorHandler = (err) => {
  throw err;
};

const uploadImage = (file) => {
  return axios
    .post("http://localhost:5005/api/auth/upload", file)
    .then((res) => res.data)
    .catch(errorHandler);
};

export default uploadImage;
