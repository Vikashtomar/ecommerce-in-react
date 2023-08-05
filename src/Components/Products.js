import React,{useContext, useEffect,useState} from 'react'
// import axios from 'axios'
import axios from 'axios';
import { cartContext } from '../App';
import './Prodc.css'

function Products() {
    const [product,setProduct] = useState([])
    const {cart,setCart} = useContext(cartContext)

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res)
            setProduct(res.data)
        })
    },[])

    function handleClick(e,item){
        e.preventDefault();
        setCart([...cart,item])
        console.log(cart)
    }


  return (
    <div className='product'>

    {product.map((value,index)=>{
        return(
            <>
            <h1> ${value.price}  index is = {index}</h1>
            <img src={value.image} alt="done ha sab"/>

            <button onClick={(e)=> {handleClick(e,value)}}>Add To Cart</button>

            </>
        )
    })}

     

    </div>
  )
}

export default Products