export type QrCode = {
  url: string;
  txId: string;
  emv: string;
};

export type QrCodeComTipo = QrCode & TipoQrCode 

type TipoQrCode = {
  url: number;
};

