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
   
    let history = useHistory();

    const [productlist, setproductlist] = useState([]);

    useEffect(async () => {
    let resultProduct = await axios.get(`http://localhost:3002/products`);
        console.log('aaaaaaaaaaah', resultProduct)
    setproductlist({...productlist, productCollection: resultProduct.data});

    console.log(productlist)
    },[])
    

    const find = (element) => {
        productlist.productCollection.map(product => {
            if (product.cathegory === element){
               console.log(product)
            }
        });
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
           
            </div>
         </div>
      )
   
};

const mapStateToProps = state => {
   return {
      user: state.user,
      token: state.token
   }
};

export default connect(mapStateToProps)(Store);