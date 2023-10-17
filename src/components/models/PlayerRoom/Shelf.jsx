/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 5_8_Shelf.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Shelf(props) {
  const { nodes, materials } = useGLTF('/models/5_8_Shelf.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube010.geometry} material={materials['book.004']} position={[12.657, 4.742, -13.411]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['book.004']} position={[12.56, 1.892, -13.047]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['book.004']} position={[11.862, 1.892, -11.333]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['shelf.003']} position={[12.56, 3.834, -12.178]} scale={[2.078, 3.449, 2.078]} />
    </group>
  )
}

useGLTF.preload('/models/5_8_Shelf.gltf')
