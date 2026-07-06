'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Plane, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function DeviceFrame({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      meshRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position} scale={scale}>
        <RoundedBox args={[2.8, 1.8, 0.08]} radius={0.1} smoothness={4}>
          <meshStandardMaterial color="#111318" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <Plane args={[2.5, 1.5]} position={[0, 0, 0.05]}>
          <meshStandardMaterial color="#0a0b10" />
        </Plane>
        <Plane args={[2.5, 1.5]} position={[0, 0, 0.06]}>
          <meshBasicMaterial color="#0326FC" transparent opacity={0.05} />
        </Plane>
        <mesh position={[0, -0.95, 0]}>
          <boxGeometry args={[0.4, 0.06, 0.02]} />
          <meshStandardMaterial color="#111318" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

function PhoneFrame({ position, rotation, scale }: { position: [number, number, number]; rotation: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.4 + 1) * 0.05;
      meshRef.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime * 0.3 + 1) * 0.03;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
      <group position={position} scale={scale}>
        <RoundedBox args={[0.6, 1.2, 0.06]} radius={0.06} smoothness={4}>
          <meshStandardMaterial color="#111318" metalness={0.8} roughness={0.2} />
        </RoundedBox>
        <Plane args={[0.5, 1.05]} position={[0, 0, 0.04]}>
          <meshStandardMaterial color="#0a0b10" />
        </Plane>
        <mesh position={[0, -0.6, 0]}>
          <circleGeometry args={[0.03, 16]} />
          <meshStandardMaterial color="#111318" />
        </mesh>
      </group>
    </Float>
  );
}

function GridBackground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#05060A" />
    </mesh>
  );
}

export default function FloatingDevices() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={0.3} color="#0326FC" />
        <GridBackground />
        <DeviceFrame position={[0, 0.3, 0]} rotation={[0.1, -0.1, 0]} scale={0.6} />
        <PhoneFrame position={[1.8, -0.4, 0.5]} rotation={[0.2, 0.3, 0.1]} scale={0.8} />
        <PhoneFrame position={[-1.8, -0.2, 0.3]} rotation={[-0.1, -0.2, -0.1]} scale={0.7} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
