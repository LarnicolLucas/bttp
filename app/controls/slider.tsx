"use client"

import React from "react";
import {Slider} from "@nextui-org/react";

export default function SliderSalaire(props: {state: [number, (value: number | number[])=> void]}) {
  return (
    <Slider 
      label="Prix de vente des marchandises" 
      step={10} 
      maxValue={500} 
      minValue={10} 
      defaultValue={500}
      className="max-w-md"

      value={props.state[0]}
      onChange={props.state[1]}
    />
  );
}
