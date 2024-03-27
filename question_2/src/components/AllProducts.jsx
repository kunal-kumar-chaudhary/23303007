import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const allProducts = () => {

    // useSelector is a hook from which gives access to the state
    const products = useSelector(state => state.product.products);
    console.log(products);

  return (
    <div>
      <div>
            <h2>All Products</h2>
            {
                <div className="row">
                    {products.map(product => (
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">{product.productName}</h5>
                                    <p className="card-text">Price: {product.price}</p>
                                    <p className="card-text">Rating: {product.rating}</p>
                                    <p className="card-text">Discount: {product.discount}</p>
                                    <p className="card-text">Availability: {product.availability}</p>
                                    <Link to={`/product/${product.productName}`} className="btn btn-primary">View Product</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    </div>
  )
}

export default allProducts
