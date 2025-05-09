import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A33FBF'];

const CityPieChart = ({ visitLogs }) => {
  const cityVisits = visitLogs.reduce((acc, log) => {
    const existingEntry = acc.find(entry => entry.city === log.city);

    if (existingEntry) {
      existingEntry.visits += 1;
    } else {
      acc.push({ city: log.city, visits: 1 });
    }

    return acc;
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={cityVisits}
          dataKey="visits"
          nameKey="city"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={({ name, value }) => `${name}: ${value}`} // Displays city name + visit count
        >
          {cityVisits.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CityPieChart;