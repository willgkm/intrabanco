import { AxiosPromise } from "axios";
import axios from "axios";


const axiosAuthBB = axios.create();

axiosAuthBB.defaults.baseURL = 'https://oauth.hm.bb.com.br';

axiosAuthBB.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axiosAuthBB.defaults.headers.post["Authorization"] =
  "Basic ";


export default class AuthAPI {
  async getAuthToken(): AxiosPromise<Array<any>> {
    return await axiosAuthBB.post(`/oauth/token`, {
      grant_type: "client-id",
      scope: "cobrancas.boletos-info cobrancas.boletos-requisicao",
    });
  }
}
