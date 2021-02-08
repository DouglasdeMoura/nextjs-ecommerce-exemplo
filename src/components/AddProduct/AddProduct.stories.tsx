import { Story, Meta } from '@storybook/react';
import AddProduct from './AddProduct';
import type { IProps } from './types';

export default {
  title: 'Form/AddProduct',
  component: AddProduct,
} as Meta;

const Template: Story<IProps> = (args: IProps) => <AddProduct {...args} />;

export const Default = Template.bind({});
