import React, { useState } from "react";
import { couriers, logout, orders,user} from "@/assets";
import OrdersContent from "@app/Dashboard/Orders";
import CouriersContent from "@app/Dashboard/Couriers";
import UsersContent from "@app/Dashboard/Users";
import { Modal } from "@app/Dashboard/components";

const Main = () => {
  const [activePage, setActivePage] = useState("Orders");
  const[showModal, setShowModal]= useState(false)

  const menuItems = [
    {
      title: "Orders",
      icon: orders,
      component: <OrdersContent />,
    },
    {
      title: "Couriers",
      icon: couriers,
      component: <CouriersContent />,
    },
    {
      title: "Users",
      icon: user,
      component: <UsersContent />,
    },
    {
      title: "Logout",
      icon: logout,
      action: () => {
        setShowModal(true);
      },
    },
  ];

  const renderContent = () => {
    const current = menuItems.find((item) => item.title === activePage);
    return current?.component || null;
  };

  return (
    <div className="flex flex-col h-screen w-full">
      {/* nav */}
      <div className=" w-full h-[50px] bg-[#4285f4] text-white flex items-center p-7 text-2xl   shadow">
        {activePage}
      </div>

      <div className="flex h-screen">
        <div className="w-[80px] bg-[#fff] text-[#5d5a5a] text-[14px] p-5 border-r-1 border-gray-300">
          {menuItems.map((mItem) => (
            <div
              key={mItem.title}
              onClick={() => {
                if (mItem.action) {
                  mItem.action();
                } else {
                  setActivePage(mItem.title);
                }
              }}
              className={`flex flex-col items-center gap-1 py-2 rounded-b-sm cursor-pointer  ${
                activePage === mItem.title ? "text-[#2a63db]" : "text-[#5d5a5a]"
              }`}
            >
              <div
                className={`w-14 h-10 flex items-center justify-center  rounded-3xl ${
                  activePage === mItem.title ? "bg-[#e3e1fb]" : ""
                }`}
              >
                <img src={mItem.icon} alt={mItem.title} className="w-7 h-7" />
              </div>
              <span className="text-[12px]">{mItem.title}</span>
            </div>
          ))}
        </div>

        {/* content */}
        <div className="flex ">{renderContent()}</div>
      </div>
      {/* Modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Main;
