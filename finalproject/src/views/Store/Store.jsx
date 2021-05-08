import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Store.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import Fruits from '../../Img/fruitsByColours.png'
import Vegetables from '../../Img/vegetablesByColours.jpg'
import Nuts from '../../Img/nutsbyColours.jpeg'
import { ADD_CART } from '../../redux/types/productTypes';




const Store = (props) => {
   
    console.log(props)
    const [productlist, setproductlist] = useState([]);
    const [filterProductlist, setFilterProductlist] = useState([]);
    const [productCart, setProductCart] = useState([]);

    useEffect(async () => {
        let resultProduct = await axios.get(`http://localhost:3002/products`);
        setproductlist(resultProduct.data);
        },[])
    
    const find = (element) => {
        const newList = productlist.filter(product => {
            return product.cathegory == element
        });
        setFilterProductlist(newList)
    }

    const addProduct = (id) => {
        const newProduct = filterProductlist.filter(product => {

            return product._id == id
            
        });
        setProductCart([...productCart, newProduct])
        let guardado = props.dispatch({ type: ADD_CART, payload: productCart });
        console.log(guardado)
        console.log(newProduct)
    }
      return (
         <div className='store-container'>
             <Header/>
             <div>
             <h2 className="title-cathegories">Todas las Categorías</h2>
             <div className="products-container">
                <div className="fruits-container" onClick={() => find("Fruit")}>
                    <p className="vegetables-title">Frutas</p>
                    <img className="fruit-img" src={Fruits} alt="image-cap"/>
                </div>

                <div className="vegetables-container" onClick={() => find("Vegetable")}>
                    <p className="vegetables-title">Verduras</p>
                    <img className="vegetable-img" src={Vegetables} alt="image-cap"/>
                </div>

                <div className="nuts-container" onClick={() => find("Nuts")}>
                    <p className="vegetables-title">Frutos secos</p>
                    <img className="nut-img" src={Nuts} alt="image-cap"/>
                </div>
            </div>
           <ul className="list-container">{
            filterProductlist.map( (product, key)=>{
                return (
                <li className="list" key={key}>
                    <p>{product.name}</p>
                    <p>{product.price} $</p>
                    {/* <img src={product.posterUrl} alt="imagenes"/> */}
                    <button onClick={() => {addProduct(product._id)}}>añadir</button>
                    
                </li>)
               
            })
           }</ul>
            </div>
         </div>
      )
   
};

/* const mapStateToProps = state => {
   return {
      user: state.user,
      token: state.token,
      productCart: state.productCart
   }
}; */

export default connect()(Store);