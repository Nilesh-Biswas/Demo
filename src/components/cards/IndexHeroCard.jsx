import React from 'react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

export default function IndexHeroCard({ data }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/40 border border-slate-800 relative overflow-hidden">
      <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
        National Headline Airfare Price Index (APIx)
      </div>
      <div className="flex items-baseline gap-4">
        <span className="text-5xl font-black tracking-tight text-white font-mono">
          {data?.nationalApiX ?? '104.12'}
        </span>
        <span className="flex items-center text-emerald-400 text-sm font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          <ArrowUpRight size={16} />
          +{data?.dailyChangePct ?? '0.42'}% 24h
        </span>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span>Base Period Reference: <strong className="text-slate-200">2024 = 100</strong></span>
       <span>Aggregation: <strong className="text-slate-200">DGCA Scheduled Shares (W<sub>r</sub>)</strong></span>
      </div>
    </div>
  );
}