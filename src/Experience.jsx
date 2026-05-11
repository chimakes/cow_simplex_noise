import { Stage, Environment, useTexture, useGLTF, OrbitControls } from "@react-three/drei"
import { Suspense} from "react"
import { useControls } from 'leva'
import Cow from './Cow.jsx'

export default function Experience()
{
    return <>
        <OrbitControls enableRotate={false} enablePan={false} />

        <directionalLight position={[1, 2, 3]} intensity={1.5 } />
        
        <Suspense>
            <Stage
                intensity={3}
                environment="lobby"
                shadows={{
                    type: 'contact',
                    opacity: 0.2,
                    blur: 1,
                }}
                adjustCamera={false}
            >
                <Cow position={[0, -0.2, 0]} rotation-y={- Math.PI / 2} />
            </Stage>
        </Suspense>
    </>
}