'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';

function CoreShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <TorusKnot ref={meshRef} args={[1, 0.3, 128, 16]}>
      <MeshTransmissionMaterial
        backside
        thickness={0.5}
        roughness={0.1}
        chromaticAberration={0.6}
        anisotropicBlur={0.3}
        wireframe={false}
        transparent
        opacity={0.85}
        color="#0326FC"
        metalness={0.5}
      />
    </TorusKnot>
  );
}

function ParticleRing() {
  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 2 + Math.random() * 1.5;
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#0326FC" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export default function GeometricShapeScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#0326FC" />
        <CoreShape />
        <ParticleRing />
      </Canvas>
    </div>
  );
}
