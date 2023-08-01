import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductList() {
  const BASE_URL = "https://fakestoreapi.com/products";
  // const BASE_URL2 = "https://fakestoreapi.com/categories";


  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);


  const getProducts = ()=>{
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }

  const getCategoy = ()=>{
    fetch(`${BASE_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }

  const getProductInCategory=(catName)=>{
    console.log(catName);
    fetch(`${BASE_URL}/category/${catName}`)
            .then(res=>res.json())
            .then((data)=>setProduct(data))
  }
  
  useEffect(() => {
    getProducts();
    getCategoy();
  },[]);

  return (
    <>
      <h2 className="p-3 text-center">Our Product</h2>
      <div className="container">
        
      <button  onClick={()=>getProducts()} className="btn btn-info">All</button>

        {
          categories.map((cat)=>{
            return(
              <button key={cat} onClick={()=>getProductInCategory(cat)} className="btn btn-info">{cat}</button>
            )
          })
        }
        <div className="row">
          {product.map((product)=>{
              return(
              <div className="col-3" key={product.id}>
              <Product product={product} showButton = {true} />
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
