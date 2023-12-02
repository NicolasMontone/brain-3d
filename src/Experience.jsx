import { useThree, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import DataPoint from './DataPoint'
import mock from './lib/data.json'

extend({ OrbitControls })

export default function Experience() {
    const { camera, gl } = useThree()
    const { scene } = useGLTF('/head/scene.gltf')
    const headRef = useRef(null)

    useThree(({ camera }) => {
        if (!headRef.current) return
        camera.lookAt(headRef.current.position)
    })


    return <>
        <orbitControls args={[camera, gl.domElement]} />

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />


        <mesh
            ref={headRef} position-y={-14} scale={10}>

            <primitive object={scene} scale={1} />
        </mesh>



        {/* 1 */}
        <DataPoint position={[-0.38108665018800564, 3.6207941635511816, 0.882234151962892]} />

        {/* 2 */}
        <DataPoint position={[0.5470042540365663, 3.37557944229549667, 0.8111280204940421]} />

        {/* 3 */}
        <DataPoint position={[-0.04929348097693215, 3.8265336338782845, 0.37557944229549667]} />

        {/* 4 */}
        <DataPoint position={[-0.5470042540365663, 3.37557944229549667, -0.1595142814481686]} />

        {/* 5 */}
        <DataPoint position={[0.31771860949825065, 3.7047321161175475, -0.1675547703780067]} />

        {/* 6 */}
        <DataPoint position={[0.9811544830288731, 2.790729424213435, 0.10182680395513827]} />

        {/* 7 */}
        <DataPoint position={[0.6223582393255571, 2.834256461459791, -0.5279444595250025]} />

        {/* 8 */}
        <DataPoint position={[-0.23010960384011084, 2.792515450888679, -0.5820610256119391]} />
        <mesh position-y={0} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}