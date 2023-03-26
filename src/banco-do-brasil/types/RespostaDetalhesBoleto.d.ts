export type RespostaDetalhesBoleto = {
  codigoLinhaDigitavel: string,
  textoEmailPagador: string,
  textoMensagemBloquetoTitulo: string,
  codigoTipoMulta: number,
  codigoCanalPagamento: number,
  numeroContratoCobranca: number,
  codigoTipoInscricaoSacado: number,
  numeroInscricaoSacadoCobranca: number,
  codigoEstadoTituloCobranca: number,
  codigoTipoTituloCobranca: number,
  codigoModalidadeTitulo: number,
  codigoAceiteTituloCobranca: string,
  codigoPrefixoDependenciaCobrador: number,
  codigoIndicadorEconomico: number,
  numeroTituloCedenteCobranca: string,
  codigoTipoJuroMora: number,
  dataEmissaoTituloCobranca: string,
  dataRegistroTituloCobranca: string,
  dataVencimentoTituloCobranca: string,
  valorOriginalTituloCobranca: number,
  valorAtualTituloCobranca: number,
  valorPagamentoParcialTitulo: number,
  valorAbatimentoTituloCobranca: number,
  percentualImpostoSobreOprFinanceirasTituloCobranca: number,
  valorImpostoSobreOprFinanceirasTituloCobranca: number,
  valorMoedaTituloCobranca: number,
  percentualJuroMoraTitulo: number,
  valorJuroMoraTitulo: number,
  percentualMultaTitulo: number,
  valorMultaTituloCobranca: number,
  quantidadeParcelaTituloCobranca: number,
  dataBaixaAutomaticoTitulo: string,
  textoCampoUtilizacaoCedente: string,
  indicadorCobrancaPartilhadoTitulo: string,
  nomeSacadoCobranca: string,
  textoEnderecoSacadoCobranca: string,
  nomeBairroSacadoCobranca: string,
  nomeMunicipioSacadoCobranca: string,
  siglaUnidadeFederacaoSacadoCobranca: string,
  numeroCepSacadoCobranca: number,
  valorMoedaAbatimentoTitulo: number,
  dataProtestoTituloCobranca: string,
  codigoTipoInscricaoSacador: number,
  numeroInscricaoSacadorAvalista: number,
  nomeSacadorAvalistaTitulo: string,
  percentualDescontoTitulo: number,
  dataDescontoTitulo: string,
  valorDescontoTitulo: number,
  codigoDescontoTitulo: number,
  percentualSegundoDescontoTitulo: number,
  dataSegundoDescontoTitulo: string,
  valorSegundoDescontoTitulo: number,
  codigoSegundoDescontoTitulo: number,
  percentualTerceiroDescontoTitulo: number,
  dataTerceiroDescontoTitulo: string,
  valorTerceiroDescontoTitulo: number,
  codigoTerceiroDescontoTitulo: number,
  dataMultaTitulo: string,
  numeroCarteiraCobranca: number,
  numeroVariacaoCarteiraCobranca: number,
  quantidadeDiaProtesto: number,
  quantidadeDiaPrazoLimiteRecebimento: number,
  dataLimiteRecebimentoTitulo: string,
  indicadorPermissaoRecebimentoParcial: string,
  textoCodigoBarrasTituloCobranca: string,
  codigoOcorrenciaCartorio: number,
  valorImpostoSobreOprFinanceirasRecebidoTitulo: number,
  valorAbatimentoTotal: number,
  valorJuroMoraRecebido: number,
  valorDescontoUtilizado: number,
  valorPagoSacado: number,
  valorCreditoCedente: number,
  codigoTipoLiquidacao: number,
  dataCreditoLiquidacao: string,
  dataRecebimentoTitulo: string,
  codigoPrefixoDependenciaRecebedor: number,
  codigoNaturezaRecebimento: number,
  numeroIdentidadeSacadoTituloCobranca: string,
  codigoResponsavelAtualizacao: string,
  codigoTipoBaixaTitulo: number,
  valorMultaRecebido: number,
  valorReajuste: number,
  valorOutroRecebido: number,
  codigoIndicadorEconomicoUtilizadoInadimplencia: number
}