import React, { memo } from 'react'
import { useGLTF } from '@react-three/drei'


const Head = ({ headRef }) => {
    const { scene } = useGLTF('/head/scene.gltf')

    return (
        <mesh
            ref={headRef} position-y={-14} scale={10}>

            <primitive object={scene} scale={1} />
        </mesh>
    )
}

export default memo(Head)