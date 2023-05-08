import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import WeaponsPage from './pages/weapons';
import NavbarPage from './pages/navbar';
import CalcPage from './pages/calc';
import { SearchPage } from './pages/search';

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <>
      {<NavbarPage />}
      {children}
    </>
  );
};



function App() {
  return(
    <>
      <MainLayout>
        <Routes>
            <Route path="/" element={<WeaponsPage />} />
            <Route path="/navbar" element={< NavbarPage />} />
            <Route path="/calc" element={<CalcPage />} />
            <Route path="/search" element={<SearchPage />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
