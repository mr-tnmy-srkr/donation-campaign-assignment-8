import { useEffect, useState } from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { getStoredDonatedData } from "../../utils/localStorage.js";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
  const labelRadius = radius * 1.2; // Adjust constant for position
  const x = cx + labelRadius * Math.cos(-midAngle * RADIAN);
  const y = cy + labelRadius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      className="text-2xl font-semibold"
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      
      fontSize={16}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};



const Statistics = () => {
  const [chartWidth, setChartWidth] = useState(400);
  const [lStorageDataLength, setLStorageDataLength] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setChartWidth(screenWidth * 0.9);
      } else {
        setChartWidth(400);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // get data from LS
    const getDataFromLs = getStoredDonatedData();
    // console.log(getDataFromLs);
    setLStorageDataLength(getDataFromLs.length);
  }, []);
console.log(lStorageDataLength);


const data = [
  { name: "Total Donation", value: 12 },
  { name: "Your Donation", value:lStorageDataLength},
];

  return (
    <div
      className="container mx-auto w-[95%]"
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={chartWidth} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip contentStyle={{ fontSize: "18px" }} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
