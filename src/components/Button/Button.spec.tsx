import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button>', () => {
  it('deve renderizar o botão', () => {
    render(<Button>test_button</Button>);
    screen.getByText('test_button');
  });
});
