/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import Product from '../../components/Product'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDTO from '../../types/Product'
import { useNavigate} from 'react-router-dom';
  
  export default function Example() {

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const navigate = useNavigate();
    
    useEffect(() => {
      axios.get(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/`)
      .then(res => {
        const productsFetched = res.data;
        setProducts(productsFetched);
      })
    }, []);
    const Redirect =(id: string)=>{
      navigate('/productDetails?id=' + id);
    }
    
    return (
      <div className="bg-slate-300 mx-80">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8" >
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id}  className="group " onClick={()=>{Redirect(product.id)}}>
                <Product  productPrice={product.price}  productName={product.name} productImageAlt={product.description} productImageSrc={product.avatar}/>
              </a>   
            ))}
           
          </div>
        </div>
      </div>
    )
  }
  