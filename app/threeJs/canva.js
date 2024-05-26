"use client"

import { Canvas } from '@react-three/fiber'
import { useState } from 'react';
import Box from "./box"

export default function Canva(props) {

  const [isForward, setisForward] = useState(true);

  const togglePosition = (fnArrive)=> (state)=> (pos, min, max) => {
    
    if(parseInt(pos) >= min) {state[1](true); return true}
    if(parseInt(pos) <= max) {state[1](false); fnArrive(); return false}
    return state[0]
  };

  const togglePositionEvent = togglePosition(props.venteEvent);
  const setDirection = togglePositionEvent([isForward, setisForward]);

  const params = {
    distance: -600,
    size_distributeur: [20, 20, 20],
    size_moyen_de_production : [40, 40, 40]
  }

  return <Canvas orthographic camera={{
    position: [20, 20, 20], 
    }}>
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[20, 70, 20]} angle={0.5} penumbra={1} intensity={Math.PI} />
    <pointLight position={[-10, 4, -10]} intensity={Math.PI} />
    <Box
      boxGeometrie={params.size_distributeur}
      position={[0, 0, 0]} 
      frame={(meshRef)=> (state, delta) => setDirection(meshRef.current.position.x, 0, -600) ? 
        meshRef.current.position.x -= delta*200 : 
        meshRef.current.position.x += delta*200
      }
    />
    <Box 
      position={[-600, 0, 0]}
      boxGeometrie={params.size_moyen_de_production}
      frame={(meshRef)=> ( state, delta)=> null}
    />
    <Box 
      position={[0, 0, 0]}
      boxGeometrie={params.size_moyen_de_production}
      frame={(meshRef)=> ( state, delta)=> null}
    />

  </Canvas>

}

