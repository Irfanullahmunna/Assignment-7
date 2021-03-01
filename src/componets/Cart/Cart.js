import React from 'react';
import SelectPlayerName from '../SelectPlayerName/SelectPlayerName';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, salary) => total+salary.salary, 0);
    return (
        <div className="cart-item">
            <h3 className="p-2">Team Member: {cart.length}</h3>
            <h3 className="p-2">Selected Player List: </h3>
            <div>
                {
                    cart.map(player => <SelectPlayerName player={player} key={player.id}></SelectPlayerName>)
                }
            </div>
            <h3 className="p-2">Total Salary: {total}</h3>
        </div>
    );
};

export default Cart;