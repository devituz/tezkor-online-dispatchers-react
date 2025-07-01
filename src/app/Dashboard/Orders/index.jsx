import React from "react";
import Table from "../components/Table";
import { useOrder } from "../../../hooks";

const OrdersContent = () => {
  const { data, isLoading, error } = useOrder();
  const orders = data?.data || [];
  const pagination = data?.pagination || {};

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (_, row) => row.id ?? "-",
    },
    {
      title: "Masofa",
      dataIndex: "max_distance_km",
      render: (_, row) => row.max_distance_km ?? "-",
    },
    {
      title: "Mahsulot soni",
      dataIndex: "products",
      render: (_, row) => row.products?.length ?? 0,
    },
    {
      title: "Mahsulot narxi",
      dataIndex: "products_price",
      render: (_, row) => row.products_price ?? "-",
    },
    {
      title: "Yetkazib berish narxi",
      dataIndex: "delivery_price",
      render: (_, row) => row.delivery_price ?? "-",
    },
    {
      title: "Umumiy narx",
      dataIndex: "total_price",
      render: (_, row) => row.total_procice ?? "-",
    },
    {
      title: "Sana",
      dataIndex: "created_at",
      render: (_, row) => row.created_at ?? "-",
    },
    {
      title: "Client status",
      dataIndex: "status",
      render: (status) => {
        let colorClass = "";
        let label = status?.toUpperCase() || "-";

        switch (status) {
          case "kutilmoqda":
            colorClass = "bg-yellow-100 text-yellow-600";
            break;
          case "yetkazildi":
            colorClass = "bg-green-100 text-green-600";
            break;
          case "rad etildi":
            colorClass = "bg-red-100 text-red-600";
            break;
          default:
            colorClass = "bg-gray-100 text-gray-600";
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
      title: "Restoran mijoz status",
      dataIndex: "category_to_restoran",
      render: (_, row) => {
        const status = row.category_to_restoran?.status;
        let colorClass = "";
        let label = status?.toUpperCase() || "-";

        switch (status) {
          case "kutilmoqda":
            colorClass = "bg-yellow-100 text-yellow-600";
            break;
          case "yetkazildi":
            colorClass = "bg-green-100 text-green-600";
            break;
          case "rad etildi":
            colorClass = "bg-red-100 text-red-600";
            break;
          default:
            colorClass = "bg-gray-100 text-gray-600";
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
      title: "Mahsulot nomi",
      dataIndex: "products",
      render: (_, row) => (
        <div className="max-w-[300px] truncate whitespace-nowrap overflow-hidden">
          {Array.isArray(row.products)
            ? row.products
                .map((p) => p?.product?.name)
                .filter(Boolean)
                .join(", ")
            : "-"}
        </div>
      ),
    },

    {
      title: "Manzil",
      dataIndex: "location",
      render: (_, row) => (
        <div className="max-w-[250px] truncate whitespace-nowrap overflow-hidden">
          {row.location ?? "-"}
        </div>
      ),
    },
    {
      title: "Client",
      dataIndex: "user",
      render: (_, row) => {
        const client = row.user;
        return (
          <div className="max-w-[150px] truncate whitespace-nowrap overflow-hidden">
            {client
              ? `${client?.firstname ?? ""} ${client?.lastname ?? ""}`.trim()
              : "-"}
          </div>
        );
      },
    },
    {
      title: "Kuryer",
      dataIndex: "kuryer",
      render: (_, row) => {
        const courier = row.kuryer;
        return (
          <div className="max-w-[150px] truncate whitespace-nowrap overflow-hidden">
            {courier
              ? `${courier?.firstname ?? ""} ${courier?.lastname ?? ""}`.trim()
              : "-"}
          </div>
        );
      },
    },

    {
      title: "Restoran",
      dataIndex: "category_to_restoran",
      render: (_, row) => row.category_to_restoran?.category?.name ?? "-",
    },
  ];

  return (
    <div>
      <Table rowKey="id" columns={columns} data={orders} loading={isLoading} />
    </div>
  );
};

export default OrdersContent;
