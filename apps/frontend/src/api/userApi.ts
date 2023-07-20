import axios from "axios";
import { User } from "../types/User";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function getMe(): Promise<{user: User, accessToken: string}> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/user/me`,
    withCredentials: true,
  })
    .then((resp) => {
      console.log(resp.data)
      return resp.data;
    })
    .catch((err) => {
      console.log(err);
      return undefined;
    });
}
