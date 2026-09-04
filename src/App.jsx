import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Overview from './pages/Overview';
import RoutesPage from './pages/RoutesPage';
import Backtest from './pages/Backtest';

export default function App() {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/routes" element={<RoutesPage />} />
              <Route path="/backtest" element={<Backtest />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}