type Pagamento = {
  codigoIdentificadorPagamento: string;
  valorPagamento: number;
  timestampPagamento: string;
  codigoTipoPessoaPagador: number;
  numeroCpfCadastroNacPessoasJuridicasPagador: number;
  codigoInstituicaoFinanceiraBancoPagador: number;
  nomeIdentificadorSisPgtoBrlPagador: string;
  textoDescricaoPagador: string;
  textoComplementarPagador: string;
  textoInformativoPagador: string;
}

export type RespostaListagemDePagamentos = {
  quantidadePagamento: number;
  listaPagamento: Array<Pagamento>;
}
