import { Story, Meta } from '@storybook/react';
import AdicionarProduto from './AdicionarProduto';

export default {
  title: 'Templates/AdicionarProduto',
  component: AdicionarProduto,
} as Meta;

const Template: Story = () => <AdicionarProduto />;

export const Default = Template.bind({});
Default.args = {};
