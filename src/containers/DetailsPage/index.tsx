import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductDTO from "../../types/Product";
import axios from "axios";

function DetailsPage() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const paramValue = urlParams.get("id");
  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    axios
      .get(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/` +
          paramValue
      )
      .then((res) => {
        const productFetched = res.data;
        setProduct(productFetched);
        console.log(productFetched, "product");
      });
  }, []);

  return (
    <div className="DetailsPage mx-80 my-16 bg-slate-300">
      {product != undefined && (
        <>
        <div className="flex flex-row">
          <div className="basis-1/4 md:shrink-0">
            <img
              src={product != undefined ? product.avatar : ""}
              className="object-cover md:h-full md:w-60" 
            />
          </div>
          <div className="text-3xl py-8 px-16 font-bold">
            {product.name}
            <div className="relative h-32 w-32 ">
              <div className="absolute inset-x-0 bottom-0 h-4 text-xl">
                $ {product.price}
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-black"></div>
    <div className="flex-grow border-t border-black"></div>
</div>
        <div className="flex flex-row">
          <div className="basis-1 py-8">
            <h1 className ="text-xl">Description: </h1>
            {product.description}
          </div>
        </div>
        </>
      )}
     
    </div>
  );
}

export default DetailsPage;
