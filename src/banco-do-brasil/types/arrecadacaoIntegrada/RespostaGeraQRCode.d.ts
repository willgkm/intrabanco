export type RespostaGeraQRCode =  {
  timestampCriacaoSolicitacao: string;
  estadoSolicitacao: string;
  codigoConciliacaoSolicitante: string;
  numeroVersaoSolicitacaoPagamento: number;
  linkQrCode: string;
  qrCode: string;
}