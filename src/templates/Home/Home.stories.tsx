import { Story, Meta } from '@storybook/react';
import Home from './Home';

export default {
  title: 'Templates/Home',
  component: Home,
} as Meta;

const Template: Story = () => <Home />;

export const Default = Template.bind({});
Default.args = {};
