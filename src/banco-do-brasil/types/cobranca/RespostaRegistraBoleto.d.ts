import { QrCode } from "./QrCode";

export type RespostaRegistraBoleto = {
  numero: string;
  numeroCarteira:  number;
  numeroVariacaoCarteira:  number;
  codigoCliente:  number;
  linhaDigitavel: string;
  codigoBarraNumerico: string;
  numeroContratoCobranca:  number;
  beneficiario: Beneficiario
  qrCode: QrCode
};

type Beneficiario = {
  agencia:  number;
  contaCorrente:  number;
  tipoEndereco:  number;
  logradouro: string;
  bairro: string;
  cidade: string;
  codigoCidade:  number;
  uf: string;
  cep:  number;
  indicadorComprovacao: string;
};

