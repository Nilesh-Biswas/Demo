import React from 'react';

export default function StatCard({ label, value, subtext, icon: Icon, accent = "blue" }) {
  return (
    <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-400">{label}</span>
        {Icon && <Icon size={16} className={`text-${accent}-400`} />}
      </div>
      <div className="mt-2 text-2xl font-bold font-mono text-slate-100">{value}</div>
      <div className="mt-1 text-[11px] text-slate-500">{subtext}</div>
    </div>
  );
}