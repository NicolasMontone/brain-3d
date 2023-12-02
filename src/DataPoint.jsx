import React from 'react'

const DataPoint = ({ position }) => {
    return (
        <mesh scale={0.07} position={position}>
            <sphereGeometry args={[1, 16, 16]} scale={0.1} />
            <meshStandardMaterial color="hotpink" />
        </mesh>
    )
}

export default DataPoint