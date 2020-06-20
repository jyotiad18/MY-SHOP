import React, { useContext } from "react";
import SessionContext from '../../context/session/sessioncontext';

const ShoppingCart = () => {
    const { shoppingList, totalProduct, totalAmount, deleteShoppingCart } = useContext(SessionContext);
    const onDeleteClick = (e) => {
        e.preventDefault();
        deleteShoppingCart(e.target.id);
    }
 
    return (
        <div className="card">
            <div className="card-body">
                <h5 class="card-title">Shopping List</h5>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Prooduct</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {                        
                            totalProduct > 0 ?
                                shoppingList.map((s, i) => (
                                    <tr key={i}>
                                        <th scope="row">
                                            <img className="shoppinglist-img" src={require(`../../images/${s.image}`)} />
                                        </th>
                                        <td>{s.name}</td>
                                        <td>{s.quantity}</td>
                                        <td>$ {s.price}</td>
                                        <td>
                                            <i class="fa fa-trash" id={s.item_id} onClick={onDeleteClick}></i>
                                            <a href={"/product/"+s.product_id}><i class="fa fa-info-circle"></i></a>
                                        </td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <th colSpan="4" scope="row">
                                        Not Found.
                                    </th>
                                </tr>
                        }
                        {
                            totalAmount > 0 ?
                                <tr>
                                    <th colSpan="3" scope="row">
                                        SubTotal
                                        </th>
                                    <td>$ {totalAmount}</td>
                                    <td>
                                    </td>
                                </tr>
                                : ""
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ShoppingCart;