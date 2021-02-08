import { FC } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { MainWrapper, Page } from './styled-components';

const Main: FC = ({ children }) => (
  <Page>
    <Header />
    <MainWrapper>
      {children}
    </MainWrapper>
    <Footer />
  </Page>
);

export default Main;
