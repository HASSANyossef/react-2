import React, { Component } from "react";

class Product extends Component
{
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <h4>{this.props.price }</h4>
                <span>{this.props.id }</span>
            </div>
        )
    }
}

export default Product;