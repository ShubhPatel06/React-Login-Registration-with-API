import React from "react";
import Charts from "./BarChart";
import PieCharts from "./PieChart";
import Stats from "./stats";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <Stats />
      <div className="flex flex-row gap-4 w-full">
        <Charts />
        <PieCharts />
      </div>
    </div>
  );
}
