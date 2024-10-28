import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
  color: #ffffff;
  text-align: center;
  padding: 20px;

  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  p {
    margin: 15px 0;
    line-height: 1.6;
    font-size: 1.2rem;
  }
`;

export default Header;
