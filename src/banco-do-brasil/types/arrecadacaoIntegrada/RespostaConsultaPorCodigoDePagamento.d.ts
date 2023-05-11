export type RespostaConsultaPorCodigoDePagamento = {
  codigoEstado: number,
  timestamp: string,
  valor: number,
  codigoTipoPessoaRecebedor: number,
  cpfCnpjRecebedor: number,
  codigoSolicitacaoBancoCentralBrasil: string,
  codigoBancoRecebedor: number,
  nomeBancoRecebedor: string,
  codigoTipoPessoaPagador: number,
  cpfCnpjPagador: number,
  codigoBancoPagador: number,
  nomeBancoPagador: string,
  codigoIdentificadorSolicitacaoPagamentoInstantaneo: string,
  codigoConciliacaoRecebedor: string,
  descricaoPagamentoPagador: string,
  descricaoComplementarPagador: string,
  codigoErroPagamento: string,
  textoErro: string
}
