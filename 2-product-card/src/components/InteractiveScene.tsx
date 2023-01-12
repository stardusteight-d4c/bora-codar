import { Circle, OrbitControls, Stats } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

interface Props {
  pathScene: string
}

export function InteractiveScene({ pathScene }: Props) {
  const gltf = useLoader(GLTFLoader, pathScene)

  return (
    <Suspense fallback={'Loading...'}>
      <Canvas
        camera={{ position: [-50, 60, 100], zoom: 0.7 }}
        style={{ width: '600px', height: '600px' }}
      >
        <primitive object={gltf.scene} position={[0, 0, 0]} />
        <directionalLight position={[3.3, 1.0, 4.4]} />
        <directionalLight position={[80, -180, -80]} />
        <directionalLight position={[-45, 180, 80]} />
        <directionalLight position={[-3.3, -1.0, -4.4]} />

        {/* elements that help define positioning, light and shadow */}
        {/* <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
          </Circle>
        <Stats />
        <axesHelper args={[100]} /> */}

        <OrbitControls
          target={[0, 0, 0]}
          enablePan={false}
          autoRotate
          enableZoom={false}
        />
      </Canvas>
    </Suspense>
  )
}
