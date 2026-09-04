import React from 'react';

export default function RouteHeatmap({ routes }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-xs text-slate-300">
        <thead className="bg-slate-950/80 text-slate-400 uppercase tracking-wider font-semibold border-b border-slate-800">
          <tr>
            <th className="px-4 py-3">Route Pair</th>
            <th className="px-4 py-3">DGCA Weight (W<sub>r</sub>)</th>
            <th className="px-4 py-3">Gross Fare</th>
            <th className="px-4 py-3">Pure Base Fare</th>
            <th className="px-4 py-3">Jevons Index</th>
            <th className="px-4 py-3">Surge Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 font-mono">
          {routes.map((r) => (
            <tr key={r.route} className="hover:bg-slate-800/40 transition-colors">
              <td className="px-4 py-3 font-sans font-bold text-slate-100">{r.route}</td>
              <td className="px-4 py-3 text-slate-400">{r.weight}</td>
              <td className="px-4 py-3">₹{r.rawFare.toLocaleString()}</td>
              <td className="px-4 py-3 text-blue-400 font-bold">₹{r.pureBase.toLocaleString()}</td>
              <td className="px-4 py-3 text-emerald-400">{r.jevons}</td>
              <td className="px-4 py-3 font-sans">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                  r.status === 'High Surge' 
                    ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    : r.status === 'Moderate Surge'
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}