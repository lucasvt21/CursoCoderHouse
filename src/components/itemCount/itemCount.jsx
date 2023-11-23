import React, { useState } from 'react';

const ItemCount = ({ stock }) => {
    const [count, setCount] = useState(1);

    const sumar = () => {
    count < stock && setCount(count + 1);
    };

    const restar = () => {
        count > 1 && setCount(count - 1);
    };

    return (
        <div>
            <button onClick={sumar}>+</button>
            <span>{count}</span>
            <button onClick={restar}>-</button>
        </div>
    );
};

export default ItemCount;
