import {
  createColumnHelper,
} from "@tanstack/react-table";

const columnHelper =
  createColumnHelper<any>();

export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),

  columnHelper.accessor("name", {
    header: "Customer",
  }),

  columnHelper.accessor("email", {
    header: "Email",
  }),

  columnHelper.accessor(
    "product",
    {
      header: "Product",
    }
  ),

  columnHelper.accessor("value", {
    header: "Value",

    cell: (info) => (
      <span className="font-semibold">
        $
        {info
          .getValue()
          .toLocaleString()}
      </span>
    ),
  }),

  columnHelper.accessor(
    "closeDate",
    {
      header: "Close Date",
    }
  ),
];