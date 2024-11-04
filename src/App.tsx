import styled from 'styled-components';
import GlobalStyles from './styled-components/GlobalStyles';
import HeaderSection from './components/header';
import MainSection from './components/main';
import FooterSection from './components/footer';
import useWindowWidth from './hooks/useWindowWidth';
import MobileNavBar from './components/nav';

const Layout = styled.div`
  display: grid;
  min-height: 100vh;
`;

function App() {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  return (
    <>
      <GlobalStyles />
      <Layout>
        <HeaderSection />
        {isMobile ? <MobileNavBar /> : <div>Desktop navbar</div>}
        <MainSection />
        <FooterSection />
      </Layout>
    </>
  );
}

export default App;
