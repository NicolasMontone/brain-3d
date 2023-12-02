import {LineChart, XAxis, YAxis, Tooltip, Legend, Line} from 'recharts'



export default function Chart({n, data}){
	console.log({data})
	return (
		<>

	<LineChart width={730} height={250} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line type="monotone" dataKey={`EEG ${n}`} stroke={`#${n}884d8`} dot={false}/>

	</LineChart></>)
}