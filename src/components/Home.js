import React, { useContext, useState } from "react";
import faker from "faker";
import { NavLink } from "react-router-dom";
import { SingleProduct } from "./SingleProduct";
import { Cart } from "./Context";
import db from '../db.json' 
import Carousel from 'react-bootstrap/Carousel';

faker.seed(20);

const Home = () => {
  // console.log(useContext(Cart));

  // const productArray = [...Array(20)].map(() => ({
  //   id: faker.datatype.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   image: faker.random.image(),
  //   qty: 1,
  // }));





  // const [products] = useState(productArray);
   const [products] = useState(db);

  //  console.log(cart);


  return (
    <>
    <div>

      {products.map((MyData) => (
        // console.log(MyData.image)
        <SingleProduct prod={MyData} key={MyData.id} />
      ))}

    
    </div>

</>
  );
};

export default Home;
