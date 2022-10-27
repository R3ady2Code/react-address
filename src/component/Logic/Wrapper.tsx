import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

type WrapperProps = {
  children: React.ReactElement;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="App">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default Wrapper;
