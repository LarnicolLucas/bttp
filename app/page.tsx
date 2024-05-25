"use client"

//Hooks
import {useState, useEffect} from "react"
import {useClock} from "@/hooks/clock"
//Params
import {params} from "./init"
//Components
import Production from "./production/production";
import Ajout from "./controls/ajout";
//Utils
import { createMoyenProduction, createMachines } from "./utils/createProd";

export default function Home() {


  const [tresor, setTresor] = useState(params.tresor);
  const [machines, setMachines] = useState(params.capital_constant.machines);
  const [salaries, setSalaries] = useState(params.salaries);

  const calculProductivite = (array : {productivite: number}[])=> array.reduce((acc, cur)=> acc + cur.productivite ,0 );
  const totalCout = (list: {cout: number}[]) => list.reduce((acc, cur)=> acc + cur.cout , 0);

  //Creation de moyen de production
  const createProdMachine = createMoyenProduction([machines, setMachines]);
  const createMachineNiveau1 = createProdMachine(createMachines(1));

  //Clock
  const clock = useClock(2);

  useEffect(()=> {

    setTresor(tresor - totalCout(machines) - totalCout(salaries))

  }, [clock])


  //const couts = totalCout(machines) + totalCout(salaries);

  return (
    <div className="p-2">

      <Ajout label="Créer une machine de niveau 1" action={()=> createMachineNiveau1()}/>

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
