import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Topbar from './components/layout/Topbar';
import Overview from './pages/Overview';
import RoutesPage from './pages/RoutesPage';
import Backtest from './pages/Backtest';
import Landing from './pages/Landing';

// This wrapper keeps the Sidebar and Topbar ONLY on dashboard pages
function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-[#0b0f19] text-slate-100 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* 1. The Full-Screen Landing Page */}
      <Route path="/" element={<Landing />} />

      {/* 2. The Dashboard Routes (Wrapped in the Sidebar/Topbar Layout) */}
      <Route path="/dashboard" element={<DashboardLayout><Overview /></DashboardLayout>} />
      <Route path="/routes" element={<DashboardLayout><RoutesPage /></DashboardLayout>} />
      <Route path="/backtest" element={<DashboardLayout><Backtest /></DashboardLayout>} />
    </Routes>
  );
}