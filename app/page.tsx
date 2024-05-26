"use client"

//Hooks
import {useState, useEffect} from "react"
import {useClock} from "@/hooks/clock"
//Params
import {params} from "./init"
//Components
import Production from "./production/production";
import Ajout from "./controls/ajout";
import Canva from "./threeJs/canva";
//Utils
import { createMoyenProduction, createMachines } from "./utils/createProd";

export default function Home() {


  const [tresor, setTresor] = useState(params.tresor);

  //Vente
  const [prix_de_vente, setPrix_de_vente] = useState(params.prix_de_vente);
  const [nombre_distributeur, setNombre_istributeur] = useState(5);

  //Moyens de Productions
  const [machines, setMachines] = useState(params.capital_constant.machines);
  const [salaries, setSalaries] = useState(params.salaries);

  const calculProductivite = (array : {productivite: number}[])=> array.reduce((acc, cur)=> acc + cur.productivite ,0 );
  const totalCout = (list: {cout: number}[]) => list.reduce((acc, cur)=> acc + cur.cout , 0);

  //Creation de moyen de production
  const createProdMachine = createMoyenProduction([machines, setMachines]);
  const createMachineNiveau1 = createProdMachine(createMachines(1));

  //Opération de vente
  const venteEvent = (prix_de_vente: number, stateTresor: [number, (tresor: number)=> void]) => 
    ()=> stateTresor[1](stateTresor[0] + prix_de_vente)
  ;

  const venteEvent1= venteEvent(prix_de_vente, [tresor, setTresor]);

  //Clock
  const clock = useClock(2);

  useEffect(()=> {

    setTresor(tresor => tresor - totalCout(machines) - totalCout(salaries))

  }, [clock, machines, salaries]);

  return (
    <div className="relative h-screen">

      <header className="relative flex">

        <Ajout label="Créer une machine de niveau 1" action={()=> createMachineNiveau1()}/>

        <div key="trésor" className="p-2"> 

          {tresor} euros

        </div>

        <div key="prix_de_vente" className="p-2"> 

          {prix_de_vente} euros

        </div>


        <div key="usine" className="p-2">

          <div key="production" className="flex">

            <Production name="machines" productivite={calculProductivite(machines)} label="machines" />
            <Production name="salaries" productivite={calculProductivite(salaries)} label="salaries" />

          </div>

        </div>

      </header>

      <main className="h-full">
        <Canva venteEvent={venteEvent1}/>
      </main>

    </div>
  );
}
