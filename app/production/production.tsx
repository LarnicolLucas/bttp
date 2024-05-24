export default function Production(props: {
  
  label: string, 
  productivite: number,
  name: string

}) {

  const calculProductivite = (array : {productivite: number}[])=> array.reduce((acc, cur)=> acc + cur.productivite ,0 );

  return (<div key={props.name} className="p-2">

    Production {props.label} : {props.productivite}/jour

  </div>);
}
