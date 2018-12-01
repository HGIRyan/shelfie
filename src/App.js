import React, { Component } from 'react';
import './App.css';
import './reset.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
    this.productDisplay = this.productDisplay.bind(this)

  }

  componentDidMount() { 
    this.productDisplay()
  }
  productDisplay() {
    axios.get('/api/inventory').then(resp => {
      this.setState({
        inventory: resp.data
      })
    })
  }
  // componentWillUpdate(){
  //   this.productDisplay()
  // }




  render() {
    return (
      <div className="App">
        <Header />
      <div className='body'>
        <Dashboard inventoryList={this.state.inventory} getFn={this.productDisplay} />
        <Form getFn={this.productDisplay} />
      </div>
      </div>
    );
  }
}

export default App;
