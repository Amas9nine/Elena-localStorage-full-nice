import React, { useState } from 'react';
import { useLayoutEffect } from 'react';
import Header from '../components/Header/Header';

import { InputPlus } from '../components/InputPlus';
import { InputTask } from '../components/InputTask';

import styles from './index.module.scss';

export const generateId = () => (
  Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
);

export const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("todo6")) || []);

  useLayoutEffect(() => {
    localStorage.setItem("todo6", JSON.stringify(tasks))
  }, [tasks])

  const onAdd = (title) => {
    if (title) {
      setTasks([{ id: generateId(), title }, ...tasks]);
    }
  }

  const onEdit = (id, value) => {
    setTasks(tasks.map(item => item.id === id ? {
      ...item,
      title: value
    } : item))
  }

  const onRemove = (id) => {
    setTasks(tasks.filter(item => item.id !== id));
  }

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>
        <Header tasks={tasks} />
      </h1>
      <section className={styles.articleSection}>
        <InputPlus onAdd={onAdd} />
      </section>
      <section className={styles.articleSection}>
        {
          tasks.length ? (null) : (<p className={styles.articleText}>There is no one task.</p>)
        }
        {tasks.map((task) => (
          <InputTask
            key={task.id}
            title={task.title}
            id={task.id}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
      </section>
    </article >
  );
}