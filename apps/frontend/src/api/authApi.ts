import axios from "axios";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function signup(
  email: string,
  firstName: string,
  lastName: string,
  password: string
): Promise<void> {
  console.log(`${baseApiUrl}/auth/signup`);
  return axios({
    method: "post",
    url: `${baseApiUrl}/auth/signup`,
    withCredentials: true,
    data: {
      email,
      firstName,
      lastName,
      password,
      description: "first api test",
      region: "manche",
      companyId: 1,
    },
  });
}

export async function login(
  username: string,
  password: string,
): Promise<void> {
  console.log(`${baseApiUrl}/login`);
  return axios({
    method: "post",
    url: `${baseApiUrl}/auth/signup`,
    withCredentials: true,
    data: {
      username,
      password,
    },
  });
}