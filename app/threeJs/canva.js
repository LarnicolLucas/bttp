"use client"

import { Canvas } from '@react-three/fiber'
import { useState } from 'react';
import Box from "./box"

export default function Canva(props) {

  const [isForward, setisForward] = useState(true);

  const togglePosition = (fnArrive)=> (state)=> (pos, min, max) => {
    
    if(parseInt(pos) >= min) {state[1](true); return true}
    if(parseInt(pos) === max) {state[1](false); fnArrive(); return false}
    if(parseInt(pos) < max) {state[1](false); return false}
    return state[0]
  };

  const togglePositionEvent = togglePosition(props.venteEvent);
  const setDirection = togglePositionEvent([isForward, setisForward]);

  const params = {
    distance: -50,
    size_distributeur: [1, 1, 1],
    size_moyen_de_production : [2, 2, 2],
    vitesse: 20
  }

  return <Canvas 
  orthographic
    camera={{
      position: [20, 20, 20], 
      zoom: 15
    }}
    >
    <ambientLight intensity={Math.PI / 2} />
    <spotLight position={[20, 60, 20]} angle={0.5} penumbra={1} decay={0} intensity={Math.PI/2} />
    <pointLight position={[-10, 4, -10]} decay={0} intensity={Math.PI/2} />

    <Box
      boxGeometrie={params.size_distributeur}
      position={[0,0,0]}

      //quand le navigateur n'est pas ouvert, setDirection ne s'active plus ??
      frame={(meshRef)=> (state, delta) => setDirection(meshRef.current.position.x, 0, params.distance) ? 
        meshRef.current.position.x -= delta*params.vitesse : 
        meshRef.current.position.x += delta*params.vitesse
      }
    />
    <Box 
      position={[params.distance, 0, 0]}
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

