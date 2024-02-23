import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Dashboard from "../src/components/Dashboard/Dashboard"
import Investor from './components/Investor';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Borrower from './components/Borrower';
import { CookiesProvider } from "react-cookie";
import CommandPalette from "./components/Login/CommandPalette";
import SubmitOtp from "./components/Login/SubmitOtp";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
        <Route path="investor" element={<Investor />} />
        <Route path="borrower" element={<Borrower />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/login" element={<CommandPalette />} />
        <Route path="/submitotp" element={<SubmitOtp />} />
        <Route path="/" element={<Home />} >
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
