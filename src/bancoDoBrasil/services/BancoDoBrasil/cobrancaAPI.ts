import { AxiosPromise } from "axios";
import apiBancoDoBrasil from "../../config/AxiosBancoDoBrasil";
import { AlteraBoleto } from "../../types/AlteraBoleto";

export default class CobrancaAPI {


  
  async alteraBoleto(
    params: any,
    alteraBoleto: AlteraBoleto
  ): AxiosPromise<AlteraBoleto> {
    return await apiBancoDoBrasil.patch(`/boletos/${params.id}`, {
      params: {},
      data: alteraBoleto,
    });
  }
}
