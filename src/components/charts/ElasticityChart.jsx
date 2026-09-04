import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function ElasticityChart({ data }) {
  return (
    <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-slate-100">Booking Horizon Surge Elasticity (T+45 to T+1)</h3>
        <p className="text-xs text-slate-400">Base fare expansion as departure draws closer (removing UDF/GST)</p>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="fareGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="daysOut" stroke="#64748b" fontSize={11} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', fontSize: '12px' }} />
            <Area type="monotone" dataKey="baseFare" name="Pure Base Fare (₹)" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#fareGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}