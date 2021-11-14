import http from "./common/httpService";
import { apiUrl } from "../config.json";

export function getGenres() {
  return http.get(apiUrl + "/genres");
}
