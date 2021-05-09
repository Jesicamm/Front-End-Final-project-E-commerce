import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

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

    return (
        <div className="content-header-user-cart">
           <Header/>
           <div className='cart-container'>
               <div className="cart-user-container">
               <h3>Mi Pedido</h3>
               <ul className="list-container">{
                listToBuy.map( (product, key)=>{
                return (
                <li className="list" key={key}>
                     <button onClick={() => removeProduct(product._id)}>x</button>
                    <p>{product.name}</p>
                     <div className="product-img-container">
                        <img className="product" src={product.posterUrl} alt="imagenes"/> 
                    </div>
                    <p>{product.price} $</p>
                  
                </li>)
            })
        }</ul>

        <p>{listToBuy.reduce((total, product) => total + product.price, 0)}$</p>
            
                    
        
              
        <button className="buy-btn">Comprar</button> 
               </div>
             
           </div>
       
           
        </div>
    )
}



export default connect()(Cart);