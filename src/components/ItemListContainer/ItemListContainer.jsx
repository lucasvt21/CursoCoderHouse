import React from 'react';
import styles from "./styles.module.css";

const ItemListContainer = (props) => {
    return (
        <h1 className={styles.titulo}>{props.greeting}</h1>
    );
};

export default ItemListContainer;