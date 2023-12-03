import { useThree, extend, useFrame } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useRef, memo } from 'react'
import DataPoint from './DataPoint'
import Head from './Head'

extend({ OrbitControls })

export default memo(function Experience({ setDataPoint, data, dataPoint }) {
    const { camera, gl } = useThree()
    const headRef = useRef(null)

    // useFrame(({ camera }) => {
    //     if (!headRef.current) return
    //     camera.lookAt(headRef.current.position)
    //     console.log(camera.position);
    // })

    

    return <>
        {data && <orbitControls args={[camera, gl.domElement]} />}

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <Head headRef={headRef}  dataPoint={dataPoint} setDataPoint={setDataPoint} />
        <DataPoint active={dataPoint === 1} onClick={() => setDataPoint(1)} position={[-0.38108665018800564, 3.6207941635511816, 0.882234151962892]} />

        {/* 2 */}
        <DataPoint active={dataPoint === 2} onClick={() => setDataPoint(2)} position={[0.5470042540365663, 3.37557944229549667, 0.8111280204940421]} />

        {/* 3 */}
        <DataPoint active={dataPoint === 3} onClick={() => setDataPoint(3)} position={[-0.04929348097693215, 3.8265336338782845, 0.37557944229549667]} />

        {/* 4 */}
        <DataPoint active={dataPoint === 4} onClick={() => setDataPoint(4)} position={[-0.5470042540365663, 3.37557944229549667, -0.1595142814481686]} />

        {/* 5 */}
        <DataPoint active={dataPoint === 5} onClick={() => setDataPoint(5)} position={[0.31771860949825065, 3.7047321161175475, -0.1675547703780067]} />

        {/* 6 */}
        <DataPoint active={dataPoint === 6} onClick={() => setDataPoint(6)} position={[0.9811544830288731, 2.790729424213435, 0.10182680395513827]} />

        {/* 7 */}
        <DataPoint active={dataPoint === 7} onClick={() => setDataPoint(7)} position={[0.6223582393255571, 2.834256461459791, -0.5279444595250025]} />

        {/* 8 */}
        <DataPoint active={dataPoint === 8} onClick={() => setDataPoint(8)} position={[-0.23010960384011084, 2.792515450888679, -0.5820610256119391]} />

    </>
})