import React, { useContext, useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Cart } from "./Context";

const initialState = 0;

const reducer = (state, action) => {
  // if(action.type ==='INCREMENT')
  // {return state+1}
  // if(action.type ==='DECREMENT')
  // {return state-1}
  // return state;
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const SingleProduct = ({ prod, isCart = false }) => {
  console.log("isCart", isCart);
  const { cart, setCart, total } = useContext(Cart);

  const [state, dispatch] = useReducer(reducer, initialState);
  //   const[isExist,setIsExist] = useState(false)

  return (
    <div class="max-w-sm bg-amber-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  m-10 float-left justify-evenly w-90">
      <NavLink to="/">
        <img class="p-8 rounded-t-lg" src={prod.image} alt="product image" />
      </NavLink>
      <div class="px-5 pb-5">
        <NavLink to="/">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {prod.name}
          </h5>
        </NavLink>

        <div class="flex justify-between items-center">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            {/* {prod.price.substring(0,3)} */}
            {prod.price}
          </span>

          {isCart && (
            <div>
              <button
                className="bg-sky-500/50 rounded-sm w-10 text-center font-medium px-2 mx-2"
                onClick={() => dispatch({ type: "INCREMENT" })}
              >
                Inc
              </button>

              {state}
              <button
                className="bg-red-500/50 rounded-sm w-10 text-center font-medium px-2 mx-2"
                onClick={() => dispatch({ type: "DECREMENT" })}
              >
                Dec
              </button>
            </div>
          )}
          {/* 
          <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => setCart([...cart, prod])}
          >
            Add To Cart
          </button> */}

          {cart.includes(prod) ? (
            <button
              class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setCart([...cart, prod])}
            >
              Add To Cart
            </button>
          )}

          {/* <NavLink
            to={`/cart/${prod.id}`}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </NavLink> */}

          {/* {cart.includes(prod) ? (  <button class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={()=>setCart(cart.filter((c)=>c.id !==prod.id))}>Remove From Cart</button>) :
         <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={()=>setCart([...cart,prod])}>Add To Cart</button>       
                } 

           <NavLink
            to={`/cart/${prod.id}`}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </NavLink> */}
        </div>
      </div>
    </div>
  );
};
