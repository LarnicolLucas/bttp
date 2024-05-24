"use client"

import {useState} from "react"
import {params} from "./init"

import Production from "./production/production";
import { createMachines } from "./utils/createMachines";

export default function Home() {


  const [tresor, setTresor] = useState(params.tresor);
  const [machines, setMachines] = useState(params.capital_constant.machines);
  const [salaries, setSalaries] = useState(params.salaries);

  console.log(machines)

  const calculProductivite = (array : {productivite: number}[])=> array.reduce((acc, cur)=> acc + cur.productivite ,0 );

  return (
    <div className="p-2">

      <div key="controls" className="p-2"> 

        <button onClick={()=> setMachines(machines.concat(createMachines(1)))}>Créer une machine de niveau 1</button>

      </div>

      <div key="trésor" className="p-2"> 

        {tresor}

      </div>

      <div key="usine" className="p-2">

        <div key="production" className="p-2">

          <Production name="machines" productivite={calculProductivite(machines)} label="machines" />
          <Production name="salaries" productivite={calculProductivite(salaries)} label="salaries" />

        </div>

      </div>

    </div>
  );
}
