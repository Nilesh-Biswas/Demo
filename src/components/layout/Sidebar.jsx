import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Compass,
  CheckCircle2,
  Database,
  ShieldCheck,
} from "lucide-react";

const links = [
  { name: "Index Overview", path: "/dashboard", icon: LayoutDashboard },
  { name: "Route Analytics", path: "/routes", icon: Compass },
  { name: "DGCA Validation", path: "/backtest", icon: CheckCircle2 },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col justify-between p-4">
      <div>
        <div className="flex items-center gap-3 px-2 py-4 border-b border-slate-800">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white">
            A
          </div>
          <div>
            <div className="font-bold text-slate-100 tracking-tight">
              APIx Engine
            </div>
            <div className="text-xs text-blue-400 font-mono">
              MoSPI / NSO Edition
            </div>
          </div>
        </div>

        <nav className="mt-6 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-600/10 text-blue-400 border border-blue-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                  }`
                }
              >
                <Icon size={18} />
                {link.name}
              </NavLink>
            );
          })}
        </nav>
      </div>

      <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 text-xs text-slate-400 space-y-2">
        <div className="flex items-center gap-2 text-slate-300 font-semibold">
          <ShieldCheck size={16} className="text-emerald-400" />
          IMF CPI Compliant
        </div>
        <div>
          Formula: Jevons Geometric Mean (Micro) + Laspeyres (Macro $W_r$)
        </div>
        <div className="text-[10px] text-slate-500">
          COICOP: 07.3.3 Passenger Transport
        </div>
      </div>
    </aside>
  );
}
