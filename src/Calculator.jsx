import { useMemo } from 'react';
import Calculation from './Calculation';
import styles from './Calculator.module.css';

function Calculator({ operand }) {
  const addOne = useMemo(() => {
    return operand + 1;
  }, [operand]);

  const cubed = useMemo(() => {
    return operand ** 3;
  }, [operand]);

  const multiplyByThree = useMemo(() => {
    return operand * 3;
  }, [operand]);

  const squareRoot = useMemo(() => {
    return Math.sqrt(operand);
  }, [operand]);

  return (
    <>
      <ul className={styles.calculatorList}>
        <Calculation result={addOne} title="Add 1" />
        <Calculation result={cubed} title="Cubed" />
        <Calculation result={multiplyByThree} title="Multiply by 3" />
        <Calculation result={squareRoot} title="Square Root" />
      </ul>
    </>
  );
}

export default Calculator;
