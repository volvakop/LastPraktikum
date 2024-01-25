export function SingleProp(props) {
    return <h2>Satu Props : { props.merek }</h2>;
   }
   export function MultiProp(props) {
    return (
    <p>
    <h2>merek : { props.merek }</h2>
    <h2>model : { props.model }</h2>
    <h2>harga : { props.harga }</h2>
    </p>
    );
   }
   export function JSONProp(props) {
    const { mobil } = props;
    return (
    <p>
    <h2>merek : { mobil.merek }</h2>
    <h2>model : { mobil.model }</h2>
    <h2>harga : { mobil.harga }</h2>
    </p>
    );
   }
    
   