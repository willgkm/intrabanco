import { AxiosPromise } from "axios";
import apiBancoDoBrasil from "../config/AxiosBancoDoBrasil";
import { RequisicaoAlteraBoleto } from "../types/cobranca/RequisicaoAlteraBoleto";
import { RequisicaoListaBoleto } from "../types/cobranca/RequisicaoListaBoletos";
import { RequisicaoRegistroBoleto } from "../types/cobranca/RequisicaoRegistraBoleto";
import { RespostaAlteraBoleto } from "../types/cobranca/RespostaAlteraBoleto";
import { RespostaBaixaBoleto } from "../types/cobranca/RespostaBaixaBoleto";
import { RespostaGararOuCancelaPix } from "../types/cobranca/RespostaCancelaPix";
import { RespostaConsultaPixBoleto } from "../types/cobranca/RespostaConsultaPixBoleto";
import { RespostaDetalhesBoleto } from "../types/cobranca/RespostaDetalhesBoleto";
import { RespostaListaBoletos } from "../types/cobranca/RespostaListaBoletos";
import { RespostaRegistraBoleto } from "../types/cobranca/RespostaRegistraBoleto";

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
    tituloDeCobranca: string,
    numeroConvenio: number
  ): AxiosPromise<RespostaDetalhesBoleto> {
    return await apiBancoDoBrasil.get(`/boletos/${tituloDeCobranca}`, {
      params: { numeroConvenio: numeroConvenio },
    });
  }

  async alteraBoleto(
    tituloDeCobranca: string,
    body: RequisicaoAlteraBoleto
  ): AxiosPromise<RespostaAlteraBoleto> {
    return await apiBancoDoBrasil.patch(`/boletos/${tituloDeCobranca}`, {
      data: body,
    });
  }

  /**
   *! Lembrete importante
   * numeroBoleto = Número do boleto bancário (único e exclusivo) que identifica o título e é usado para pagá-lo.
   */
  async baixarBoleto(
    numeroBoleto: string,
    numeroConvenio: number
  ): AxiosPromise<RespostaBaixaBoleto> {
    return await apiBancoDoBrasil.post(`/boletos/${numeroBoleto}/baixar`, {
      data: { numeroConvenio: numeroConvenio },
    });
  }

  /**
   *! Lembrete importante - vale para os metodos cancelaPixBoleto, gerarPixBoleto, consultaPixBoleto
   * numeroBoleto = Número de identificação do boleto (correspondente ao NOSSO NÚMERO,
   * numeroTituloCliente), no formato STRING, com 20 dígitos, que deverá ser formatado
   * da seguinte forma: “000” + (número do convênio com 7 dígitos) +
   * (10 algarismos - se necessário, completar com zeros à esquerda). Campo Obrigatório..
   */
  async cancelaPixBoleto(
    numeroBoleto: string,
    numeroConvenio: number
  ): AxiosPromise<RespostaGararOuCancelaPix> {
    return await apiBancoDoBrasil.post(
      `/boletos/${numeroBoleto}/cancelar-pix`,
      {
        data: { numeroConvenio: numeroConvenio },
      }
    );
  }

  async gerarPixBoleto(
    numeroBoleto: string,
    numeroConvenio: number
  ): AxiosPromise<RespostaGararOuCancelaPix> {
    return await apiBancoDoBrasil.post(`/boletos/${numeroBoleto}/gerar-pix`, {
      data: { numeroConvenio: numeroConvenio },
    });
  }

  async consultaPixBoleto(
    numeroBoleto: string,
    numeroConvenio: number
  ): AxiosPromise<RespostaConsultaPixBoleto> {
    return await apiBancoDoBrasil.get(`/boletos/${numeroBoleto}/pix`, {
      params: { numeroConvenio: numeroConvenio },
    });
  }
}
