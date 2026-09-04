import React from 'react';
import { Activity, Clock, ShieldCheck } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Pipeline Operational
        </span>
        <span className="text-xs text-slate-400">Target Base Revision: 2024=100</span>
      </div>

      <div className="flex items-center gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-1.5">
          <Clock size={14} className="text-slate-500" />
          <span>Frequency: Daily (T+0)</span>
        </div>
        <div className="h-4 w-px bg-slate-800" />
        <div className="font-mono text-slate-300">MoSPI-PSD-PROD-IND-01</div>
      </div>
    </header>
  );
}