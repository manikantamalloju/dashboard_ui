import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import "./App.css";

import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/md-light-indigo/theme.css";

const App = () => {
  return (
    <div className="app">
      <PrimeReactProvider>
        <Header />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<h1>Manage Team</h1>} />
            <Route path="/contacts" element={<h1>Contacts Information</h1>} />
            <Route path="/invoices" element={<h1>Invoices Balances</h1>} />
            <Route path="/bar" element={<h1>Bar Chart</h1>} />
          </Routes>
        </main>
      </PrimeReactProvider>
    </div>
  );
};

export default App;
