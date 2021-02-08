import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;

  footer {
    align-self: flex-end;
  }
`;

export const MainWrapper = styled.main`
  margin: 32px auto;
  max-width: 960px;
`;
