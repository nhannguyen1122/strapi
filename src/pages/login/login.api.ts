import httpsService from "../../shared/services/https/https.service";

export default function getDetail() {
  return httpsService.get("/api/restaurants");
}
