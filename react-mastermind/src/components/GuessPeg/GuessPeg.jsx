import React from 'react';
import styles from './GuessPeg.module.css'

const GuessPeg = ({ color }) => (
  <div className={styles.GuessPeg} style={{ backgroundColor: color }}>
    
  </div>
);

export default GuessPeg;
