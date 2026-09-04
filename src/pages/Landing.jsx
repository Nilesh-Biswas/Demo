import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* HEADER - Hard bottom border, monospace metadata */}
      <header className="border-b border-slate-800 px-6 py-4 flex justify-between items-center bg-[#0b0f19] sticky top-0 z-50">
        <div className="font-mono text-xs font-medium tracking-tight text-slate-100 flex items-center gap-4">
          <div className="w-2 h-2 bg-emerald-500 rounded-none animate-pulse" />
          AEROINDEX_BHARAT // v1.0.4
        </div>
        <div className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">
          MoSPI NSO Pipeline • Subclass 07.3.3
        </div>
      </header>

      <main>
        {/* HERO FOLD - Asymmetric, Left-aligned, Typographic */}
        <section className="px-6 py-24 md:py-32 border-b border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            
            {/* Left: Heavy Editorial Typography */}
            <div className="md:col-span-8 pr-12">
              <div className="font-mono text-blue-500 text-xs mb-8 tracking-widest uppercase">
                [ Latency Arbitrage Eliminated ]
              </div>
              <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-white leading-[1.05] mb-8">
                We measure the true cost of mobility. Not in 45 days, but <span className="font-bold">right now.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
                The official Consumer Price Index relies on physical surveys with a 45-day latency. 
                That is not just slow; it is economically dangerous. AeroIndex Bharat ingests the entire 
                digital booking universe in real time, serving high-frequency transport inflation data directly to the NSO.
              </p>
            </div>

            {/* Right: Raw Terminal Data Block (The Bold Moment) */}
            <div className="md:col-span-4 bg-slate-900 border border-slate-800 rounded-xl p-6 font-mono text-xs h-full flex flex-col justify-start relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full border-b border-slate-800 p-3 flex justify-between items-center bg-slate-950/50">
                <span className="text-slate-500">Live Ingestion</span>
                <Terminal size={14} className="text-slate-400" />
              </div>
              <div className="mt-12 space-y-2 text-slate-400">
                <p><span className="text-blue-400">GET</span> /api/v1/fares/DEL-BOM <span className="text-emerald-400">200 OK</span></p>
                <p>Scraping 148,240 quotes...</p>
                <p>Isolating pure base fare (UDF/GST stripped)...</p>
                <p>Applying DGCA Weight: <span className="text-white">4.14%</span></p>
                <p className="pt-4 border-t border-slate-800 mt-4 text-white">
                  JEVONS_MEAN: <span className="text-emerald-400 font-bold">104.12</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DENSITY SECTION - 600+ words, heavy asymmetric editorial layout */}
        <section className="px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            
            {/* Sticky Left Thesis */}
            <div className="md:col-span-4">
              <div className="sticky top-24">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-4">
                  The Mathematical Mandate.
                </h2>
                <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                  Replacing manual price collection requires absolute methodological rigidity. 
                  Our architecture does not just scrape data; it mathematically forces compliance 
                  with the IMF’s 2020 CPI Manual and the Ministry of Statistics’ ongoing base year revision framework.
                </p>
                <a href="/dashboard" className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/30 px-4 py-2 rounded-xl bg-blue-500/10">
                  ENTER LIVE DASHBOARD <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Scrolling Right Technical Deep Dive (Heavy Content Density) */}
            <div className="md:col-span-8 space-y-16 text-slate-300 font-light leading-relaxed">
              
              <div>
                <h3 className="text-lg font-medium text-white mb-4 border-b border-slate-800 pb-2">01. Eliminating Arithmetic Drift via Jevons</h3>
                <p className="mb-4 text-sm md:text-base">
                  When transitioning from physical sampling to high-frequency web scraped data, traditional arithmetic means (Carli indices) fail catastrophically. The volatility of dynamic airline pricing causes an upward chain drift, artificially inflating the reported CPI over time. 
                </p>
                <p className="text-sm md:text-base">
                  AeroIndex Bharat completely neutralizes this mathematical hazard by natively implementing the Jevons Geometric Mean at the elementary aggregate level. By calculating the unweighted geometric average of price relatives, our micro-indices satisfy the time reversal test. This is not a theoretical preference; it is a direct adherence to the United Nations Statistics Division (UNSD) and IMF protocols for processing digital price quotes in Subclass 07.3.3 (Passenger Transport by Air).
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4 border-b border-slate-800 pb-2">02. The Laspeyres Macro-Aggregation</h3>
                <p className="mb-4 text-sm md:text-base">
                  Raw data without structural weighting is useless to the Monetary Policy Committee. A ₹10,000 fare on a low-traffic regional route cannot mathematically impact national inflation the same way a ₹5,000 fare between Delhi and Mumbai does.
                </p>
                <p className="mb-4 text-sm md:text-base">
                  To ground our synthetic index in absolute market reality, the higher-level aggregation utilizes a modified Laspeyres formula. The dynamic route weights ($W_r$) are hard-coded against the Directorate General of Civil Aviation (DGCA) FY 2024-25 domestic scheduled passenger volume statistics. 
                </p>
                <p className="text-sm md:text-base">
                  By mapping our live price relatives against this 165.5 million passenger baseline, the resulting APIx value is an exact, quarterizeable deflator ready for direct ingestion into the National Accounts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4 border-b border-slate-800 pb-2">03. Algorithmic Fare De-Bundling</h3>
                <p className="mb-4 text-sm md:text-base">
                  Commercial web scrapers pull gross transactional values. However, official consumer price indices must track the price of the *service itself*, excluding fluctuating statutory taxes and airport-specific levies. 
                </p>
                <p className="text-sm md:text-base">
                  Our Pandas-based ETL pipeline executes a real-time regex parsing engine that strips User Development Fees (UDF), Aviation Security Fees (ASF), and dynamic GST brackets from the scraped DOM nodes. What enters the PostgreSQL database is the pure, unadulterated base fare—ensuring that policy decisions are made on airline pricing behavior, not tax code variations.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
    </div>
  );
}