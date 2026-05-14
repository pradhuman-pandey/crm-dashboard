import { useEffect, useState } from "react";

import StatsSection from "../../components/dashboard/StatsSection";
import RevenueExpenses from "../../components/dashboard/RevenueExpenses";
import Performance from "../../components/dashboard/PerformanceCard";
import SalesDeals from "../../components/dashboard/SalesDealsTable/SalesDeals";

const DashboardPage = () => {

  return (
    <>
      <StatsSection />
      <section className="grid grid-cols-1 gap-0 xl:grid-cols-3 mt-3">
        <div className="xl:col-span-2">
          <RevenueExpenses />
        </div>
        <div className="xl:col-span-1">
          <Performance />
        </div>
      </section>
      <SalesDeals />
    </>
  );
};

export default DashboardPage;
