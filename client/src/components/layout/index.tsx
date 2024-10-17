import React from 'react';
import { MainLayout } from './styles';
// import Footer from '../footer';
import Header from '../header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MainLayout>
      <Header />
      {children}
      {/* <Footer /> */}
    </MainLayout>
  );
};

export default Layout;
