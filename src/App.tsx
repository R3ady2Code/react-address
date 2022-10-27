import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Wrapper from './component/Logic/Wrapper';
import HomePage from './component/Pages/HomePage';
import AddressPage from './component/Pages/AddressPage';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/address" element={<AddressPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
