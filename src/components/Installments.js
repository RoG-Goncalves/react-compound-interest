import React from 'react';
import Installment from './Installment';
import css from './installments.module.css';

export default function Installments({ term }) {
  return (
    <div className={css.container}>
      {term.map(({ id, total, initialCapital }) => {
        return (
          <Installment
            key={id}
            id={id}
            total={total}
            initialCapital={initialCapital}
          />
        );
      })}
    </div>
  );
}
