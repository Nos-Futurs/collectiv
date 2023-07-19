import axios from "axios";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function getMe(): Promise<void> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/user/me`,
    withCredentials: true,
  }).then((resp) => resp.data);;
}
