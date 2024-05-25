"use client"

export default function Ajout(props: {
  label: string, 
  action: ()=> void
}) {


  return (

    <div key="controls" className="p-2"> 

      <button onClick={props.action}>{props.label}</button>

      </div>
  );
}
