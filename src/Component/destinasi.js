import React from 'react';

function Destinasi({ namaDestinasi, deskripsi }) {
  return (
    <div>
      <h3>{namaDestinasi}</h3>
      <p>{deskripsi}</p>
    </div>
  );
}

export default Destinasi;