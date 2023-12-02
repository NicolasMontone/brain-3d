import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Papa from 'papaparse'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App() {
    return (
        <div>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [2, 10, -3],

                }}
                style={{ background: "black" }}
            >
                <Experience />
            </Canvas>
            <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={(e) => {
                    const files = e.target.files;
                    console.log(files);
                    if (files) {
                        console.log(files[0]);
                        Papa.parse(files[0], {
                            header: true,
                            complete: function (results) {
                                console.log("Finished:", results.data);
                            }
                        }
                        )
                    }
                }}
            />
        </div>
    )
}

root.render(
    <App />
)