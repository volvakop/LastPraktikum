// import React, {useEffect, useRef,useState} from "react";

// const HitungRender = () => {
//     const [inputValue,setInputValue] = useState("");
//     const count = useRef(0);

//     useEffect(()=>{
//         count.current = count.current + 1;
//     })
//     console.log(count.current)

//     return(
//         <>
//             <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//         />
//         <h1>Render count : {(count.current)-1}</h1>
//     </>

//     )
// }

// export default HitungRender

import React, { useRef } from "react";

const HitungRender = () => {
    const inputRef= useRef(document.createElement("input"));
    const inputFocus = () => {
        inputRef.current.focus();
    }
    return (
        <div>
            <input ref={inputRef} />
            <button onClick={inputFocus}>Focus on the Input</button>
        </div>
    )
}


export default HitungRender
