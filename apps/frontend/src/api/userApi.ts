import axios from "axios";
import { User } from "../context/User";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function getMe(): Promise<User> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/user/me`,
    withCredentials: true,
  }).then((resp) => resp.data);;
}
