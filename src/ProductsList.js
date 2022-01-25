import React, { Component } from "react";
import Product from "./Product";
// import Product from "./Product";

class ProductsList extends Component
{
    render() {
        return (
            <div>
                {this.props.product.map((p) =>
                {
                    return (
                        // <div>
                        //     {/* // <Product/> */}
                        // <h4>{p.title}</h4>
                        // <h6>{p.price }</h6>
                        // <span>{ p.id }</span>
                        // </div>
                        <Product title={ p.title} price={ p.price} id={ p.id} />
                    )
                })}
            </div>
        )
    }
}

export default ProductsList;