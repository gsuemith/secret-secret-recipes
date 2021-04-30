import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://tt16-secret-recipes.herokuapp.com/",
    headers: {
      Authorization: token,
    },
  });
};