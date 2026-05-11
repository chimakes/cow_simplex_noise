import { createRoot } from 'react-dom/client'
import './style.css'
import { Canvas, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect } from 'react'
import Experience from './Experience.jsx'
import { cameraPosition } from 'three/tsl'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <Canvas
            camera={{
                position: [1.1, 1.2, 4.5]
            }}
        >   
            <Experience />
        </Canvas>
        <div className="github-logo">
            <a href="https://github.com/chimakes/cow_simplex_noise" target="_blank">
                <img src="/assets/GitHub_Invertocat_White.svg" alt="github logo" width="32" height="32" />
            </a>
        </div>
    </>
)