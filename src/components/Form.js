import React from 'react';

export default function Form({
  onChangeCapital,
  onChangeInterest,
  onChangeTime,
}) {
  const handleCapitalChange = (event) => {
    onChangeCapital(event.target.value);
  };
  const handleInterestChange = (event) => {
    onChangeInterest(event.target.value / 100);
  };
  const handleTimeChange = (event) => {
    onChangeTime(event.target.value);
  };
  return (
    <div>
      <label>
        Capital Inicial
        <input
          type="number"
          onChange={handleCapitalChange}
          description="capital"
          step="100"
        ></input>
      </label>
      <label>
        Juros{' '}
        <input
          type="number"
          onChange={handleInterestChange}
          description="juros"
          step="0.1"
        ></input>
      </label>
      <label>
        Tempo de aplicação{' '}
        <input
          type="number"
          onChange={handleTimeChange}
          description="tempo"
          min="0"
        ></input>
      </label>
    </div>
  );
}
