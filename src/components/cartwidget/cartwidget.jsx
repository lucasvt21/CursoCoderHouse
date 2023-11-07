import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import styles from "./styles.module.css";

const CartWidget = () => {
    return (
        <Button>
            <i className="bi bi-cart-fill"></i>
            <Badge >9</Badge>
        </Button>
    );
}

export default CartWidget;
