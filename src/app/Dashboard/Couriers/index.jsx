import React from "react";
import { format } from "date-fns"; // Sana formatlash uchun
import { useCourier } from "../../../hooks";
import Table from "../components/Table";

const CouriersContent = () => {
  const { data, isLoading, error } = useCourier();
  const couriers = data?.data || [];
  const pagination = data?.pagination || {};

  const columns = [
    {
      title: "Ism",
      dataIndex: "user",
      render: (_, row) => row.name ?? "-",
    },
    {
      title: "Telefon",
      dataIndex: "phone",
      render: (_, row) => row.phone ?? "-",
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (_, row) => row.email ?? "-",
    },
    {
      title: "Status",
      dataIndex: "status",

      render: (status) => {
        let colorClass = "";
        let label = status?.toUpperCase() || "-";

        switch (status) {
          case "online":
            colorClass = "bg-green-100 text-green-600";
            break;
          case "away":
            colorClass = "bg-orange-100 text-orange-600";
            break;
          case "offline":
          default:
            colorClass = "bg-red-100 text-red-600";
            break;
        }
        return (
          <span
            className={`inline-block font-semibold text-sm px-4 py-1 rounded-full ${colorClass}`}
          >
            {label}
          </span>
        );
      },
    },
    {
      title: "Yaratilgan sana",
      dataIndex: "date",
      render: (_, row) => row.created_at ?? "-",
    },
    {
      title: "Tranzaksiyalar",
      dataIndex: "transaction",
      render: (_, row) => row.transactions?.[0]?.summa ?? "-",
    },
    {
      title: "Umumiy balans",
      dataIndex: "total_price",
      render: (_, row) => row.balans?.summa ?? "-",
    },
  ];

  return (
    <div>
      <Table
        rowKey="id"
        columns={columns}
        data={couriers}
        loading={isLoading}
      />
    </div>
  );
};

export default CouriersContent;
