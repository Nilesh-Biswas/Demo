import React, { useEffect, useState } from 'react';
import { fetchRoutes } from '../api/client';
import RouteHeatmap from '../components/tables/RouteHeatmap';
import { Search } from 'lucide-react';

export default function RoutesPage() {
  const [routes, setRoutes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRoutes().then(setRoutes);
  }, []);

  const filtered = routes.filter(r => r.route.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-slate-100">Domestic Route Heatmap & De-bundled Fares</h1>
          <p className="text-xs text-slate-400">Evaluating micro-level Jevons price relatives against DGCA weight matrix</p>
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-3 top-2.5 text-slate-500" />
          <input
            type="text"
            placeholder="Filter route (e.g. DEL-BOM)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-slate-200 focus:outline-none focus:border-blue-500 font-mono w-64"
          />
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden p-1">
        <RouteHeatmap routes={filtered} />
      </div>
    </div>
  );
}