import { Pix } from "./Pix";
import { QrCodeComTipo } from "./QrCode";

export type RespostaConsultaPixBoleto = {
  id: string;
  dataRegistroTituloCobranca: string;
  agenciaBeneficiario: number;
  contaBeneficiario: number;
  valorOriginalTituloCobranca: number;
  validadeTituloCobranca: string;
  pix: Pix
  qrCode: QrCodeComTipo
};
