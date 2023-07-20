import axios from "axios";
import { User } from "../types/User";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function signup(
  email: string,
  firstName: string,
  lastName: string,
  region: string,
  description: string,
  password: string
): Promise<void> {
  return axios({
    method: "post",
    url: `${baseApiUrl}/auth/signup`,
    withCredentials: true,
    data: {
      email,
      firstName,
      lastName,
      password,
      description,
      region,
      companyId: 1,
    },
  }).then((resp) => resp.data);;
}

export async function login(
  username: string,
  password: string,
): Promise<{user: User, accessToken: string}> {
  return axios({
    method: "post",
    url: `${baseApiUrl}/auth/login`,
    withCredentials: true,
    data: {
      email: username,
      password,
    },
  })
}