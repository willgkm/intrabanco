import axios, { Axios, AxiosPromise } from "axios";
import { RequisicaoGeraQrCode } from "../types/arrecadacaoIntegrada/RequisicaoGeraQRCode";
import { RespostaGeraQRCode } from "../types/arrecadacaoIntegrada/RespostaGeraQRCode";
import { RespostaAlterarQRcode } from "../types/arrecadacaoIntegrada/RespostaAlterarQRcode";
import {
  RespostaConsultaQRCodeGuiaRecebimento,
} from "../types/arrecadacaoIntegrada/RespostaConsultaQRCodeGuiaRecebimento";
import { RequisicaoBaixaEmQRCode } from "../types/arrecadacaoIntegrada/RequisicaoBaixaEmQRCode";
import { RespostaBaixaEmQRCode } from "../types/arrecadacaoIntegrada/RespostaBaixaEmQRCode";
import { RespostaConsultaPorCodigoDePagamento } from "../types/arrecadacaoIntegrada/RespostaConsultaPorCodigoDePagamento";
import { RespostaListagemDePagamentos } from "../types/arrecadacaoIntegrada/ResponseListagemDePagamentos";

const homUrl = "https://api-pix.hm.bb.com.br/pix/v2";
// const prodUrl:string =  "https://api-pix.bb.com.br/pix/v2";

const ArrIntPixApi = axios.create();

ArrIntPixApi.defaults.baseURL = homUrl;
ArrIntPixApi.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

ArrIntPixApi.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["gw-app-key"] = "123";

  return config;
});

export default class ArrecadacaoIntegradaPix {
  //* QrCode
  async gerarQRCodeParaGuiaDeArrecadacao(
    body: RequisicaoGeraQrCode
  ): AxiosPromise<RespostaGeraQRCode> {
    return await ArrIntPixApi.post(`/arrecadacao-qrcodes`, {
      data: body,
    });
  }
  async consultarQRCodePorGuiaDeRecebimento(
    numeroConvenio: number,
    codigoGuiaRecebimento: string
  ): AxiosPromise<RespostaConsultaQRCodeGuiaRecebimento> {
    return await ArrIntPixApi.get(`/arrecadacao-qrcodes`, {
      params: {
        numeroConvenio: numeroConvenio,
        codigoGuiaRecebimento: codigoGuiaRecebimento,
      },
    });
  }
  async alterarQRCodeDeGuiaDeArrecadacao(
    id: string
  ): AxiosPromise<RespostaAlterarQRcode> {
    return await ArrIntPixApi.put(`/arrecadacao-qrcodes/${id}`);
  }
  async consultarQRCodeDeGuiaDeArrecadacao(
    id: string
  ): AxiosPromise<RespostaConsultaQRCodeGuiaArrecadacao> {
    return await ArrIntPixApi.post(`/arrecadacao-qrcodes/${id}`);
  }

  async darBaixaEmQRCodeDeGuiaDeArrecadacao(
    body: RequisicaoBaixaEmQRCode,
    id: string
  ): AxiosPromise<RespostaBaixaEmQRCode> {
    return await ArrIntPixApi.post(`/arrecadacao-qrcodes/${id}/baixar`, {
      data: body,
    });
  }
  async consultarPagamentoPorCodigoDePagamento(
    id: string
  ): AxiosPromise<RespostaConsultaPorCodigoDePagamento> {
    return await ArrIntPixApi.post(`/arrecadacao-qrcodes/pagamentos/${id}`);
  }

  //* Codigo Barras
  async listarPagamentosPorCodigoDeBarra(
    id: string
  ): AxiosPromise<RespostaListagemDePagamentos> {
    return await ArrIntPixApi.post(`/arrecadacao-qrcodes/pagamentos/${id}`);
  }
  
  //* idTransacao
  async listarPagamentosPorIdDaTransacao(
    id: string
  ): AxiosPromise<RespostaListagemDePagamentos> {
    return await ArrIntPixApi.post(`/arrecadacao-qrcodes/pagamentos/${id}`);
  }
}
