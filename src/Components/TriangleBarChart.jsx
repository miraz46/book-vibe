
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample dataset
const data = [
  { name: "Page A", uv: 5000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const getPath = (x, y, width, height) => (
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
   C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
   Z`
);

// Custom triangle bar shape
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
  );
};
// Function to generate HSL colors dynamically
const generateColor = (index, total) => {
  const hue = (index / total) * 360; // Spread hues across 360 degrees
  return `hsl(${hue}, 70%, 50%)`; // Saturation 70%, Lightness 50%
};


const TriangleBarChart = () => {
  return (
    <ResponsiveContainer className={`mt-9`} width="100%" height={600}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="uv"
          fill="#8884d8"
          shape={(props) => (
            <TriangleBar
              {...props}
              fill={generateColor(props.index, data.length)}
            />
          )}
          label={{ position: "top" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TriangleBarChart;
