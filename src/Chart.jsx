import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'



export default function Chart({ n, data }) {
	return (
		<>
			<div
				style={{ width: "100%", height: "250px" }}
			>
				<LineChart width={1300} height={250} data={data.map((data) => ({ ...data, [`EEG ${n}`]: Number(data[`EEG ${n}`]) }))} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey={`EEG ${n}`} stroke={`#${n}884d8`} dot={false} />

				</LineChart>
			</div >
		</>)
}