import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const Table = ({
  data,
  columns,
}: any) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel:
      getCoreRowModel(),
  });

  return (
    <div
      className="
        overflow-x-auto
        rounded-2xl
        border
        border-gray-200
        bg-white
      "
    >
      <table className="w-full">
        <thead className="bg-gray-50">
          {table
            .getHeaderGroups()
            .map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  (header) => (
                    <th
                      key={header.id}
                      className="
                        px-6
                        py-4
                        text-left
                        text-sm
                        font-semibold
                        text-gray-600
                      "
                    >
                      {flexRender(
                        header.column
                          .columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  )
                )}
              </tr>
            ))}
        </thead>

        <tbody>
          {table
            .getRowModel()
            .rows.map((row) => (
              <tr
                key={row.id}
                className="
                  border-t
                  border-gray-100
                  transition-all
                  hover:bg-gray-50
                "
              >
                {row
                  .getVisibleCells()
                  .map((cell) => (
                    <td
                      key={cell.id}
                      className="
                        px-6
                        py-4
                        text-sm
                        text-gray-700
                      "
                    >
                      {flexRender(
                        cell.column
                          .columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;