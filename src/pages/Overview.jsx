import React, { useEffect, useState } from 'react';
import { fetchSummary, fetchTrend, fetchElasticity, fetchRoutes } from '../api/client';
import IndexHeroCard from '../components/cards/IndexHeroCard';
import StatCard from '../components/cards/StatCard';
import TrendChart from '../components/charts/TrendChart';
import ElasticityChart from '../components/charts/ElasticityChart';
import RouteHeatmap from '../components/tables/RouteHeatmap';
import { Server, Compass, Layers, CheckCircle } from 'lucide-react';

export default function Overview() {
  const [summary, setSummary] = useState(null);
  const [trend, setTrend] = useState([]);
  const [elasticity, setElasticity] = useState([]);
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    fetchSummary().then(setSummary);
    fetchTrend().then(setTrend);
    fetchElasticity().then(setElasticity);
    fetchRoutes().then(setRoutes);
  }, []);

  return (
    <div className="space-y-6">
      {/* Top Hero & Stat Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <IndexHeroCard data={summary} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Quotes Ingested Today" value={summary?.dailyQuotesIngested ?? '148,240'} subtext="De-bundled via Pandas" icon={Server} />
          <StatCard label="Routes Sampled" value={summary?.routesMonitored ?? 54} subtext="DGCA Top Corridors" icon={Compass} accent="emerald" />
          <StatCard label="DGCA Correlation" value={summary?.dgcaCorrelation ?? '0.968'} subtext="Simulated Backtest" icon={CheckCircle} accent="blue" />
          <StatCard label="Latency Lag" value="0 Days" subtext="Manual Survey: 45 Days" icon={Layers} accent="emerald" />
        </div>
      </div>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart data={trend} />
        <ElasticityChart data={elasticity} />
      </div>

      {/* Live Route Sample Table */}
      <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-bold text-slate-100">Top Weighted Route Corridors</h3>
            <p className="text-xs text-slate-400">Pure base fares calculated after programmatic extraction of statutory UDF and GST</p>
          </div>
          <span className="text-xs text-blue-400 font-mono font-medium">Auto-refreshed: Daily</span>
        </div>
        <RouteHeatmap routes={routes.slice(0, 5)} />
      </div>
    </div>
  );
}