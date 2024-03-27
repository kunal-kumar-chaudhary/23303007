import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {productActions} from '../store/productSlice'


const FetchProducts = () => {
    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    // this hook will run only once when the component is mounted
    useEffect(()=>{

        const fetch_products = async () =>{
            // url inside fetch api for getting the products
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setProducts(data);
            dispatch(productActions.setProducts(data));
    
        }
        fetch_products();
    }, []);
  return (
    <>
    </>
  )
}

export default FetchProducts;
