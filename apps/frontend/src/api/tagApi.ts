import { Tag } from "@collectiv/db-entities/frontend";
import axios from "axios";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function getTags(): Promise<Array<Tag>> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/tag`,
    withCredentials: true,
  }).then((resp) => {
    return resp.data;
  })
}
