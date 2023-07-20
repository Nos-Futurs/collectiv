import axios from "axios";
import { User } from "../context/User";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function getGroups(): Promise<Array<any>> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/working-group`,
    withCredentials: true,
  }).then((resp) => {
    return resp.data;
  });
}
