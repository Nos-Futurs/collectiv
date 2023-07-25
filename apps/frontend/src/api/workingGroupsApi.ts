import { WorkingGroup } from "@collectiv/shared-types";
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
