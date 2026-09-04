# ✈️ AeroIndex (APIx) Dashboard - MoSPI/NSO Edition

> **Smart India Hackathon (SIH) Prototype**  
> A high-frequency, real-time Consumer Price Index (CPI) tracking engine for domestic airfares, engineered for the Ministry of Statistics and Programme Implementation (MoSPI) and the National Statistical Office (NSO).

---

## 📌 Overview

Currently, the manual survey method for collecting airfare data for the national CPI compilation suffers from a **45-day latency lag**. 

**AeroIndex (APIx)** modernizes this pipeline by utilizing real-time web scraping, algorithmic fare de-bundling, and IMF-compliant mathematical indexing. By shifting from physical counter quotes to a 100% digital booking universe, this platform equips policymakers and the RBI Monetary Policy Committee with precise, daily inflationary indicators.

### Key Features
* **Zero Survey Latency:** Replaces the 45-day manual lag with daily (T+0) data feeds.
* **Algorithmic De-bundling:** Automated Pandas engine isolates pure base fares by stripping out statutory taxes (GST) and User Development Fees (UDF).
* **IMF Mathematical Compliance:** Utilizes the **Jevons Geometric Mean** at the micro-level to eliminate arithmetic index drift.
* **DGCA Traffic Calibration:** Applies the **Laspeyres Index** macro-aggregation weighted precisely against official DGCA passenger volume shares (165.5M benchmark).

---

## 🏗️ Technical Architecture & Stack

The overall platform architecture acts as an end-to-end data pipeline from raw ingestion to policy consumption.

**Frontend (This Repository):**
* **Framework:** React.js 18 powered by Vite
* **Styling:** Tailwind CSS v4 (using the `@tailwindcss/vite` engine)
* **Data Visualization:** Recharts
* **Icons:** Lucide React

**Backend & Data Engineering (System Wide):**
* **Scraping Engine:** Playwright + Scrapy (Stealth rotation)
* **Database:** PostgreSQL (Composite time-series indexing)
* **ETL Engine:** Python (Pandas + Regex)
* **API Delivery:** FastAPI

---

## 🚀 Prototype Status: ~75% Operational

This repository houses the fully functional frontend visualization layer. The overall system prototype currently stands at ~75% readiness:
1. **Data Ingestion (100%):** Live scraping and Postgres schema architecture are functional.
2. **ETL & De-bundling (70%):** Base fare extraction algorithms are actively isolating costs.
3. **API & Dashboard Integration (Current Phase):** The frontend currently operates on a local client fallback streaming real-world simulated data. Integration with live FastAPI endpoints is in progress.

---

## ⚙️ Local Setup & Installation

This project uses the modern Vite + Tailwind v4 toolchain, meaning setup is incredibly fast with zero massive configuration files.

### 1. Clone the repository
```bash
git clone [https://github.com/Nilesh-Biswas/Demo.git]
cd 
