import "./Chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart({data, title, grid, dataKey}) {

    return (
        <div className="chart">
           <h3 className="chartTitle">{title}</h3>
           <ResponsiveContainer width="100%" aspect={4/1}>
           <LineChart data={data}>
                <XAxis dataKey="name" stroke="#5550bd" />
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                <Tooltip />
                {grid && <CartesianGrid stroke="#eodfdf" strokeDasharray="5 5"/>}
           </LineChart>
           </ResponsiveContainer>
        </div>
    )
}
