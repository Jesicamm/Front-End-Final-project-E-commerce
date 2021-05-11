import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import Header from '../../components/Header/Header';


const Cart = (props) => {

    const [listToBuy, setListToBuy] = useState([])

    const removeProduct = (element)=>{
        console.log(element)
        const newList = listToBuy.filter(product => {
            console.log(element)
            return product._id != element
        });
       
        setListToBuy(newList)
        localStorage.setItem("productCart", JSON.stringify(newList));  
    }

    useEffect( ()=>{
        const parseObject = JSON.parse(localStorage.getItem("productCart"))
        setListToBuy(parseObject)
    },[]) 

    const buy = ()=> {
        alert('Pedido realizado con éxito!');
    } 

    return (
        <div className="content-header-user-cart">
           <Header/>
           <div className='cart-container'>
               <div className="cart-user-container">
                    <h3>Mi Pedido</h3>
                    {listToBuy.length <= 0 ? 
                        <p>No tienes ningun producto en el carrito</p>
                        :
                    <ul className="list-container">
                      {  
                    listToBuy.map( (product, key)=>{
                    return (
                      <li className="list" key={key}>
                          <div className="product-name-container">
                              <p>{product.name}</p>
                          </div>
                         <div className="product-img-container">
                            <img className="product" src={product.posterUrl} alt="imagenes"/> 
                         </div>
                         <div className="product-price-container">
                            <p>{product.price} €</p>
                         </div>
                         <div onClick={() => removeProduct(product._id)}><FontAwesomeIcon icon={faTrashAlt}/></div>
              </li>)
                })}
        </ul>}
        
            <div className="footer-cart-container">
            
                <div className="cart-total-price">
                    <p>TOTAL: {listToBuy?.reduce((total, product) => total + product.price, 0)}€</p>
                </div>

                <button className="buy-cart-btn" onClick={buy}>Comprar</button> 
             </div>
               </div>
             
           </div>
       
           
        </div>
    )
}



export default connect()(Cart);