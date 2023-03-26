import { JurosMora } from "./Juros";

export type RequisicaoRegistroBoleto = {
  numeroConvenio: number;
  numeroCarteira: number;
  numeroVariacaoCarteira: number;
  codigoModalidade: number;
  dataEmissao: string;
  dataVencimento: string;
  valorOriginal: number;
  valorAbatimento: number;
  quantidadeDiasProtesto: number;
  quantidadeDiasNegativacao: number;
  orgaoNegativador: number;
  indicadorAceiteTituloVencido: string;
  numeroDiasLimiteRecebimento: number;
  codigoAceite: string;
  codigoTipoTitulo: number;
  descricaoTipoTitulo: string;
  indicadorPermissaoRecebimentoParcial: string;
  numeroTituloBeneficiario: string;
  campoUtilizacaoBeneficiario: string;
  numeroTituloCliente: string;
  mensagemBloquetoOcorrencia: string;
  desconto: DescontoPrimario;
  segundoDesconto: Desconto;
  terceiroDesconto: Desconto;
  jurosMora: JurosMora;
  multa: Multa;
  pagador: Pagador;
  beneficiarioFinal: BeneficiarioFinal;
  indicadorPix: string;
};

type DescontoPrimario = Desconto & TipoDesconto;

type Desconto = {
  dataExpiracao: string;
  porcentagem: number;
  valor: number;
};

type TipoDesconto = {
  tipo: string;
};

type Multa = {
  tipo: number;
  data: string;
  porcentagem: number;
  valor: number;
};

type Pagador = {
  tipoInscricao: number;
  numeroInscricao: number;
  nome: string;
  endereco: string;
  cep: number;
  cidade: string;
  bairro: string;
  uf: string;
  telefone: string;
};

type BeneficiarioFinal = {
  tipoInscricao: number;
  numeroInscricao: number;
  nome: string;
};
