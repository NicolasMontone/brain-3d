import React, { useState } from 'react';
// Define the colors
const defaultColor = "hotpink";
const hoverColor = "lightblue";

const DataPoint = ({ position }) => {
    const [hover, setHover] = useState(false);

    return (
        <mesh
            scale={0.07}
            position={position}
            onPointerOver={() => setHover(true)} // Pointer enters the mesh
            onPointerOut={() => setHover(false)} // Pointer leaves the mesh
        >
            <sphereGeometry args={[1, 16, 16]} scale={0.1} />
            <meshStandardMaterial color={hover ? hoverColor : defaultColor} />
        </mesh>
    );
};

export default DataPoint;
