import React from 'react';
import logo from './logo.svg';
import HomePage from './containers/HomePage';
import DetailsPage from './containers/DetailsPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <div className="wrapper">
     
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<HomePage></HomePage>} />
        </Routes>
        <Routes>
          <Route path="/productDetails"  element={<DetailsPage></DetailsPage>} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
