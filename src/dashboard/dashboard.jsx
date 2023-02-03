import React from "react";
import Charts from "./BarChart";
import PieCharts from "./PieChart";
import Products from "./products";
import Stats from "./stats";
import Tables from "./tables";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <Stats />
      <div className="flex flex-row gap-4 w-full">
        <Charts />
        <PieCharts />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <Tables />
        <Products />
      </div>
    </div>
  );
}
