import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Store.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import Fruits from '../../Img/fruitsByColours.png'
import Vegetables from '../../Img/vegetablesByColours.jpg'
import Nuts from '../../Img/nutsbyColours.jpeg'




const Store = (props) => {
   
    
    const [productlist, setproductlist] = useState([]);
    const [filterProductlist, setFilterProductlist] = useState([]);
    const [productToBuy, setProductToBuy] = useState([]);
   


   
    useEffect(async () => {
        let resultProduct = await axios.get(`http://localhost:3002/products`);
        setproductlist(resultProduct.data);
        const parseObject = JSON.parse(localStorage.getItem("productCart"))
        
        if(parseObject == null){
            return;
        }
        else setProductToBuy(parseObject); 
        },[])
    
    const find = (element) => {
        const newList = productlist.filter(product => {
            return product.cathegory == element
        });
        setFilterProductlist(newList)
    }

    const addProduct = (product) => {
        const productToCart = [...productToBuy, product]
        setProductToBuy(productToBuy => productToCart)

        localStorage.setItem("productCart", JSON.stringify(productToCart));        

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
                     <div className="product-img-container">
                        <img className="product" src={product.posterUrl} alt="imagenes"/> 
                    </div>
                    <p>{product.price} $</p>
                   
                    <button onClick={() => addProduct(product)}>añadir</button>
                    
                </li>)
               
            })
        }</ul>
            </div>
         </div>
      )
   
};
 

export default connect()(Store);