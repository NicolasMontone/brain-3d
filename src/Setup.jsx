import React, { useState, useEffect } from 'react'

import ExpConfig from './ExpConfig'
import { Canvas } from '@react-three/fiber'
import Chart from './Chart'

const HEADERS = [
    "EEG 1",
    "EEG 2",
    "EEG 3",
    "EEG 4",
    "EEG 5",
    "EEG 6",
    "EEG 7",
    "EEG 8",
    "Accelerometer X",
    "Accelerometer Y",
    "Accelerometer Z",
    "Gyroscope X",
    "Gyroscope Y",
    "Gyroscope Z",
    "Battery Level",
    "Counter",
    "Validation Indicator",

    

]

const Setup = () => {

    const [data, setData] = useState()
    const [dataPoint, setDataPoint] = useState()

    useEffect(() => {
        const ws = new WebSocket('wss://942b-186-143-201-223.ngrok.io')
        ws.onopen = () => {
            console.log('connected');
            ws.send('Hello')
        }
        ws.onmessage = (e) => {
            console.log('message');
            console.log(e.data)

            const values = e.data.split(',')

            const acc = {}

            for (let i = 0; i < HEADERS.length; i++) {
                acc[HEADERS[i]] = values[i]
            }

            setData((p) => [...(p || []), acc])

            // -45246.01,-36642.11,-47637.56,-50700.11,-29693.94,-32981.70,-34270.68,-64256.71,-0.14,0.99,0.15,0.58,1.83,0.31,46.67,141619.00,1.00
        }
        ws.onclose = () => {
            console.log('disconnected')
        }
        ws.onerror = (err) => {
            console.log(err)
        }
    }, [
    ])

    return (
        <>
            {dataPoint !== undefined && data && <div>
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

        <ExpConfig data={data} dataPoint={dataPoint} setDataPoint={setDataPoint}/>
    </Canvas>
    </>
    )
}

export default Setup