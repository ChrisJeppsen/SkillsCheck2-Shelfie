import React, { Component } from "react"
import axios from "axios"
 
class Form extends Component{
    constructor(){
        super()
        this.state = {
            id: 0,
            image_url: '',
            product_name: '',
            price: 0,
            editing: false

        }
    }

    componentDidMount(){
        if(this.props.match.params.addform){
            console.log(this.props.match)
            axios.get(`/api/products/${this.props.match.params.addform}`).then(res => {
                this.setState({
                    id: res.data.product_id,
                    image_url: res.data.image_url,
                    product_name: res.data.product_name,
                    price: res.data.price,
                    editing: true
                    
                })
            })
        }
    }
    handlechange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
         
    }

    addProduct = (image_url, product_name, price) => {
        console.log(product_name)
        axios.post('/api/products', {image_url, product_name, price}).then(() => {
            this.setState({
                id:0,
                image_url: '',
                product_name: '',
                price: 0
            })
        }).catch(err => console.log(err))
    }
    updateProduct = (id, image_url, product_name, price) => {
        axios.put('/api/products/:id', {id, image_url, product_name, price}).then(() => {
            this.setState({
                id: 0,
                image_url: '',
                product_name: '',
                price: 0
            })
        }).catch(err => console.log(err))
    }
    render(){
        const {id, image_url, product_name, price, editing} = this.state
        return(
            <div className='form-div'>
                <input placeholder='image' onChange={(e) => this.handlechange(e)} name='image_url'value={this.state.image_url}/>
                <input placeholder='name' onChange={(e) => this.handlechange(e)} name='product_name'value={this.state.product_name}/>
                <input placeholder='price' onChange={(e) => this.handlechange(e)} name='price' value={this.state.price}/>
                {editing ?(
                    <button onClick={() => this.updateProduct(id, image_url, product_name, price)}> update! </button>
                 ) : (
                    <button onClick={() => this.addProduct(image_url, product_name, price)}> add! </button>
                 )}
            </div>
        )
    }
}
export default Form