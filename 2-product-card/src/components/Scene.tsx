import {
  Circle,
  Lightformer,
  OrbitControls,
  ScrollControls,
  Stats,
} from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export function Scene() {
  const gltf = useLoader(GLTFLoader, './scene/scene.gltf')

  return (
    <Suspense fallback={'...'}>
      <Canvas
        camera={{ position: [50, 60, 100], zoom: 0.7 }}
        style={{ width: '600px', height: '600px' }}
      >
        <primitive object={gltf.scene} position={[0, 0, 0]} />
        <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
        <directionalLight position={[-3.3, -1.0, -4.4]} castShadow />

        <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle>
        <Stats />

        <OrbitControls
          target={[0, 0, 0]}
          enablePan={false}
          autoRotate
          enableZoom={false}
        />
        <axesHelper args={[100]} />
      </Canvas>
    </Suspense>
  )
}
