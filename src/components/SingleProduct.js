import React, { useContext, useEffect, useReducer, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Cart } from "./Context";

const initialState = 1;

const reducer = (state, action) => {
  // if(action.type ==='INCREMENT')
  // {return state+1}
  // if(action.type ==='DECREMENT')
  // {return state-1}
  // return state;
  switch (action.type) {
    case "INCREMENT":
      console.log(state);
      return state + 1;

    case "DECREMENT":
      // console.log(state);

      if (state == 1) {
        return 1;
      } else {
        return state - 1;
      }
    default:
      return state;
  }
};

export const SingleProduct = ({ prod, isCart = false }) => {
  const { cart, setCart, total } = useContext(Cart);

  const [state, dispatch] = useReducer(reducer, prod.qty);
  //   const[isExist,setIsExist] = useState(false)
  function changehandle(id, dec) {
    if (dec) {
      let data = cart.map((e) => {
        // let price = e.price;
        console.log("state in change hanlde", state);
        if (e.id == id) {
          if (e.qty == 1) {
            return { ...e, qty: e.qty };
          } else {
            return { ...e, qty: e.qty - 1 };
          }
        } else {
          return e;
        }
      });
      setCart(data);
    } else {
      let data = cart.map((e) => {
        // let price = e.price;
        console.log("state in change hanlde", state);
        if (e.id == id) {
          return { ...e, qty: e.qty + 1 };
        } else {
          return e;
        }
      });
      setCart(data);
    }
  }

  const addToCart = (id) => {
    // const check_index = cart.findIndex((item) => item.id === id);
    // if (check_index !== -1) {
    //   cart[check_index].qty++;
    // } else {
    //     cart.push({ ...prod, qty: 1 });
    //   // setCart([cart,...prod])
    // }
    let checkExist;
    checkExist = cart.find((er) => er.id == id);
    if (checkExist) {
      // console.log("prod found in cart", checkExist);
      checkExist.qty++;
      let dataa = cart.map((ert) => {
        if (ert.id == checkExist.id) {
        }
        return ert;
      });
      setCart(dataa);
      // localStorage.setItem("cart", JSON.stringify(dataa));
    } else {
      let addtocart = [...cart, { ...prod }];
      setCart(addtocart);
      // localStorage.setItem("cart", JSON.stringify(addtocart));
    }
  };
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div class="max-w-sm bg-amber-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700  m-10 float-left justify-evenly w-90">
      <NavLink to="/">
        <img class="p-3 rounded-t-lg" src={prod.image} alt="product image" />
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
            {/* without multiplication with quantity  {prod.price}  */}
            {/* {Math.floor(prod.price * prod.qty)} */}
            {Math.floor(prod.price)}
            {/* {prod.price * state} */}
          </span>

          {isCart && (
            <div>
              <span class="font-bold text-white">
                {" "}
               <span className="font-bold text-red-800">x</span> {/* {prod.qty ? prod.qty : state} */}{" "}
                <span class="font-bold text-black">{state}</span>
              </span>{" "}
              <button
                className="bg-sky-500/50 rounded-full text-center font-bold text-white px-2 mx-2"
                onClick={() => {
                  dispatch({ type: "INCREMENT", payload: prod.qty });
                  changehandle(prod.id);
                }}
                // onMouseDown={() => changehandle(prod.id)}
              >
                +
              </button>
              <button
                className="bg-red-500/50 rounded-full w-8 text-center font-bold text-white px-2 mx-2"
                onClick={() => {
                  dispatch({ type: "DECREMENT", payload: prod.qty });
                  changehandle(prod.id, "dec");
                }}
              >
                -
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
              Remove
            </button>
          ) : (
            <button
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              // onClick={() => setCart([...cart, prod])}
              onClick={() => {
                addToCart(prod.id);
              }}
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
