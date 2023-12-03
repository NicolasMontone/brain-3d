import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useGLTF } from '@react-three/drei'
import { useRef, memo } from 'react'
import DataPoint from './DataPoint'

extend({ OrbitControls })

// [
//     {
//         "EEG 1": 3.039,
//         "EEG 2": -0.332,
//         "EEG 3": 2.581,
//         "EEG 4": 0.432,
//         "EEG 5": 4.066,
//         "EEG 6": 0.83,
//         "EEG 7": -2.499,
//         "EEG 8": -3.685,
//         "Accelerometer X": 0.031,
//         "Accelerometer Y": 0.99,
//         "Accelerometer Z": -0.247,
//         "Gyroscope X": 0.031,
//         "Gyroscope Y": 0.946,
//         "Gyroscope Z": -0.092,
//         "Battery Level": 100,
//         "Counter": 63513,
//         "Validation Indicator": 1
//       },
//       {
//         "EEG 1": 2.545,
//         "EEG 2": -1.698,
//         "EEG 3": 2.346,
//         "EEG 4": 2.165,
//         "EEG 5": 5.005,
//         "EEG 6": -4.899,
//         "EEG 7": -2.484,
//         "EEG 8": -5.628,
//         "Accelerometer X": 0.03,
//         "Accelerometer Y": 0.985,
//         "Accelerometer Z": -0.249,
//         "Gyroscope X": 0,
//         "Gyroscope Y": 0.977,
//         "Gyroscope Z": 0.031,
//         "Battery Level": 100,
//         "Counter": 63514,
//         "Validation Indicator": 1
//       },
// ]

function mapData(data) {

}
export default memo(function Experience({setDataPoint, data, dataPoint}) {
    const { camera, gl } = useThree()
    const { scene } = useGLTF('/head/scene.gltf')
    const headRef = useRef(null)

    useThree(({ camera }) => {
        if (!headRef.current) return
        camera.lookAt(headRef.current.position)
    })


    return <>
        {data && <orbitControls args={[camera, gl.domElement]} />}

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />


        <mesh
            ref={headRef} position-y={-14} scale={10}>

            <primitive object={scene} scale={1} />
        </mesh>



        {/* 1 */}
        <DataPoint active={dataPoint === 1} onClick={() =>setDataPoint(1)} position={[-0.38108665018800564, 3.6207941635511816, 0.882234151962892]} />

        {/* 2 */}
        <DataPoint active={dataPoint === 2} onClick={() =>setDataPoint(2)} position={[0.5470042540365663, 3.37557944229549667, 0.8111280204940421]} />

        {/* 3 */}
        <DataPoint active={dataPoint === 3} onClick={() =>setDataPoint(3)} position={[-0.04929348097693215, 3.8265336338782845, 0.37557944229549667]} />

        {/* 4 */}
        <DataPoint active={dataPoint === 4} onClick={() =>setDataPoint(4)} position={[-0.5470042540365663, 3.37557944229549667, -0.1595142814481686]} />

        {/* 5 */}
        <DataPoint active={dataPoint === 5} onClick={() =>setDataPoint(5)} position={[0.31771860949825065, 3.7047321161175475, -0.1675547703780067]} />

        {/* 6 */}
        <DataPoint active={dataPoint === 6} onClick={() =>setDataPoint(6)} position={[0.9811544830288731, 2.790729424213435, 0.10182680395513827]} />

        {/* 7 */}
        <DataPoint active={dataPoint === 7} onClick={() =>setDataPoint(7)} position={[0.6223582393255571, 2.834256461459791, -0.5279444595250025]} />

        {/* 8 */}
        <DataPoint active={dataPoint === 8} onClick={() =>setDataPoint(8)} position={[-0.23010960384011084, 2.792515450888679, -0.5820610256119391]} />

    </>
})