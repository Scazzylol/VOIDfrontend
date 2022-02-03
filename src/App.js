import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import HeaderLayout from './layout/header/HeaderLayout';
import MainLayout from './layout/MainLayout';
import Particles from './components/Particles'
import { store } from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Particles />
          <div className="App-header">
            <HeaderLayout />
          </div>
          <MainLayout />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
