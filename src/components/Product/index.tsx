import React from "react";
// const ConsultationDescription = (props: PropsType) => {

interface PropsType {
  productImageSrc ?: string,
  productImageAlt ?: string,
  productName ?: string,
  productPrice ?: string,
  productId ?: string
}
const Product = (props: PropsType) => {
  return (
    <div >
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8" style={{width: "220px" , height: "220px"}}>
          
          <img
            src={props.productImageSrc}
            alt={props.productImageAlt}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{props.productName}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {props.productPrice}
        </p>
    </div>
  );
}

export default Product;
