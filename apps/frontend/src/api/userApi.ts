import axios from "axios";
import { User } from "@collectiv/shared-types";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function getMe(): Promise<User | undefined> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/user/me`,
    withCredentials: true,
  })
    .then((resp) => {
      return resp.data;
    })
    .catch(() => undefined);
}

export async function getUsers(): Promise<Array<User>> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/user`,
    withCredentials: true,
  }).then((resp) => {
    return resp.data;
  });
}
