"use client"

import {Button} from "@nextui-org/button";

export default function Ajout(props: {
  label: string, 
  action: ()=> void
}) {


  return (

    <div key="controls" className="p-2"> 

      <Button onPress={props.action} color="primary">{props.label}</Button>

      </div>
  );
}
