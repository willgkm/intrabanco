export type RequisicaoGeraQrCode = {
  numeroConvenio: number;
  indicadorCodigoBarras: string;
  codigoGuiaRecebimento: string;
  emailDevedor: string;
  codigoPaisTelefoneDevedor: number;
  dddTelefoneDevedor: number;
  numeroTelefoneDevedor: string;
  codigoSolicitacaoBancoCentralBrasil: string;
  descricaoSolicitacaoPagamento: string;
  valorOriginalSolicitacao: number;
  cpfDevedor: string;
  nomeDevedor: string;
  quantidadeSegundoExpiracao: number;
  listaInformacaoAdicional: Array<InformacaoAdicional>;
}

type InformacaoAdicional ={
  codigoInformacaoAdicional: string;
  textoInformacaoAdicional: string;
}