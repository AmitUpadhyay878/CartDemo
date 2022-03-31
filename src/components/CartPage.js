import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Cart } from "./Context";
import { SingleProduct } from "./SingleProduct";

const CartPage = () => {
  // const {id,name,price,image}=useParams();

  // const[total,setTotal]=useState()

  const { cart, total, setTotal } = useContext(Cart);

  // useEffect(() => {setTotal(cart.reduce((accu,currElem)=>accu+Number(currElem.price),0))}, [cart])

  useEffect(() => {
    //  console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      {cart.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id} isCart={true} />;
      })}

      <div class="">
        <span class="float-right mt-7 font-bold text-white h-screen w-52 bg-red-900 pl-12 pt-12">
          Total : {total}
          <br />
          Tax : {total} * 12 % <br/>Sub Total : {total}<br/>
          Final Total : {total}
        </span>
      </div>
    </div>

    //   <footer class="bg-gray-200 text-center lg:text-left">
    //   <div class="text-gray-700 text-center p-4" style="background-color: rgba(0, 0, 0, 0.2);">
    //     © 2021 Copyright:
    //     <a class="text-gray-800" href="https://tailwind-elements.com/">Tailwind Elements</a>
    //   </div>
    // </footer>
  );
};

export default CartPage;
