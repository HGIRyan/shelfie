import React from 'react';


function Product(props) {
    let { product, image, price, id, deleteFn } = props;
    // console.log(props.product)
    return (
        <div key={id} className='Product'>
            <div className='product_img' >
            <img src={image} alt='' className='product_img'/>
            </div>
            <div className='product_box'>
                <h1>{product}</h1>
                <h1>${price}</h1>
            </div>
            <button onClick={() => { deleteFn(id) }}>Delete</button>
        </div>
    )
}


export default Product