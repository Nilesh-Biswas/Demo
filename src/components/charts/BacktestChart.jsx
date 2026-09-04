import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

export default function BacktestChart({ data }) {
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-slate-100">AeroIndex vs DGCA Benchmark Backtest (6-Month Calibration)</h3>
        <p className="text-xs text-slate-400">Validating scraped synthetic Laspeyres index against historical civil aviation reported fares</p>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="month" stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} domain={[95, 110]} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', fontSize: '12px' }} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="apixSynthetic" name="APIx Synthetic" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="dgcaBenchmark" name="DGCA Official Benchmark" fill="#64748b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}