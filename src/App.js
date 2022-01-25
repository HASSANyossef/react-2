import React, { Component } from 'react';
import ProductsList from './ProductsList';



class App extends Component
{
  state = {
    // name: "hassan",
    // age: 28,
    // job: "engineer",
    // hubs: [
    //   {
    //     foot: "eredc",
    //     ddf: "ddsa",
    //   },
    //   {
    //     foot: "w33w",
    //     eddcc: "ffffff",
    //   }
    // ],
    products: [
      {
        title: "BMW",
        id: 10,
        price: 50000,
      },
      {
        title: "TYOTA",
        id: 15,
        price: 30000,
      },
      {
        title: "KIA",
        id: 20,
        price: 40000,
      }
    ]
  }


  render()
  {
    return (
      <div>
        <ProductsList product ={this.state.products } />

{/* 
        <h2>{this.state.age}{this.state.name}</h2>  
        <p>{ this.state.hubs.foot}</p>
        {this.state.hubs.map((p) =>
        {
        return (
          <p>{ p.foot}</p>
        )
        }
        )} */}
      </div>
    )
  }
}

// function App() {
  
// }

export default App;
