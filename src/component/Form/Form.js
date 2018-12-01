import React, { Component } from 'react'
import axios from 'axios';

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            imageUrl: 'http://grw.trains.com/sitefiles/images/no-preview-available.png',
            productName: '',
            price: 0,

        }
        this.changeImageUrl = this.changeImageUrl.bind(this)
        this.changeProductName = this.changeProductName.bind(this)
        this.changePrice = this.changePrice.bind(this)
        this.resetForm = this.resetForm.bind(this)
        this.addProduct = this.addProduct.bind(this)
    }
    // Input Value Change
    changeImageUrl(val) {
        this.setState({ imageUrl: val })
    }
    changeProductName(val) {
        this.setState({ productName: val })
    }
    changePrice(num) {
        this.setState({ price: num })
    }
    // Input Value Reset
    resetForm() {
        this.setState({ imageUrl: 'http://grw.trains.com/sitefiles/images/no-preview-available.png', productName: '', price: 0 })
    }
    // Post New Product
    addProduct( image_url, product_name, price) {
        console.log('this')
        axios.post('/api/product', {  image_url, product_name, price })
        this.props.getFn()
        this.resetForm()
        console.log('next')
    }

    render() {
        return (
            <div className='Form'>
                <img src={this.state.imageUrl} alt='' className='form_image'/>
                <div>
                    <p>Image URL:</p>
                    <input className='input' type='text' onChange={(event) => { this.changeImageUrl(event.target.value) }}></input>
                    <p>Product Name: </p>
                    <input className='input' type='text' onChange={(event) => { this.changeProductName(event.target.value) }} />
                    <p>Price:</p>
                    <input className='input' type='text' pattern="[0-9]*" onChange={(event) => { this.changePrice(event.target.value) }} />
                </div>
                <div className='form_button_box'>
                    <button className='button' onClick={(event) => { this.resetForm(event.target.value) }}>Cancel</button>
                    <button className='button' onClick={() => { this.addProduct(this.state.imageUrl, this.state.productName, this.state.price) }}>Add to Inventory</button>
                </div>
            </div >
        )
    }
}