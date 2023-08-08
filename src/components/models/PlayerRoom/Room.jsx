/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 5_1_Room.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

export function Room(props) {
  const { nodes, materials } = useGLTF('/models/5_1_Room.gltf')
  return (
    <group {...props} dispose={null}>
      <directionalLight intensity={0.5} decay={20} color="#eca864" position={[-19.024, 13.421, 2.911]} rotation={[-0.622, -1.35, 1.038]} scale={[0.999, 0.926, 0.867]} />
      <PerspectiveCamera makeDefault={false} far={100} near={0.1} fov={40.063} position={[-2.516, 6.714, 10.174]} rotation={[-2.314, 0.682, 2.483]} scale={[1, 0.828, 0.96]} />
      <directionalLight intensity={0.5} decay={2} color="#d8b58d" position={[-23.136, 16.344, 3.321]} rotation={[-1.18, -1.286, 0.415]} scale={[0.999, 0.926, 0.867]} />
      <pointLight intensity={1} decay={2} color="#ff8f4f" position={[-9.196, 1.227, -4.646]} rotation={[-Math.PI / 2, 0, 0]} />
      <group position={[-28.312, 0.15, -13.109]}>
        <mesh geometry={nodes.Cube.geometry} material={materials['Material.017']} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Material.064']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Material.046']} />
        <mesh geometry={nodes.Cube_3.geometry} material={materials['Material.019']} />
        <mesh geometry={nodes.Cube_4.geometry} material={materials['Material.018']} />
        <mesh geometry={nodes.Cube_5.geometry} material={materials['Material.073']} />
        <mesh geometry={nodes.Cube_6.geometry} material={materials['Material.072']} />
        <mesh geometry={nodes.Cube_7.geometry} material={materials['Material.044']} />
        <mesh geometry={nodes.Cube_8.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Cube_9.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube_10.geometry} material={materials['Material.016']} />
        <mesh geometry={nodes.Cube_11.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Cube_12.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube_13.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Cube_14.geometry} material={materials['Material.071']} />
        <mesh geometry={nodes.Cube_15.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Cube_16.geometry} material={materials['Material #2.003']} />
        <mesh geometry={nodes.Cube_17.geometry} material={materials['Material.035']} />
        <mesh geometry={nodes.Cube_18.geometry} material={materials['Material.032']} />
        <mesh geometry={nodes.Cube_19.geometry} material={materials['Material.007']} />
        <mesh geometry={nodes.Cube_20.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cube_21.geometry} material={materials['Material.034']} />
        <mesh geometry={nodes.Cube_22.geometry} material={materials['Material #2.002']} />
        <mesh geometry={nodes.Cube_23.geometry} material={materials['Material.039']} />
        <mesh geometry={nodes.Cube_24.geometry} material={materials['Material.042']} />
        <mesh geometry={nodes.Cube_25.geometry} material={materials['Material.043']} />
        <mesh geometry={nodes.Cube_26.geometry} material={materials['Material.040']} />
        <mesh geometry={nodes.Cube_27.geometry} material={materials['Material.041']} />
        <mesh geometry={nodes.Cube_28.geometry} material={materials['Material.050']} />
        <mesh geometry={nodes.Cube_29.geometry} material={materials['Material.051']} />
        <mesh geometry={nodes.Cube_30.geometry} material={materials['Material.049']} />
        <mesh geometry={nodes.Cube_31.geometry} material={materials['Material.008']} />
        <mesh geometry={nodes.Cube_32.geometry} material={materials['Material.028']} />
        <mesh geometry={nodes.Cube_33.geometry} material={materials['Material.029']} />
        <mesh geometry={nodes.Cube_34.geometry} material={materials['Material.030']} />
        <mesh geometry={nodes.Cube_35.geometry} material={materials['Material.025']} />
        <mesh geometry={nodes.Cube_36.geometry} material={materials['Material #2']} />
        <mesh geometry={nodes.Cube_37.geometry} material={materials['Material #2.001']} />
        <mesh geometry={nodes.Cube_38.geometry} material={materials['Material.023']} />
        <mesh geometry={nodes.Cube_39.geometry} material={materials['Material.024']} />
        <mesh geometry={nodes.Cube_40.geometry} material={materials['Material.031']} />
        <mesh geometry={nodes.Cube_41.geometry} material={materials.Potted_plants} />
        <mesh geometry={nodes.Cube_42.geometry} material={materials['Material.033']} />
        <mesh geometry={nodes.Cube_43.geometry} material={materials['Material.045']} />
        <mesh geometry={nodes.Cube_44.geometry} material={materials['Potted_plants.001']} />
        <mesh geometry={nodes.Cube_45.geometry} material={materials['Potted_plants.002']} />
        <mesh geometry={nodes.Cube_46.geometry} material={materials['Potted_plants.003']} />
        <mesh geometry={nodes.Cube_47.geometry} material={materials['Material.036']} />
        <mesh geometry={nodes.Cube_48.geometry} material={materials['Material.037']} />
        <mesh geometry={nodes.Cube_49.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.Cube_50.geometry} material={materials['Material.027']} />
        <mesh geometry={nodes.Cube_51.geometry} material={materials['Material.015']} />
        <mesh geometry={nodes.Cube_52.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Cube_53.geometry} material={materials['Material.062']} />
        <mesh geometry={nodes.Cube_54.geometry} material={materials['Material.063']} />
        <mesh geometry={nodes.Cube_55.geometry} material={materials['Material.020']} />
        <mesh geometry={nodes.Cube_56.geometry} material={materials['Material.047']} />
        <mesh geometry={nodes.Cube_57.geometry} material={materials['Material.048']} />
        <mesh geometry={nodes.Cube_58.geometry} material={materials['Material.052']} />
        <mesh geometry={nodes.Cube_59.geometry} material={materials['Material.053']} />
        <mesh geometry={nodes.Cube_60.geometry} material={materials['Material.054']} />
        <mesh geometry={nodes.Cube_61.geometry} material={materials['Material.057']} />
        <mesh geometry={nodes.Cube_62.geometry} material={materials['Material.056']} />
        <mesh geometry={nodes.Cube_63.geometry} material={materials['Material.058']} />
        <mesh geometry={nodes.Cube_64.geometry} material={materials['Material.059']} />
        <mesh geometry={nodes.Cube_65.geometry} material={materials['Material.068']} />
        <mesh geometry={nodes.Cube_66.geometry} material={materials['Material.066']} />
        <mesh geometry={nodes.Cube_67.geometry} material={materials['Material.067']} />
        <mesh geometry={nodes.Cube_68.geometry} material={materials['Material.038']} />
        <mesh geometry={nodes.Cube_69.geometry} material={materials['Material.060']} />
        <mesh geometry={nodes.Cube_70.geometry} material={materials['Material.065']} />
        <mesh geometry={nodes.Cube_71.geometry} material={materials['Material.075']} />
        <mesh geometry={nodes.Cube_72.geometry} material={materials['Material.076']} />
        <mesh geometry={nodes.Cube_73.geometry} material={materials['Material.077']} />
        <mesh geometry={nodes.Cube_74.geometry} material={materials['Material.078']} />
        <mesh geometry={nodes.Cube_75.geometry} material={materials['Material.080']} />
        <mesh geometry={nodes.Cube_76.geometry} material={materials['Material.081']} />
        <mesh geometry={nodes.Cube_77.geometry} material={materials['Material.082']} />
        <mesh geometry={nodes.Cube_78.geometry} material={materials['Material.083']} />
        <mesh geometry={nodes.Cube_79.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.Will.geometry} material={materials['Material.004']} position={[9.476, 5.046, -4.77]} rotation={[0, 1.436, 0]} scale={[0.856, 0.004, 1.201]} />
      <group position={[-4.061, 5.39, 11.349]} rotation={[0, -0.179, 0]}>
        <mesh geometry={nodes.Cube040.geometry} material={materials['Material.069']} />
        <mesh geometry={nodes.Cube040_1.geometry} material={materials['Material.070']} />
      </group>
      <group position={[-2.157, 9.262, -14.139]}>
        <mesh geometry={nodes.Cube066.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube066_1.geometry} material={materials['Material.003']} />
      </group>
      <group position={[-6.713, 0.45, -5.771]} rotation={[Math.PI / 2, 0, -0.365]} scale={[0.152, 0.168, 0.168]}>
        <mesh geometry={nodes.book.geometry} material={materials.mia_material_x2SG} />
        <mesh geometry={nodes.book_1.geometry} material={materials['Material.055']} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/5_1_Room.gltf')