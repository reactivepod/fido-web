import React from 'react';

const Countries = ({ countries, handleCountriesChange }) => {
  return (
    <section className="countries tk-brandon-grotesque">
        <label>Countries
          <select multiple={true} value={countries} onChange={handleCountriesChange}>
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
        </label>
    </section>
  );
}

export default Countries;
