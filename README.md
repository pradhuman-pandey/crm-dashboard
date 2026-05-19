# 🚀 Admin Dashboard UI

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TanStack Table](https://img.shields.io/badge/TanStack_Table-8-FF4154?logo=react&logoColor=white)](https://tanstack.com/table)
[![Recharts](https://img.shields.io/badge/Recharts-2-22B5BF?logo=chartdotjs&logoColor=white)](https://recharts.org/)

> A modern, production-ready admin dashboard with enterprise-grade features — fully responsive, beautifully animated, and built for scale.

**Live Demo:** [https://crm-dashboard-v3.vercel.app/](https://crm-dashboard-v3.vercel.app/) *(replace with actual link)*

## ✨ Features

| Category | Highlights |
|----------|------------|
| 📊 **Analytics** | Revenue charts, performance cards, trend indicators, win‑probability graphs |
| 🧩 **Reusable UI** | Card, Table, SearchBar, Skeleton loaders — all composable and typed |
| 📈 **Smart Table** | Sorting, searching, sparkline graphs, progress bars, status badges, stage icons |
| 🎨 **Modern Styling** | Tailwind CSS with gradients, shadows, transitions, and responsive design |
| ⚡ **Performance** | Lazy loading, skeleton states, and optimized re-renders (TanStack Table) |
| 📱 **Responsive** | Mobile-first layout with collapsible sidebar & adaptive charts |
| 🧪 **Type Safety** | Full TypeScript coverage – no `any` in critical paths |
| 🧰 **Developer Experience** | Clean folder structure, custom hooks, constants separation, and Vite fast refresh |

---

## 🛠️ Tech Stack

| Area | Technologies |
|------|--------------|
| **Core** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, clsx, Framer Motion |
| **Tables** | TanStack React Table (sorting, filtering, custom cells) |
| **Charts** | Recharts (line, bar, area charts) |
| **Icons** | Lucide React |
| **Deployment** | Vercel / Netlify |

---

## 📂 Folder Structure
src/
├── assets/ # Images, icons, fonts
├── components/
│ ├── ui/ # Card, Table, SearchBar, Skeleton
│ ├── layout/ # Sidebar, Header, Layout wrapper
│ └── dashboard/ # SalesDeals, RevenueChart, KpiCards
├── pages/ # Dashboard, Analytics, Settings (route pages)
├── data/ # Static/mock data (salesDeals.data, columns)
├── hooks/ # Custom hooks (useDashboard, useDebounce)
├── types/ # TypeScript interfaces
├── utils/ # Helpers (currency formatter, date utils)
├── constants/ # Navigation links, chart configs
├── animations/ # Framer Motion variants
├── styles/ # Global CSS / Tailwind imports
├── App.tsx
└── main.tsx

text

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/admin-dashboard-ui.git
cd admin-dashboard-ui
2. Install dependencies
bash
npm install
# or
yarn install
3. Run development server
bash
npm run dev
# or
yarn dev
The dashboard will be available at http://localhost:5173

4. Build for production
bash
npm run build
npm run preview   # preview the production build locally
🧩 Key Components Showcase
🔹 SalesDeals Table (Enterprise Grade)
Search – debounced input filtering across customer, product, stage, status

Sorting – clickable headers with ascending/descending indicators

Visual cells – sparkline weekly trends, progress bar for win probability, status badges, stage emojis

Loading skeleton – smooth placeholder while data fetches

tsx
// Usage example
<SalesDeals />  // automatically handles loading state from DashboardContext
🔹 Reusable Table (TanStack + custom cells)
tsx
<Table
  data={dealsData}
  columns={columns}
  enableSorting
  emptyMessage="No deals match your search"
/>
🔹 Sparkline Graph (inside table column)
tsx
<Sparkline data={[42, 48, 55, 62, 58, 71, 85]} color="#3b82f6" />
🔹 Progress Bar with gradient animation
tsx
<ProgressBar value={78} max={100} label />
📈 Charts & Analytics
Built with Recharts – responsive line charts for revenue trends, doughnut charts for deal stages, and bar charts for monthly performance. All charts support tooltips, legends, and animations.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📄 License
MIT

💬 Acknowledgements
TanStack Table for powerful headless table logic

Tailwind CSS for utility-first styling

Recharts for composable chart components

Lucide Icons for beautiful icon set
# 🚀 Admin Dashboard UI

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TanStack Table](https://img.shields.io/badge/TanStack_Table-8-FF4154?logo=react&logoColor=white)](https://tanstack.com/table)
[![Recharts](https://img.shields.io/badge/Recharts-2-22B5BF?logo=chartdotjs&logoColor=white)](https://recharts.org/)

> A modern, production-ready admin dashboard with enterprise-grade features — fully responsive, beautifully animated, and built for scale.

**Live Demo:** [https://your-dashboard.vercel.app](https://your-dashboard.vercel.app) *(replace with actual link)*

## ✨ Features

| Category | Highlights |
|----------|------------|
| 📊 **Analytics** | Revenue charts, performance cards, trend indicators, win‑probability graphs |
| 🧩 **Reusable UI** | Card, Table, SearchBar, Skeleton loaders — all composable and typed |
| 📈 **Smart Table** | Sorting, searching, sparkline graphs, progress bars, status badges, stage icons |
| 🎨 **Modern Styling** | Tailwind CSS with gradients, shadows, transitions, and responsive design |
| ⚡ **Performance** | Lazy loading, skeleton states, and optimized re-renders (TanStack Table) |
| 📱 **Responsive** | Mobile-first layout with collapsible sidebar & adaptive charts |
| 🧪 **Type Safety** | Full TypeScript coverage – no `any` in critical paths |
| 🧰 **Developer Experience** | Clean folder structure, custom hooks, constants separation, and Vite fast refresh |

---

## 🛠️ Tech Stack

| Area | Technologies |
|------|--------------|
| **Core** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, clsx, Framer Motion |
| **Tables** | TanStack React Table (sorting, filtering, custom cells) |
| **Charts** | Recharts (line, bar, area charts) |
| **Icons** | Lucide React |
| **Deployment** | Vercel / Netlify |

---

## 📂 Folder Structure
src/
├── assets/ # Images, icons, fonts
├── components/
│ ├── ui/ # Card, Table, SearchBar, Skeleton
│ ├── layout/ # Sidebar, Header, Layout wrapper
│ └── dashboard/ # SalesDeals, RevenueChart, KpiCards
├── pages/ # Dashboard, Analytics, Settings (route pages)
├── data/ # Static/mock data (salesDeals.data, columns)
├── hooks/ # Custom hooks (useDashboard, useDebounce)
├── types/ # TypeScript interfaces
├── utils/ # Helpers (currency formatter, date utils)
├── constants/ # Navigation links, chart configs
├── animations/ # Framer Motion variants
├── styles/ # Global CSS / Tailwind imports
├── App.tsx
└── main.tsx

text

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/admin-dashboard-ui.git
cd admin-dashboard-ui
2. Install dependencies
bash
npm install
# or
yarn install
3. Run development server
bash
npm run dev
# or
yarn dev
The dashboard will be available at http://localhost:5173

4. Build for production
bash
npm run build
npm run preview   # preview the production build locally
🧩 Key Components Showcase
🔹 SalesDeals Table (Enterprise Grade)
Search – debounced input filtering across customer, product, stage, status

Sorting – clickable headers with ascending/descending indicators

Visual cells – sparkline weekly trends, progress bar for win probability, status badges, stage emojis

Loading skeleton – smooth placeholder while data fetches

tsx
// Usage example
<SalesDeals />  // automatically handles loading state from DashboardContext
🔹 Reusable Table (TanStack + custom cells)
tsx
<Table
  data={dealsData}
  columns={columns}
  enableSorting
  emptyMessage="No deals match your search"
/>
🔹 Sparkline Graph (inside table column)
tsx
<Sparkline data={[42, 48, 55, 62, 58, 71, 85]} color="#3b82f6" />
🔹 Progress Bar with gradient animation
tsx
<ProgressBar value={78} max={100} label />
📈 Charts & Analytics
Built with Recharts – responsive line charts for revenue trends, doughnut charts for deal stages, and bar charts for monthly performance. All charts support tooltips, legends, and animations.

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

📄 License
MIT

💬 Acknowledgements
TanStack Table for powerful headless table logic

Tailwind CSS for utility-first styling

Recharts for composable chart components

Lucide Icons for beautiful icon set
