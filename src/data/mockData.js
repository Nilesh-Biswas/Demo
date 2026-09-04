export const mockSummary = {
  nationalApiX: 104.12,
  dailyChangePct: +0.42,
  basePeriod: "2024=100",
  routesMonitored: 54,
  dailyQuotesIngested: "148,240",
  lastUpdated: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  dgcaCorrelation: 0.968,
};

export const mockTrendData = [
  { date: "Oct 15", indexValue: 101.4, jevonsMicro: 101.1, base: 100 },
  { date: "Oct 18", indexValue: 101.9, jevonsMicro: 101.5, base: 100 },
  { date: "Oct 21", indexValue: 102.3, jevonsMicro: 101.8, base: 100 },
  { date: "Oct 24", indexValue: 103.5, jevonsMicro: 102.7, base: 100 },
  { date: "Oct 27", indexValue: 104.8, jevonsMicro: 103.9, base: 100 },
  { date: "Oct 30", indexValue: 105.1, jevonsMicro: 104.2, base: 100 },
  { date: "Nov 02", indexValue: 104.12, jevonsMicro: 103.5, base: 100 },
];

export const mockElasticityData = [
  { daysOut: "T+45", baseFare: 3800, surgeIndex: 94.2 },
  { daysOut: "T+30", baseFare: 4200, surgeIndex: 98.5 },
  { daysOut: "T+21", baseFare: 4500, surgeIndex: 101.2 },
  { daysOut: "T+14", baseFare: 5200, surgeIndex: 109.8 },
  { daysOut: "T+7",  baseFare: 6800, surgeIndex: 124.6 },
  { daysOut: "T+3",  baseFare: 8900, surgeIndex: 158.4 },
  { daysOut: "T+1",  baseFare: 11400, surgeIndex: 198.1 },
];

export const mockBacktestData = [
  { month: "May 24", apixSynthetic: 101.2, dgcaBenchmark: 100.8, error: +0.4 },
  { month: "Jun 24", apixSynthetic: 102.5, dgcaBenchmark: 102.1, error: +0.4 },
  { month: "Jul 24", apixSynthetic: 99.8,  dgcaBenchmark: 100.2, error: -0.4 },
  { month: "Aug 24", apixSynthetic: 103.1, dgcaBenchmark: 102.7, error: +0.4 },
  { month: "Sep 24", apixSynthetic: 104.2, dgcaBenchmark: 103.9, error: +0.3 },
  { month: "Oct 24", apixSynthetic: 104.1, dgcaBenchmark: 104.0, error: +0.1 },
];

export const mockRoutes = [
  { route: "DEL-BOM", weight: "4.14%", rawFare: 5800, pureBase: 4500, jevons: 102.4, status: "Normal" },
  { route: "BLR-DEL", weight: "2.83%", rawFare: 6200, pureBase: 4750, jevons: 105.1, status: "Moderate Surge" },
  { route: "BOM-BLR", weight: "2.49%", rawFare: 4900, pureBase: 3800, jevons: 99.8,  status: "Normal" },
  { route: "CCU-DEL", weight: "2.10%", rawFare: 5400, pureBase: 4150, jevons: 103.6, status: "Normal" },
  { route: "HYD-DEL", weight: "1.95%", rawFare: 5100, pureBase: 3950, jevons: 101.2, status: "Normal" },
  { route: "MAA-DEL", weight: "1.72%", rawFare: 6700, pureBase: 5100, jevons: 108.9, status: "High Surge" },
];