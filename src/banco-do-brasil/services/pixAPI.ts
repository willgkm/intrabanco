import axios, { AxiosPromise } from "axios";

const homUrl = "https://api-pix.hm.bb.com.br/pix/v2";
// const prodUrl:string =  "https://api-pix.bb.com.br/pix/v2";

const apiPix = axios.create();

apiPix.defaults.baseURL = homUrl;
apiPix.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

apiPix.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["gw-app-key"] = "123";

  return config;
});

export default class pixAPI {
  //! versão 2.3.0

  //* cobrança
  async criarCobrancaImediataComIdentificador(txid: string): AxiosPromise<any> {
    return await apiPix.put(`/cob/${txid}`);
  }
  async revisarCobrancaImediata(txid: string): AxiosPromise<any> {
    return await apiPix.patch(`/cob/${txid}`);
  }
  async consultarrCobrancaImediata(txid: string): AxiosPromise<any> {
    return await apiPix.get(`/cob/${txid}`);
  }
  async criarCobrancaImediataSemIdentificador(): AxiosPromise<any> {
    return await apiPix.post(`/cob`);
  }
  async consultarListaDeCobracasImediatas(): AxiosPromise<any> {
    return await apiPix.get(`/cob`);
  }

  //* cobrança com vencimento
  async criarCobrancaComIdentificadorEVencimento(
    txid: string
  ): AxiosPromise<any> {
    return await apiPix.put(`/cobv/${txid}`);
  }
  async revisarCobrancaComVencimento(txid: string): AxiosPromise<any> {
    return await apiPix.patch(`/cobv/${txid}`);
  }
  async consultarCobrancaComVencimento(txid: string): AxiosPromise<any> {
    return await apiPix.get(`/cobv/${txid}`);
  }
  async listarCobrancasComVencimento(): AxiosPromise<any> {
    return await apiPix.get(`/cobv`);
  }

  //* PIX
  async consultarPix(e2eid: string): AxiosPromise<any> {
    return await apiPix.get(`/pix/${e2eid}`);
  }
  async ConsultarPixRecebidos(): AxiosPromise<any> {
    return await apiPix.get(`/pix`);
  }
  async solicitarDevolucaoPix(e2eid: string, id: string): AxiosPromise<any> {
    return await apiPix.put(`/pix/${e2eid}/devolucao/${id}`);
  }
  async consultarDevolucaoPix(e2eid: string, id: string): AxiosPromise<any> {
    return await apiPix.get(`/pix/${e2eid}/devolucao/${id}`);
  }

  //* WebHook
  async configurarWebhookPix(chave: string): AxiosPromise<any> {
    return await apiPix.put(`/webhook/${chave}`);
  }
  async exibirInformacoesWebhookPix(chave: string): AxiosPromise<any> {
    return await apiPix.get(`/webhook/${chave}`);
  }
  async cancelarWebhookPix(chave: string): AxiosPromise<any> {
    return await apiPix.delete(`/webhook/${chave}`);
  }
  async consultarWebhookPIx(): AxiosPromise<any> {
    return await apiPix.get(`/webhook/`);
  }

  //* Loc
  async consultarLocationsCadastradas(): AxiosPromise<any> {
    return await apiPix.get(`/loc`);
  }
  async criarLocationsDoPayload(): AxiosPromise<any> {
    return await apiPix.post(`/loc`);
  }
  async recuperarLocationDoPayload(id: string): AxiosPromise<any> {
    return await apiPix.get(`/loc/${id}`);
  }
  async desvincularCobrancaDeUmaLocation(id: string): AxiosPromise<any> {
    return await apiPix.get(`/loc/${id}/txid`);
  }
}
