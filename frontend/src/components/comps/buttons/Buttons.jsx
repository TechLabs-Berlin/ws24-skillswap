import React from 'react';
import styles from './Buttons.css';

const Button = ({ size, state, onClick, children }) => {
  const className = `${styles.button} ${styles[size]} ${styles[state]}`;

  return <button className={className} onClick={onClick}>{children}</button>;
};

export default Buttons;