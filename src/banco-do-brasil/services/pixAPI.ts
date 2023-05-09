import { RequisicaoListaBoleto } from "../types/cobranca/RequisicaoListaBoletos";
import axios, { AxiosPromise, AxiosResponse } from "axios";
import { RespostaListaBoletos } from "../types/cobranca/RespostaListaBoletos";
import apiBancoDoBrasil from "../config/AxiosBancoDoBrasil";

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
  async criarCobrancaImediataComIdentificador(txid: string) {
    return await apiPix.put(`/cob/${txid}`);
  }
  async revisarCobrancaImediata(txid: string) {
    return await apiPix.patch(`/cob/${txid}`);
  }
  async consultarrCobrancaImediata(txid: string) {
    return await apiPix.get(`/cob/${txid}`);
  }
  async criarCobrancaImediataSemIdentificador() {
    return await apiPix.post(`/cob`);
  }
  async consultarListaDeCobracasImediatas() {
    return await apiPix.get(`/cob`);
  }

  //* cobrança com vencimento
  async criarCobrancaComIdentificadorEVencimento(txid: string) {
    return await apiPix.put(`/cobv/${txid}`);
  }
  async revisarCobrancaComVencimento(txid: string) {
    return await apiPix.patch(`/cobv/${txid}`);
  }
  async consultarCobrancaComVencimento(txid: string) {
    return await apiPix.get(`/cobv/${txid}`);
  }
  async listarCobrancasComVencimento() {
    return await apiPix.get(`/cobv`);
  }

  //* PIX
  async consultarPix(e2eid: string) {
    return await apiPix.get(`/pix/${e2eid}`);
  }
  async ConsultarPixRecebidos() {
    return await apiPix.get(`/pix`);
  }
  async solicitarDevolucaoPix(e2eid: string, id: string) {
    return await apiPix.put(`/pix/${e2eid}/devolucao/${id}`);
  }
  async consultarDevolucaoPix(e2eid: string, id: string) {
    return await apiPix.get(`/pix/${e2eid}/devolucao/${id}`);
  }

  //* WebHook 
  async configurarWebhookPix(chave: string) {
    return await apiPix.put(`/webhook/${chave}`);
  }
  async exibirInformacoesWebhookPix(chave: string) {
    return await apiPix.get(`/webhook/${chave}`);
  }
  async cancelarWebhookPix(chave: string) {
    return await apiPix.delete(`/webhook/${chave}`);
  }
  async consultarWebhookPIx() {
    return await apiPix.get(`/webhook/`);
  }

  //* Loc
  async consultarLocationsCadastradas() {
    return await apiPix.get(`/loc`);
  }
  async criarLocationsDoPayload() {
    return await apiPix.post(`/loc`);
  }
  async recuperarLocationDoPayload(id: string) {
    return await apiPix.get(`/loc/${id}`);
  }
  async desvincularCobrancaDeUmaLocation(id: string) {
    return await apiPix.get(`/loc/${id}/txid`);
  }
}
