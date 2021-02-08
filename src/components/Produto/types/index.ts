export interface IProps {
  id: number | string;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
  acaoComprar(): void;
}
