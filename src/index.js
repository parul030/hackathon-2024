import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import Dashboard from "../src/components/Dashboard/Dashboard"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import CommandPalette from "./components/Login/CommandPalette";
import SubmitOtp from "./components/Login/SubmitOtp";
import Travel from "./components/Travel/Travel"


export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* <Route path="dashboard" element={<Dashboard />} /> */}
  
        <Route path="/submitotp" element={<SubmitOtp />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="travel" element={<Travel />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/" element={<CommandPalette />} >     
             
        
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
