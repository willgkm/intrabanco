type RespostaConsultaQRCodeGuiaArrecadacao = {
  codigoGuiaRecebimento: string;
  emailDevedor: string;
  codigoPaisTelefoneDevedor: number;
  dddTelefoneDevedor: number;
  numeroTelefoneDevedor: number;
  timestampCriacaoSolicitacao: string;
  quantidadeSegundoExpiracao: number;
  estadoSolicitacao: string;
  numeroVersaoSolicitacaoPagamento: number;
  linkQrCode: string;
  qrCode: string;
  cpfDevedor: number;
  cnpjDevedor: number;
  nomeDevedor: string;
  valorOriginalSolicitacao: number;
  codigoSolicitacaoBancoCentralBrasil: string;
  descricaoSolicitacaoPagamento: string;
  listaInformacaoAdicional: Array<InformacaoAdicional>
  codigoIdentificadorPagamento: string;
  valorPagamento: number;
  timestampPagamento: string;
  cpfPagador: number;
  cnpjPagador: number;
  nomeClientePagador: string;
  textoInformativoPagador: string;
};

type InformacaoAdicional ={
  codigoInformacaoAdicional: string;
  textoInformacaoAdicional: string;
}

