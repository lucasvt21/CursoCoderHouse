
import ItemCount from '../itemCount/itemCount';
import styles from './styles.module.css'

export const ItemDetail = ({ description, img, price, stock, name }) => {
    const onAdd = (items) => {
        alert(`Se agrego ${items} al carrito`)
    }

    return (
        <div className={styles.cardContainer}>
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                    <img src={img} alt="" />
                    <p className="card-text">{description}</p>
                    <p> Precio: ${price}</p>
                    <p>stock: {stock}</p>
                    <ItemCount stock={stock}/>
                </div>
            </div>
        </div>
    );
};