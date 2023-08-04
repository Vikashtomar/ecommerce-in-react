import React,{createContext, useState} from 'react'
import Products from './Components/Products';
import Header from './Components/Header';
export  const cartContext  = createContext();

function App() {
  const [cart,setCart] = useState([])
  return (
    <div>
      <cartContext.Provider value={{cart,setCart}}>

      <Header />
      <Products />
      </cartContext.Provider>

    </div>
  )
}

export default App
