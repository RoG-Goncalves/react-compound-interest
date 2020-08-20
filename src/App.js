import React from 'react';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import Installments from './components/Installments';

export default function App() {
  const [initialCapital, setcapital] = useState(0);
  const [monthlyInterest, setinterest] = useState(0);
  const [initialTime, settime] = useState([]);
  const [term, setTerm] = useState([]);

  useEffect(() => {
    const getTerm = () => {
      const newTerms = [];

      if (initialCapital !== 0) {
        for (let i = 1; i <= initialTime; i++) {
          let total = initialCapital * Math.pow(1 + monthlyInterest, i);

          newTerms.push({
            id: i,
            total: total.toFixed(2),
            initialCapital,
          });
        }
      }
      setTerm(newTerms);
      console.log(newTerms);
    };
    getTerm();
  }, [initialCapital, monthlyInterest, initialTime]);

  const handleCapitalChange = (value) => {
    setcapital(value);
  };
  const handleInterestChange = (value) => {
    setinterest(value);
  };
  const handleTimeChange = (value) => {
    settime(value);
  };
  return (
    <div className="container center">
      <img src="./logo192.png" alt="Logo React" style={{ width: '80px' }} />
      <h4>Juros Compostos</h4>
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          Entre o capital inicial a ser aplicado, a taxa de juros compostos, o
          tempo de aplicação e nós calcularemos os ganhos (ou perdas...)
          mensais!
        </div>
      </div>
      <div className="card z-depth-2" style={{ padding: '10px' }}>
        <Form
          onChangeCapital={handleCapitalChange}
          onChangeInterest={handleInterestChange}
          onChangeTime={handleTimeChange}
        />{' '}
        <Installments term={term} />
      </div>
    </div>
  );
}
