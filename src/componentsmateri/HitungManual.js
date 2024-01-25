
import React, {useEffect,useState} from "react";
// import "./App.css"

const HitungManual = () => {
    const [count,setCount] = useState(0);
    const [kalkulasi,setKalkulasi] = useState(0);

    useEffect(() =>{
        setKalkulasi(()=> count * 2);
    },[count]);
    return (
        <div>
            <p>count : {count}</p>
            <button onClick={() => setCount((c) => c +1)}>+</button>
            <p>Calculation : {kalkulasi}</p>
        </div>
    );
}
export default HitungManual;