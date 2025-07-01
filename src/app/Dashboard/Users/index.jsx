import React from "react";
import Table from "../components/Table";
import { useUsers } from "../../../hooks";
import { format } from "date-fns"; // Sana formatlash uchun


const UsersContent = () => {
  const { data, isLoading, error } = useUsers();
  const couriers = data?.data || [];
//   const pagination = data?.pagination || {};

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
      title: "Yaratilgan sana",
      dataIndex: "date",
      render: (_, row) => {
        const date = new Date(row.created_at);
        return isNaN(date) ? "-" : format(date, "yyyy-MM-dd HH:mm");
      },
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

export default UsersContent;
