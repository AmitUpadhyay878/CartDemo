import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cart } from "./Context";
import { SingleProduct } from "./SingleProduct";

const CartPage = () => {
  // const {id,name,price,image}=useParams();

  // const[total,setTotal]=useState()

  const { cart, total, setTotal } = useContext(Cart);

  // useEffect(() => {setTotal(cart.reduce((accu,currElem)=>accu+Number(currElem.price),0))}, [cart])

    useEffect(()=>{
      localStorage.setItem("cart", JSON.stringify(cart));

    },[cart])
      


  return (
    <div>
      {cart.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id} isCart={true} />;
      })}

      <div class="">
        <span class="float-right mr-20 font-bold text-red-800">
          Total :{""} {total}
        </span>
      </div>
    </div>
  );
};

export default CartPage;
