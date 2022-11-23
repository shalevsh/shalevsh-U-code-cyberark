import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomIncrement, selectCount } from "./counterSlice";
import styles from "./Counter.module.css";

export function RandomCounter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    onClick={() => dispatch(randomIncrement())}
                >
                    RandomCounter
                </button>
            </div>
        </div>
    );
}
