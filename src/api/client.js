import axios from 'axios';
import { mockSummary, mockTrendData, mockElasticityData, mockBacktestData, mockRoutes } from '../data/mockData';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
const client = axios.create({ baseURL: API_BASE, timeout: 3000 });

export const fetchSummary = async () => {
  try {
    const res = await client.get('/v1/index/summary');
    return res.data;
  } catch {
    return mockSummary;
  }
};

export const fetchTrend = async () => {
  try {
    const res = await client.get('/v1/index/timeseries');
    return res.data;
  } catch {
    return mockTrendData;
  }
};

export const fetchElasticity = async () => {
  try {
    const res = await client.get('/v1/analytics/elasticity');
    return res.data;
  } catch {
    return mockElasticityData;
  }
};

export const fetchBacktest = async () => {
  try {
    const res = await client.get('/v1/validation/backtest');
    return res.data;
  } catch {
    return mockBacktestData;
  }
};

export const fetchRoutes = async () => {
  try {
    const res = await client.get('/v1/routes/heatmap');
    return res.data;
  } catch {
    return mockRoutes;
  }
};