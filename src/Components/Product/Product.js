import React, { Component } from "react"
import axios from 'axios'
import {withRouter} from 'react-router-dom'
class Product extends Component{
    constructor(){
        super()

    }

    delete = id => {
        axios.delete(`/api/products/${id}`).then(() => this.props.renderAgain())
    }

    edit = addform => {
        this.props.history.push(`/api/form/${addform}`)
    }
    render(){
        
        console.log(this.props.productInfo.product_id)
        return(
            <div>
                <div>{this.props.productInfo.product_name}</div>
                <button onClick={() => this.delete(this.props.productInfo.product_id)}>Delete</button>
                <button onClick={() => this.edit(this.props.productInfo.product_id)}>edit</button>
            </div>
        )
    }
}
export default withRouter(Product)