import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

export const InputPlus = ({ onAdd }) => {

    const [value, setValue] = useState("");

    const memo = useCallback(() => {
        onAdd(value);
        setValue("");
    }, [value])

    return (
        <div className={styles.inputPlus}>
            <input
                value={value}
                type="text"
                className={styles.inputPlusValue}
                placeholder="Type here..."
                onChange={(event) => {
                    setValue(event.target.value)
                }}
                onKeyDown={(key) => {
                    if (key.key === "Enter") {
                        memo()
                    }
                }}
            />
            <button
                onClick={() => {
                    memo()
                }}
                aria-label="Add"
                className={styles.inputPlusButton}
            />
        </div>
    );
}
