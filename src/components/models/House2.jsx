

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";


export function House2({ sceneOpacity, ...props}) {
  const { nodes, materials } = useGLTF('/models/House2.glb')

  const materialRef = useRef();


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100} ref={materialRef}>
        <mesh geometry={nodes.Houses_SecondAge_1_Level3_1.geometry} material={materials.Main} />
        <mesh geometry={nodes.Houses_SecondAge_1_Level3_2.geometry} material={materials.Walls} />
        <mesh geometry={nodes.Houses_SecondAge_1_Level3_3.geometry} material={materials.Stone} />
        <mesh geometry={nodes.Houses_SecondAge_1_Level3_4.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Houses_SecondAge_1_Level3_5.geometry} material={materials.Wood_Light} />
        <mesh geometry={nodes.Houses_SecondAge_1_Level3_6.geometry} material={materials.Stone_Light} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/House2.glb')
