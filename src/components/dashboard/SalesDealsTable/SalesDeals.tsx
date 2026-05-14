import Card from "../../ui/Card/Card";
import Table from "../../ui/Table/Table";
import SearchBar from "../../ui/SearchBar";

import { dealsData } from "./salesDeals.data";
import {columns} from './salesDeals.columns';
import SalesDealsSkeleton from "./SalesDealsSkeleton";
import { useDashboard } from "../../../context/DashboardContext";

const SalesDeals = () => {
  const {loading} = useDashboard()
  
    if (loading) {
  return <SalesDealsSkeleton />;
}
  return (
    <Card className="p-5 mt-3">
      <div
        className="
          mb-3
          flex
          flex-col
          gap-2
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <div>
          <h2
            className="
              text-[16px]
              font-semibold
              text-gray-800
            "
          >
            Sales Deals
          </h2>

          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            Track recent sales &
            customer deals
          </p>
        </div>
        <div className="w-full md:w-[320px]">
          <SearchBar placeholder="Search deals..." />
        </div>
      </div>
      <Table
        data={dealsData}
        columns={columns}
      />
    </Card>
  );
};

export default SalesDeals;