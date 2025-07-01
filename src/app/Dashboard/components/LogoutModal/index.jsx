import React from "react";

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.5)] bg-opacity-50 z-[999] flex justify-center items-center ">
      <div className="  w-[270px]  bg-white p-6  rounded-2xl shadow-lg">
        <h2 className="text-lg font-bold mb-2 text-[#5519c6]"> Chiqish</h2>
        <p className="text-[#8a8888] text-sm mb-5">Chiqishni xohlaysizmi?</p>
        <div className="mt-4 flex gap-4 justify-end">
          <button
            className=" px-2 py-1  text-[#8a8888] hover:rounded-xl hover:bg-[#d0cfcf]"
            onClick={onClose}
          >
            Yo'q
          </button>
          <button
            className="text-center bg-[#6118ea] font-bold text-white px-6  rounded-xl hover:bg-[#4c13c0]"
            onClick={() => {
              onClose();
              console.log("User logged out.");
            }}
          >
            Ha
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
