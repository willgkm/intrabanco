import axios from "axios";

const endPointHomologacao = "https://api.hm.bb.com.br/cobrancas/v2";
// const endPointProdução = 'https://api.bb.com.br/cobrancas/v2'

const apiBancoDoBrasil = axios.create();

apiBancoDoBrasil.defaults.baseURL = endPointHomologacao;
apiBancoDoBrasil.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

apiBancoDoBrasil.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["gw-app-key"] = "123";

  return config;
});

export default apiBancoDoBrasil;
