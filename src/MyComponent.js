// import React, { useEffect, useState } from "react"
// import './boxmodel/app.css'

// export function MyComponent() {
//     const [data, setData] = useState(null)

//     useEffect(() => {
//         fetch("http://belajaroracle.com/api/hrapi/employees/read.php")
//         .then(response => response.json())
//         .then(json => setData(json))
//     }, [])

//     if (!data) {
//         return <p>Loading...</p>
//     }

//     return (
//         <ul>
//             {data.map(item => (
//                 <li key={item.EMPLOYEE_ID}className="name-box">{item.FIRST_NAME}</li>

//             ))}
//         </ul>
//     )

// }


import { useState, useEffect } from "react";

export function Muter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    return <h1>Saya Sudah berputar {count} Kali!</h1>;
}