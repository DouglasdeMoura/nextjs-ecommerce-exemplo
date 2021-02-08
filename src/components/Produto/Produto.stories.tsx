import { Story, Meta } from '@storybook/react';
import Produto from './Produto';
import type { IProps } from './types';

export default {
  title: 'Components/Produto',
  component: Produto,
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Produto {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  nome: 'Produto 1',
  descricao: 'Lorem pasdfj pasjidbfpasjdb asdfg',
  imagem: 'https://placehold.it/250x170',
  preco: 9.99,
  acaoComprar: () => { },
};
