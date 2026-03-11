'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Octahedron({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.z = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} position={position}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
}

function Torus({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
  });

  return (
    <Float speed={speed * 0.8} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.4, 0.12, 16, 32]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

function IcoSphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.6, 1]} />
        <MeshDistortMaterial
          color={color}
          wireframe
          transparent
          opacity={0.25}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function WobblySphere({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh position={position} scale={0.6}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshWobbleMaterial
          color={color}
          wireframe
          transparent
          opacity={0.2}
          factor={0.6}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function Box({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
    ref.current.rotation.y = state.clock.elapsedTime * speed * 0.25;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#00d4aa" />
        <pointLight position={[-5, -5, 5]} intensity={0.3} color="#6366f1" />

        <Octahedron position={[-3.5, 2, -1]} color="#00d4aa" speed={1.2} />
        <Octahedron position={[3.8, -1.5, -2]} color="#6366f1" speed={0.8} />
        <Torus position={[3, 2.5, -1.5]} color="#00d4aa" speed={1} />
        <Torus position={[-3, -2, -1]} color="#0066cc" speed={1.3} />
        <IcoSphere position={[-1.5, -2.5, -2]} color="#00d4aa" />
        <WobblySphere position={[2, 0.5, -3]} color="#6366f1" />
        <Box position={[-4, -0.5, -2.5]} color="#00d4aa" speed={0.7} />
        <Box position={[4.5, 1, -1.5]} color="#0066cc" speed={1.1} />
      </Canvas>
    </div>
  );
}
