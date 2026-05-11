import { createRoot } from 'react-dom/client'
import './style.css'
import { Canvas, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import { useEffect } from 'react'
import Experience from './Experience.jsx'
import { cameraPosition } from 'three/tsl'

const root = createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={{
            position: [1.1, 1.2, 4.5]
        }}
    >   
        <Experience />
    </Canvas>
)