import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function ImpressionsAreaChart() {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey='name' hide />
        <Tooltip />
        <Area
          type='monotone'
          dataKey='uv'
          stroke='#F0E5FF'
          strokeWidth={3}
          fill='#ffffff'
          dot={(props) => {
            const { cx, cy } = props;
            return (
              <circle
                cx={cx}
                cy={cy}
                r={3}
                stroke='#6F00FF'
                strokeWidth={1}
                fill='#6F00FF'
              />
            );
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
