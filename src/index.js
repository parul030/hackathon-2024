import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import  Dashboard from './components/dashboard'
import Investor from './components/Investor';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Borrower from './components/Borrower';
import { CookiesProvider } from "react-cookie";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="investor" element={<Investor />} />
          <Route path="borrower" element={<Borrower />} />
          <Route path="/" element={<Home />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
