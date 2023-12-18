import { Tag, WorkingGroup } from "@collectiv/db-entities/frontend";
import axios from "axios";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function getGroups(): Promise<Array<WorkingGroup>> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/working-group`,
    withCredentials: true,
  }).then((resp) => {
    return resp.data;
  });
}

export async function getGroup(id: number): Promise<WorkingGroup> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/working-group/${id}`,
    withCredentials: true,
  }).then((resp) => {
    return resp.data;
  });
}

export async function getTags(): Promise<{ data: Tag[] }> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/tag`,
    withCredentials: true,
  }).then((resp) => {
    return resp;
  });
}

export async function createGroup(data: {
  name: string;
  ownerId: number;
  usersId: number[];
  description: string;
  shortDescription: string;
}): Promise<WorkingGroup> {
  const owner = { connect: { id: data.ownerId } };
  const users = { connect: data.usersId.map((id) => ({ id })) };
  users.connect.push({ id: data.ownerId });
  return axios({
    method: "post",
    data: {
      name: data.name,
      description: data.description,
      shortDescription: data.shortDescription,
      owner,
      users,
    },
    url: `${baseApiUrl}/working-group`,
    withCredentials: true,
  }).then((resp) => {
    return resp.data;
  });
}
