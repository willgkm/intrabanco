export type RespostaAlterarQRcode = {
  numeroConvenio: number;
  indicadorCodigoBarras: 'S' | 'N';
  codigoGuiaRecebimento: string;
  emailDevedor: string;
  codigoPaisTelefoneDevedor: number;
  dddTelefoneDevedor: number;
  numeroTelefoneDevedor: string;
  codigoSolicitacaoBancoCentralBrasil: string;
  descricaoSolicitacaoPagamento: string;
  valorOriginalSolicitacao: number;
  cpfDevedor: string;
  cnpjDevedor: string;
  nomeDevedor: string;
  quantidadeSegundoExpiracao: number;
  listaInformacaoAdicional: Array<InformacaoAdicional>
};

type InformacaoAdicional ={
  codigoInformacaoAdicional: string;
  textoInformacaoAdicional: string;
}