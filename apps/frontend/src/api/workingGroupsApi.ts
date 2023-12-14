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

export async function getTags(): Promise<{data: Tag[]}> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/tag`,
    withCredentials: true,
  }).then((resp) => {
    return resp;
  })
}