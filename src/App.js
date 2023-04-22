import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/login';
import WeaponsPage from './pages/weapons';
import NavbarPage from './pages/navbar';
import ModifyPage from './pages/modify';
import { SearchPage } from './pages/search';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <NavbarPage />}
      {children}
    </>
  );
};



function App() {
  return(
    <>
      <MainLayout>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/weapons" element={<WeaponsPage />} />
            <Route path="/navbar" element={< NavbarPage />} />
            <Route path="/modify" element={<ModifyPage />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
