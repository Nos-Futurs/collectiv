import axios from "axios";
import { PendingUser } from "@collectiv/shared-types";

const baseApiUrl = import.meta.env.VITE_BASE_API_URL;

export async function getPendingUsers(): Promise<Array<PendingUser>> {
  return axios({
    method: "get",
    url: `${baseApiUrl}/pending-users`,
    withCredentials: true,
  }).then((resp) => {
    return resp.data;
  });
}
