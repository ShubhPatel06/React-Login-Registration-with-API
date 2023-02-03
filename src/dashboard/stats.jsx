import React from "react";
import { IoBagHandle, IoPieChart, IoPeople, IoCart } from "react-icons/io5";

export default function Stats() {
  return (
    <div className="flex gap-4 w-full">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $ 62829
            </strong>
            <span className="text-sm text-green-500 pl-2">+328</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-500">
          <IoPieChart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">
            Total Expenses
          </span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">
              $ 6281
            </strong>
            <span className="text-sm text-red-500 pl-2">+128</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-500">
          <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Users</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">129</strong>
            <span className="text-sm text-green-500 pl-2">+30</span>
          </div>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-500">
          <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">150</strong>
            <span className="text-sm text-green-500 pl-2">+15</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-sm p-4 flex-1 border-gray-200 flex items-center">
      {children}
    </div>
  );
}
