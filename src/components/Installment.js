import React from 'react';
import { formatNumber, getPercent, formatAmount } from './Formatters';

export default function Installment({ id, total, initialCapital }) {
  const difference = (total - initialCapital).toFixed(2);
  const diffStyles = difference < 0 ? styles.negative : styles.positive;

  const formattedNumber = getPercent(total, initialCapital);
  const formattedStyles =
    formattedNumber < 1 ? styles.resultNegative : styles.resultPositive;
  const totalStyles =
    difference < 0 ? styles.resultNegative : styles.resultPositive;

  return (
    <div key={id} style={styles.installment} className="card">
      <div style={{ fontWeight: 'bold' }}>Mês {id}</div>
      <div style={totalStyles}>{formatAmount(total)}</div>
      <div style={diffStyles}>
        {difference < 0 ? '' : '+'}
        {formatAmount(difference)}
      </div>
      <div style={formattedStyles}>
        {formatNumber(formattedNumber * 100 - 100)}%
      </div>
    </div>
  );
}

const styles = {
  installment: {
    border: 'solid 1px lightgray',
    padding: '10px',
    textAlign: 'left',
  },
  positive: {
    color: 'green',
    fontWeight: 'bold',
  },
  negative: {
    color: 'red',
    fontWeight: 'bold',
  },
  resultPositive: {
    color: 'blue',
    fontWeight: 'bold',
  },
  resultNegative: {
    color: 'orange',
    fontWeight: 'bold',
  },
};
