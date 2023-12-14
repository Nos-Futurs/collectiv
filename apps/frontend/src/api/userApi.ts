import axios from "axios";
import { CreateUserDto, User } from "@collectiv/db-entities/frontend";

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
    .catch(() => {
      return undefined;
    });
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

export async function signUpUser(data: {
  email: string;
  firstName: string;
  lastName: string;
  region: string;
  description: string;
  password: string;
  structure: string;
}): Promise<void> {
  return axios({
    method: "post",
    url: `${baseApiUrl}/auth/signup`,
    withCredentials: true,
    data: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      region: data.region,
      description: data.description,
      password: data.password,
    },
  }).then((resp) => resp.data);
}

export async function updateUser(dto: {
  filter: { id: number };
  data: Partial<CreateUserDto>;
}): Promise<void> {
  const { filter, data } = dto;
  return axios({
    method: "put",
    url: `${baseApiUrl}/user/${filter.id}`,
    withCredentials: true,
    data,
  }).then((resp) => resp.data);
}

export async function getUser(id: number): Promise<User> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/user/${id}`,
    withCredentials: true,
  }).then((resp) => {
    return resp.data;
  });
}