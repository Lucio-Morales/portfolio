import styled from 'styled-components';
import GlobalStyles from './styled-components/GlobalStyles';
import HeaderSection from './components/header';
import MainSection from './components/main';
import NavBar from './components/nav';
import FooterSection from './components/footer';

const Layout = styled.div`
  display: grid;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <HeaderSection />
        <NavBar />
        <MainSection />
        <FooterSection />
      </Layout>
    </>
  );
}

export default App;
