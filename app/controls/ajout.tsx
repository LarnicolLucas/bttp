"use client"

export default function Ajout(props: {
  label: string, 
  state: [
    [], 
    Function
  ],
  objectToAdd: object
}) {


  return (

    <div key="controls" className="p-2"> 

      <button onClick={()=> props.state[1](props.state[0].concat(props.objectToAdd))}>{props.label}</button>

      </div>
  );
}
