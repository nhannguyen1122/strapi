import axios from "axios";
import { BASE_URL } from "../../const/env.const";
import { IHttpConfig, IHttpResponse } from "./https.interface";

class HttpService {
  private readonly baseUrl = BASE_URL;
  private readonly httpConfig: IHttpConfig = {
    baseURL: this.baseUrl,
  };

  get<T>(endpoint: string): Promise<IHttpResponse<T>> {
    return axios.get(endpoint, this.httpConfig);
  }

  post<T>(endpoint: string, data: T): Promise<IHttpResponse<T>> {
    return axios.post(endpoint, data, this.httpConfig);
  }
}

// eslint-disable-next-line
export default new HttpService();
