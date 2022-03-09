import React ,{useState,createContext, useEffect}from 'react'

 export const Cart = createContext();
const Context = ({children}) => {
  

    function localcheck(){
            var get=JSON.parse(localStorage.getItem("cart"))

            if(get){
                return get
            }
            else{
                return []
            }
    }


    const[cart,setCart] = useState(localcheck())
    const[total,setTotal] =useState()
    useEffect(() => {setTotal(cart.reduce((accu,currElem)=>accu+Number(currElem.price),0))}, [cart])
               

 return ( 
        <Cart.Provider value={{cart,setCart,total,setTotal}}>
               {children}
        </Cart.Provider> 
  )
}

export default Context