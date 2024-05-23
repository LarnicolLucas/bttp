"use client"

import {useState} from "react"
import {params, dataProdutivite} from "./init"

export default function Home() {


  const [tresor, setTresor] = useState(params.tresor);

  const calculProductivite = (data: number[]) => (nombre: number, niveau: number)=> nombre * data[niveau];

  const calculProductiviteMachine = calculProductivite(dataProdutivite.machines);
  const calculProductiviteSalaries = calculProductivite(dataProdutivite.salaries);

  


  return (
    <div className="p-2">

      <div key="trésor" className="p-2">

        {tresor}

      </div>

      <div key="usine" className="p-2">

        <div key="production" className="p-2">

          {tresor}

          <div key="production" className="p-2">

            {tresor}

          </div>

        </div>

      </div>

    </div>
  );
}
