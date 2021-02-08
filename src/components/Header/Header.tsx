import Link from 'next/link';
import { HeaderWrapper } from './styled-components';

const Header = () => (
  <HeaderWrapper>
    <h1>E-commerce</h1>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Início</a>
          </Link>
        </li>
        <li>
          <Link href="/adicionar-produtos">
            <a>Adicionar produtos</a>
          </Link>
        </li>
      </ul>
    </nav>
  </HeaderWrapper>
);

export default Header;
