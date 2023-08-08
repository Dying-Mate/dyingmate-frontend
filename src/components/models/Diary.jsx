/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 5_5_Diary.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Diary(props) {
  const { nodes, materials } = useGLTF('/models/5_5_Diary.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Diary.geometry} material={materials['Material.007']} position={[-4.875, 0.591, -4.676]} rotation={[0, 0.205, 0]} scale={[0.74, 0.085, 1.039]} >
        <meshBasicMaterial attach="material" color={"red"} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/models/5_5_Diary.gltf')