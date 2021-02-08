import { Story, Meta } from '@storybook/react';
import Input from './Input';
import type { IProps } from './types';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<IProps> = (args: IProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Input label',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: 'Input label',
  iconLeft: '✨',
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Input label',
  iconRight: '🔥',
};

export const BothIcons = Template.bind({});
BothIcons.args = {
  label: 'Input label',
  iconLeft: '✨',
  iconRight: '🔥',
};

export const Error = Template.bind({});
Error.args = {
  label: 'Input label',
  error: 'Error message',
};
