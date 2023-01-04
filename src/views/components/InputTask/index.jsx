import React from 'react';
import { useState } from 'react';

import styles from './index.module.scss';

export const InputTask = ({ title, id, onRemove, onEdit }) => {
    const [value, setValue] = useState(title);
    const [check, setCheck] = useState(false);
    const [isEditMode, setEditMode] = useState(false);

    return (
        <div className={styles.inputTask}>
            <label className={styles.inputTaskLabel}>
                <input
                    checked={check}
                    type="checkbox"
                    className={styles.inputTaskCheckbox}
                    onChange={(event) => {
                        setCheck(event.target.checked)
                    }}
                />
                {
                    isEditMode ? (
                        <input
                            value={value}
                            onChange={(event) => {
                                setValue(event.target.value)
                            }}
                        />
                    ) :
                        (
                            <h3 className={check ? styles.checked : null}>{title}</h3>

                        )
                }
            </label>
            {
                isEditMode ? (
                    <button
                        onClick={() => {
                            setEditMode(false)
                            onEdit(id, value)
                        }}
                        aria-label="open"
                        className={styles.inputTaskSave}
                    />
                ) :
                    (
                        <button
                            onClick={() => {
                                setEditMode(true)
                            }}
                            aria-label="close"
                            className={styles.inputTaskEdit}
                        />
                    )
            }

            <button
                onClick={() => {
                    onRemove(id);
                }}
                aria-label="Remove"
                className={styles.inputTaskRemove}
            />
        </div >
    );
}
