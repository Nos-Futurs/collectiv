import { User } from "@collectiv/db-entities/frontend";
import axios from "axios";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function login(data: {
  username: string;
  password: string;
}): Promise<{ user: User; accessToken: string }> {
  return axios({
    method: "post",
    url: `${baseApiUrl}/auth/login`,
    withCredentials: true,
    data: {
      ...data,
      email: data.username,
    },
  });
}
