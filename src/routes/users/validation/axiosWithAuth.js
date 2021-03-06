import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://tt16-secret-recipes.herokuapp.com/",
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth