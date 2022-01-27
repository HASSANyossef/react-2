import React, { Component } from "react";

class Product extends Component
{
    
    render()
    {
        const {item} = this.props;
        return (
            <div>
                <h3>{item.title}</h3>
                <h4>{item.price }</h4>
                <span>{item.id }</span>
            </div>
        )
    }
}

export default Product;