'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function Laptop() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 + 0.3;
    }
  });

  // Code-like lines on the screen
  const codeLines = useMemo(() => {
    const lines: { width: number; x: number; y: number; color: string }[] = [];
    const lineCount = 12;
    const startY = 0.35;
    const lineHeight = 0.06;

    for (let i = 0; i < lineCount; i++) {
      const indent = Math.random() > 0.6 ? 0.08 : Math.random() > 0.4 ? 0.04 : 0;
      const width = 0.15 + Math.random() * 0.35;
      const color = Math.random() > 0.7 ? '#00d4aa' : Math.random() > 0.5 ? '#6366f1' : '#4a5568';
      lines.push({
        width,
        x: -0.4 + indent + width / 2,
        y: startY - i * lineHeight,
        color,
      });
    }
    return lines;
  }, []);

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef} position={[0, -0.3, 0]}>
        {/* Screen */}
        <group position={[0, 0.65, -0.02]} rotation={[-0.1, 0, 0]}>
          {/* Screen bezel */}
          <RoundedBox args={[1.3, 0.9, 0.04]} radius={0.02} smoothness={4}>
            <meshStandardMaterial color="#1a1a25" metalness={0.8} roughness={0.3} />
          </RoundedBox>

          {/* Screen surface */}
          <mesh position={[0, 0, 0.021]}>
            <planeGeometry args={[1.15, 0.75]} />
            <meshStandardMaterial color="#0d1117" emissive="#050810" emissiveIntensity={0.3} />
          </mesh>

          {/* Code lines on screen */}
          {codeLines.map((line, i) => (
            <mesh key={i} position={[line.x, line.y, 0.025]}>
              <planeGeometry args={[line.width, 0.025]} />
              <meshBasicMaterial color={line.color} transparent opacity={0.7} />
            </mesh>
          ))}

          {/* Top bar of IDE */}
          <mesh position={[0, 0.345, 0.023]}>
            <planeGeometry args={[1.15, 0.04]} />
            <meshBasicMaterial color="#161b22" />
          </mesh>

          {/* Dots on top bar */}
          {[[-0.5, 0.345, 0.024], [-0.47, 0.345, 0.024], [-0.44, 0.345, 0.024]].map((pos, i) => (
            <mesh key={`dot-${i}`} position={pos as [number, number, number]}>
              <circleGeometry args={[0.008, 16]} />
              <meshBasicMaterial color={['#ff5f57', '#febc2e', '#28c840'][i]} />
            </mesh>
          ))}
        </group>

        {/* Keyboard base */}
        <group position={[0, 0.15, 0.3]} rotation={[1.4, 0, 0]}>
          <RoundedBox args={[1.3, 0.85, 0.04]} radius={0.02} smoothness={4}>
            <meshStandardMaterial color="#1a1a25" metalness={0.7} roughness={0.4} />
          </RoundedBox>

          {/* Keyboard keys */}
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => (
              <mesh
                key={`key-${row}-${col}`}
                position={[
                  -0.5 + col * 0.11,
                  0.25 - row * 0.12,
                  0.025,
                ]}
              >
                <planeGeometry args={[0.08, 0.08]} />
                <meshStandardMaterial
                  color="#252535"
                  metalness={0.3}
                  roughness={0.8}
                />
              </mesh>
            ))
          )}

          {/* Trackpad */}
          <mesh position={[0, -0.22, 0.025]}>
            <planeGeometry args={[0.4, 0.22]} />
            <meshStandardMaterial color="#222233" metalness={0.5} roughness={0.5} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function LaptopScene() {
  return (
    <div className="w-full h-[350px] sm:h-[420px]">
      <Canvas
        camera={{ position: [0, 0.5, 3], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#00d4aa" />
        <pointLight position={[-3, 2, 2]} intensity={0.5} color="#6366f1" />
        <spotLight
          position={[0, 5, 2]}
          intensity={0.6}
          angle={0.4}
          penumbra={1}
          color="#ffffff"
        />
        <Laptop />
      </Canvas>
    </div>
  );
}
