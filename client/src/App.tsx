import { Outlet } from 'react-router-dom';
import Layout from './components/layout';
import GlobalStyle from './styles/styled-components/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
