import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function TrendChart({ data }) {
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-slate-100">National APIx Trajectory vs Jevons Micro Index</h3>
        <p className="text-xs text-slate-400">High-frequency daily aggregates comparing macro-weighted vs unweighted geometric indices</p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} domain={['dataMin - 1', 'dataMax + 1']} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', fontSize: '12px' }} />
            <Line type="monotone" dataKey="indexValue" name="APIx National" stroke="#3b82f6" strokeWidth={2.5} dot={false} />
            <Line type="monotone" dataKey="jevonsMicro" name="Jevons Micro Mean" stroke="#10b981" strokeWidth={1.5} strokeDasharray="4 4" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}