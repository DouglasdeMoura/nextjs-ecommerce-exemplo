import { Story, Meta } from '@storybook/react';
import Produtos from './Produtos';
import type { IProps } from './types';

const produtos = [
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { },
  },
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { },
  },
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { },
  },
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { },
  },
  {
    id: 1,
    nome: 'Produto 1',
    preco: 9.99,
    imagem: 'https://placehold.it/250x170',
    descricao: 'blas kbaskdfb oasbdflkjabsd ',
    acaoComprar: () => { },
  },
];

export default {
  title: 'Components/Produtos',
  component: Produtos,
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Produtos {...args} />;

export const Default = Template.bind({});
Default.args = {
  produtos,
};
