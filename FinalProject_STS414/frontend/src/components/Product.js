import React from 'react';

export default function Product(props) {
    const { product } = props;

    return (
        <a href={`/product/${product._id}`}>
            <div className="product" key={product._id}>
                <div className="product-img">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="product-details">
                    <div className="product-name">
                        <h2>{product.name}</h2>
                    </div>
                    <div className="product-price">
                        <h5>{product.category} | $ {product.price}</h5>
                    </div>
                </div>
            </div>
        </a>
    )
}
