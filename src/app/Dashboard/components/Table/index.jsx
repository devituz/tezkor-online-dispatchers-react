import React from "react";

const Table = ({ columns = [], data = [], loading = false }) => {
  const getValue = (obj, path) => {
    return path.split(".").reduce((acc, key) => {
      if (Array.isArray(acc)) acc = acc[0]; // arrayning birinchi elementini olamiz
      return acc?.[key];
    }, obj);
  };

  const renderHeader = () => (
    <thead className="bg-blue-100 text-[#2a63db]">
      <tr key={"table-header"}>
        {columns.map((col) => (
          <th
            key={`${col.dataIndex}-${col.title}`}
            className="text-center px-2 py-3 font-bold border border-gray-300 "
          >
            {col.title}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderRows = () => {
    if (loading) {
      return (
        <tr key={"loading-row"} className="hover:bg-gray-50">
          <td
            colSpan={columns.length}
            className="px-4 py-4 text-center border border-gray-300 w-[120px] h-[50px]"
          >
            Loading...
          </td>
        </tr>
      );
    }

    if (data.length === 0) {
      return (
        <tr key={"empty-row"}>
          <td
            colSpan={columns.length}
            style={{ textAlign: "center", padding: "20px" }}
          >
            No Data
          </td>
        </tr>
      );
    }

    return data.map((row, rowIndex) => (
      <tr key={rowIndex} className="hover:bg-gray-50">
        {columns.map((col) => {
          const value = getValue(row, col.dataIndex);
          const displayValue =
            typeof value === "object" && value !== null && !Array.isArray(value)
              ? JSON.stringify(value)
              : Array.isArray(value)
              ? value.length === 0
                ? "-"
                : value.join(", ")
              : value ?? "-";

          return (
            <td
              key={col.dataIndex}
              className="px-4 py-4 text-center border border-gray-300 w-[120px] h-[50px]"
            >
              {col.render ? col.render(value, row) : displayValue}
             
            </td>
          );
        })}
      </tr>
    ));
  };

  return (
    <div className="overflow-auto ">
      <table className="border border-gray-300 text-sm text-left w-full ">
        {renderHeader()}
        <tbody className="bg-white divide-y divide-gray-100 text-gray-600">
          {renderRows()}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
