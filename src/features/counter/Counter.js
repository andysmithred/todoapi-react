import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  decrement,
  selectCount,
  selectStatus,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {

  //console.log(incrementByAmount(23));

  const dispatch = useDispatch();
  let counter = useSelector(selectCount);
  let status = useSelector(selectStatus);
  const [incrementAmount, setIncrementAmount] = useState("2");
  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{counter}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        ></input>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <span className={styles.value}>{status}</span>
      </div>
    </div>
  );
}
