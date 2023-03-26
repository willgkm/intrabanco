import { AxiosPromise } from "axios";
import apiBancoDoBrasil from "../config/AxiosBancoDoBrasil";
import { AlteraBoleto } from "../types/AlteraBoleto";
import { RequisicaoListaBoleto } from "../types/RequisicaoListaBoletos";
import { RequisicaoRegistroBoleto } from "../types/RequisicaoRegistraBoleto";
import { RespostaDetalhesBoleto } from "../types/RespostaDetalhesBoleto";
import { RespostaListaBoletos } from "../types/RespostaListaBoletos";
import { RespostaRegistraBoleto } from "../types/RespostaRegistraBoleto";

export default class CobrancaApiService {
  async listaBoletos(
    queryParams: RequisicaoListaBoleto
  ): AxiosPromise<Array<RespostaListaBoletos>> {
    return await apiBancoDoBrasil.get(`/boletos`, {
      params: queryParams,
    });
  }

  async registaBoleto(
    queryParams: RequisicaoRegistroBoleto
  ): AxiosPromise<RespostaRegistraBoleto> {
    return await apiBancoDoBrasil.post(`/boletos`, {
      params: queryParams,
    });
  }

  async detalhesBoleto(
    tituloDeCobranca: number,
    numeroConvenio: number
  ): AxiosPromise<RespostaDetalhesBoleto> {
    return await apiBancoDoBrasil.get(`/boletos/${tituloDeCobranca}`, {
      params: { numeroConvenio: numeroConvenio },
    });
  }

  async alteraBoleto(
    tituloDeCobranca: number,
    body: AlteraBoleto
  ): AxiosPromise<AlteraBoleto> {
    return await apiBancoDoBrasil.patch(`/boletos/${tituloDeCobranca}`, {
      params: {},
      data: body,
    });
  }
}
