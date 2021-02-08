import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #D1D5DB;
  height: 62px;

  h1 {
    font-size: 24px;
  }

  nav ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 16px;
  }

  nav li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #894DF4;
    font-weight: bold;
  }

  a:hover {
    border-bottom: 3px solid #EDE9FE;
  }
`;
