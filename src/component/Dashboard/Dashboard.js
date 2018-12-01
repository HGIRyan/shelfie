import React, { Component } from 'react'
import Product from './../Product/Product'
import axios from 'axios';



export default class Dashboard extends Component {
    constructor(){
        super()
        this.deleteProduct = this.deleteProduct.bind(this)
    }


deleteProduct(id){
    axios.delete(`/api/product/${id}`)
    this.props.getFn()
}



    render() {
        let { inventoryList } = this.props;
        // console.log({ inventoryList })
        let inventoryMapped = inventoryList.map(item => {
            return (
                
                <Product
                    key={item.product_id}
                    product={item.product_name}
                    image={item.image_url}
                    price={item.price}
                    id = {item.product_id}
                    deleteFn = {this.deleteProduct}
                />
               
            )
        }
        )
        return (
            <div className='Dash'>
                Dashboard
                {inventoryMapped}
            </div>
        )
    }
}

