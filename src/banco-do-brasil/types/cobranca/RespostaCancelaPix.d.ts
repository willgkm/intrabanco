import { ChavePix } from "./Pix";
import { QrCode } from "./QrCode";

export type RespostaGararOuCancelaPix = {
  pix: ChavePix;
  qrCode: QrCode;
};
