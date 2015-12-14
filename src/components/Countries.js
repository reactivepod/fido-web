import React from 'react';

const Countries = ({ data, handleCountriesChange }) => {
  return (
    <select value={data.join(',')} onChange={handleCountriesChange}>
      <option value="us,de,gb,ca,at,au,se,nl,br,mx,ru,gr,ar,za,ch,pt">iTunes worldwide</option>
      <option value="us">United States of America</option>
      <option value="de">Germany</option>
      <option value="gb">Great Britain</option>
      <option value="ca">Canada</option>
      <option value="at">Austria</option>
      <option value="au">Australia</option>
      <option value="se">Sweden</option>
      <option value="nl">Netherlands</option>
      <option value="br">Brasil</option>
      <option value="mx">Mexico</option>
      <option value="ru">Russia</option>
      <option value="gr">Greece</option>
      <option value="ar">Argentina</option>
      <option value="za">South Africa</option>
      <option value="ch">Switzerland</option>
      <option value="pt">Portugal</option>
    </select>
  );
}



export default Countries;
