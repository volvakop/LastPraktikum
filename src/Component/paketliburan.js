import React from 'react';

function PaketLiburan({ namaPaket, harga, deskripsi }) {
  return (
    <div>
      <h3>{namaPaket}</h3>
      <p>{deskripsi}</p>
      <p>Harga: ${harga}</p>
    </div>
  );
}

export default PaketLiburan;