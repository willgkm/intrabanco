import { Juros } from "./cobranca/Juros";

export type RequisicaoAlteraBoleto = {
  numeroConvenio?: number;
  indicadorNovaDataVencimento: string;
  alteracaoData?: AlteracaoData;
  indicadorAtribuirDesconto: string;
  desconto?: Desconto;
  indicadorAlterarDesconto: string;
  alteracaoDesconto?: AlteracaoDesconto;
  indicadorAlterarDataDesconto: string;
  alteracaoDataDesconto?: AlteracaoDataDesconto;
  indicadorProtestar: string;
  protesto?: Protesto;
  indicadorSustacaoProtesto: string;
  indicadorCancelarProtesto: string;
  indicadorIncluirAbatimento: string;
  abatimento?: Abatimento;
  indicadorAlterarAbatimento: string;
  alteracaoAbatimento?: AlteracaoAbatimento;
  indicadorCobrarJuros: string;
  juros?: Juros;
  indicadorDispensarJuros: string;
  indicadorCobrarMulta: string;
  multa?: Multa;
  indicadorDispensarMulta: string;
  indicadorNegativar: string;
  negativacao?: Negativacao;
  indicadorAlterarSeuNumero: string;
  alteracaoSeuNumero?: AlteracaoSeuNumero;
  indicadorAlterarEnderecoPagador: string;
  alteracaoEndereco?: AlteracaoEndereco;
  indicadorAlterarPrazoBoletoVencido: string;
  alteracaoPrazo?: AlteracaoPrazo;
};

type AlteracaoData = {
  novaDataVencimento: string;
};

type Desconto = {
  tipoPrimeiroDesconto: number;
  valorPrimeiroDesconto: number;
  percentualPrimeiroDesconto: number;
  dataPrimeiroDesconto: string;
  tipoSegundoDesconto: number;
  valorSegundoDesconto: number;
  percentualSegundoDesconto: number;
  dataSegundoDesconto: string;
  tipoTerceiroDesconto: number;
  valorTerceiroDesconto: number;
  percentualTerceiroDesconto: number;
  dataTerceiroDesconto: string;
};

type AlteracaoDesconto = {
  tipoPrimeiroDesconto: number;
  novoValorPrimeiroDesconto: number;
  novoPercentualPrimeiroDesconto: number;
  novaDataPrimeiroDesconto: string;
  tipoSegundoDesconto: number;
  novoValorSegundoDesconto: number;
  novoPercentualSegundoDesconto: number;
  novaDataLimiteSegundoDesconto: string;
  tipoTerceiroDesconto: number;
  novoValorTerceiroDesconto: number;
  novoPercentualTerceiroDesconto: number;
  novaDataLimiteTerceiroDesconto: string;
};

type AlteracaoDataDesconto = {
  novaDataLimitePrimeiroDesconto: string;
  novaDataLimiteSegundoDesconto: string;
  novaDataLimiteTerceiroDesconto: string;
};

type Protesto = {
  quantidadeDiasProtesto: number;
};

type Abatimento = {
  valorAbatimento: number;
};

type AlteracaoAbatimento = {
  novoValorAbatimento: number;
};

type Multa = {
  tipoMulta: number;
  valorMulta: number;
  dataInicioMulta: string;
  taxaMulta: number;
};

type Negativacao = {
  quantidadeDiasNegativacao: number;
  tipoNegativacao: number;
};

type AlteracaoSeuNumero = {
  codigoSeuNumero: string;
};

type AlteracaoEndereco = {
  enderecoPagador: string;
  bairroPagador: string;
  cidadePagador: string;
  UFPagador: string;
  CEPPagador: number;
};

type AlteracaoPrazo = {
  quantidadeDiasAceite: string;
};
