import { FC } from 'react';
import Button from '../Button/Button';
import { ProdutoContainer } from './styled-components';
import { IProps } from './types';

const Produto: FC<IProps> = ({
  id, nome, preco, imagem, descricao, acaoComprar,
}) => (
  <ProdutoContainer>
    <figure>
      <img src={imagem} alt={nome} />
    </figure>
    <div className="product-data">
      <h2>{nome}</h2>
      <p className="price">{preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p className="description">{descricao}</p>
      <div className="actions">
        <Button data-product-id={id} onClick={acaoComprar}>Comprar</Button>
      </div>
    </div>
  </ProdutoContainer>
);

export default Produto;
