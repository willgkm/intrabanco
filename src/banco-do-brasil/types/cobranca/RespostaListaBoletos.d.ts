export type RespostaListaBoletos = {
  indicadorContinuidade: string;
  quantidadeRegistros: number;
  proximoIndice: number;
  boletos: Array<Boletos>;
};

type Boletos = {
  numeroBoletoBB: string;
  estadoTituloCobranca: string;
  dataRegistro: string;
  dataVencimento: string;
  dataMovimento: string;
  valorOriginal: number;
  valorAtual: number;
  valorPago: number;
  contrato: number;
  carteiraConvenio: number;
  variacaoCarteiraConvenio: number;
  codigoEstadoTituloCobranca: number;
  dataCredito: string;
};
