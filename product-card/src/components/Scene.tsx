import { OrbitControls } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export function Scene() {
  const gltf = useLoader(GLTFLoader, './scene/scene.gltf')
  // const colorMap = useLoader(TextureLoader, './scene/textures/FLOOR_baseColor.png')

  return (
    <Suspense fallback={'...'}>
      <Canvas
        camera={{ position: [50, 80, 100] }}
        shadows
        style={{ width: '500px' }}
      >
        {/* <meshStandardMaterial map={colorMap} /> */}

        <ambientLight />
        {/* <pointLight position={[100, 100, 100]} /> */}
        {/* <directionalLight position={[3.3, 1.0, 4.4]} castShadow /> */}
        <primitive
          object={gltf.scene}
          position={[0, 0, 0]}
          // children-0-castShadow
        />
        <OrbitControls target={[0, 0, 0]} />
        <axesHelper args={[100]} />
      </Canvas>
    </Suspense>
  )
}
