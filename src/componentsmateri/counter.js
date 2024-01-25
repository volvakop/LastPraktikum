import React, {useState} from "react";
import "../boxmodel/counter.css"

const Counter = () => {
    const [hitung, sethitung] = useState(0);

    const TambahState = () => {
        sethitung(hitung + 1)
    }
    const kurangState = () => {
        sethitung(hitung - 1)
    }

    return (
        <div>
            <p>ditambah {hitung} kali</p>
            <button onClick={TambahState}>Tambah</button>
            <button onClick={kurangState}>kurang</button>
        </div>
    )
}
export default Counter;