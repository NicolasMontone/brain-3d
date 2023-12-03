import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Papa from 'papaparse'
import { useState } from 'react'
import { Toaster, toast } from 'sonner'

import Chart from './Chart.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App() {
    const [data, setData] = useState(null);
    const [dataPoint, setDataPoint] = useState()
    return (
        <>
            <Toaster />
            {dataPoint !== undefined && <div>
                <button onClick={() => setDataPoint()}> x </button>
                <Chart n={dataPoint} data={data} /></div>}
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [
                        -8.28084032273374,
                        8.98459490968886,
                        13.088868742556407
                    ],

                }}
                style={{ background: "black" }}
            >

                <Experience setDataPoint={setDataPoint} data={data} dataPoint={dataPoint} />
            </Canvas>
            <label
                htmlFor="file-input"
                className='drop-container'
                style={{ display: data ? 'none' : 'flex' }}
            >
                <h1>Upload your BCI file here</h1>
                <input
                    id='file-input'
                    className='file-input'
                    type="file"
                    accept=".csv"
                    onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                            console.log(files[0]);
                            Papa.parse(files[0], {
                                header: true,
                                complete: function (results) {
                                    if (results.data?.[0]?.['EEG 1'] === undefined) {
                                        toast.error("Unable to parse file. Please try again.");
                                        return
                                    }

                                    setData(results.data);
                                    toast.success("File uploaded successfully!");
                                }
                            }
                            )
                        }
                    }}
                />
            </label>

        </>
    )
}

root.render(
    <App />
)