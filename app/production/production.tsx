export default function Production(props: {
  
  label: string, 
  productivite: number,
  name: string

}) {

  return (<div key={props.name}>

    Production {props.label} : {props.productivite}/jour

  </div>);
}
