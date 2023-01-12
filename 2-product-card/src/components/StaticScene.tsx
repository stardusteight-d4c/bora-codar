import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface Props {
  pathScene: string
  zoom?: number
}

export function StaticScene({ pathScene, zoom }: Props) {
  const gltf = useLoader(GLTFLoader, pathScene)

  const zoomCamera = zoom ? zoom : 100

  return (
    <Suspense fallback={'Loading...'}>
      <Canvas
        camera={{ position: [-50, 60, zoomCamera], zoom: 0.7 }}
        style={{ width: '600px', height: '600px' }}
      >
        <primitive object={gltf.scene} position={[0, 0, 0]} />
        <directionalLight position={[3.3, 1.0, 4.4]} />
        <directionalLight position={[80, -180, -80]} />
        <directionalLight position={[-45, 180, 80]} />
        <directionalLight position={[-3.3, -1.0, -4.4]} />
      </Canvas>
    </Suspense>
  )
}
