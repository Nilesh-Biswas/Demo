# ✈️ AeroIndex (APIx) Dashboard - Frontend Client

> **Smart India Hackathon (SIH) Prototype**  
> The interactive frontend visualization layer for a high-frequency, real-time Consumer Price Index (CPI) tracking engine engineered for the Ministry of Statistics and Programme Implementation (MoSPI) and the National Statistical Office (NSO).

---

## 📌 Overview

Currently, the manual survey method for collecting airfare data for the national CPI compilation suffers from a **45-day latency lag**. 

**AeroIndex (APIx)** modernizes this pipeline. This frontend repository houses the data-dense, brutalist dashboard that visualizes real-time web-scraped data, algorithmic fare de-bundling, and IMF-compliant mathematical indexing. It equips policymakers and the RBI Monetary Policy Committee with precise, daily inflationary indicators through a professional, high-performance interface.

### UI & Visualization Features
* **Zero Latency Dashboards:** Interactive tracking of daily (T+0) data feeds to monitor airfare inflation in real-time.
* **Fare De-bundling Grids:** Clear visual breakdowns of pure base fares versus statutory taxes (GST) and User Development Fees (UDF).
* **Mathematical Index Tracking:** High-performance charting of the **Jevons Geometric Mean** (micro-level) and **Laspeyres Index** (macro-level) using Recharts.
* **Editorial Design System:** Engineered with a professional, data-heavy aesthetic optimized for enterprise and government policy tooling (strict 1px borders, asymmetric layouts, and Geist typography).

---

## 🏗️ Frontend Architecture & Stack

This repository is built using a modern, lightweight, and highly responsive web stack:

* **Framework:** React.js 18 
* **Build Tool:** Vite (for hyper-fast HMR and optimized production builds)
* **Styling:** Tailwind CSS v4 (using the new `@tailwindcss/vite` engine)
* **Data Visualization:** Recharts (SVG-based charting)
* **Icons:** Lucide React
* **Routing:** React Router v6

---

## 🚀 Prototype Status

This repository contains the fully functional frontend UI shell. 
* **UI/UX Implementation:** 100% complete.
* **Current State:** The dashboard currently operates using a local client fallback, streaming real-world simulated mock data. 
* **Next Steps:** Seamless integration with the live FastAPI backend once the Python/Pandas scraping pipeline is fully deployed.

---

## ⚙️ Local Setup & Installation

This project uses the modern Vite + Tailwind v4 toolchain, meaning setup is incredibly fast with zero massive configuration files.

### 1. Clone the repository
```bash
git clone [https://github.com/Nilesh-Biswas/Demo.git](https://github.com/Nilesh-Biswas/Demo.git)
cd Demo
