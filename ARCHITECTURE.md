# Architecture

## Current Frontend Prototype Architecture
User
↓
Next.js (App Router, React Server/Client Components)
↓
Reusable UI Components (Tailwind CSS, Lucide React, Recharts)
↓
Mock Data Layer (`src/data/*.ts`)
↓
Frontend State (React Context, React Hooks)
↓
Interactive Prototype

## Future Production Architecture
Frontend (Next.js)
↓
FastAPI (Python Backend)
↓
PostgreSQL (Database) & AI/ML Data Pipelines (Model Inference)
↓
LLMs (Generative AI) / Government Data Source APIs
