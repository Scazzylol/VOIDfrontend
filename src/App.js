import React from 'react';
import { Provider } from 'react-redux';
import HeaderLayout from './layout/header/HeaderLayout';
import MainLayout from './layout/MainLayout';
import FooterLayout from './layout/FooterLayout';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <HeaderLayout />
        </div>
        <MainLayout />
      </div>
    </Provider>
  );
}

export default App;
