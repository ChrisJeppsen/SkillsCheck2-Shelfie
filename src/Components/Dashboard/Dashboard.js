import React, { Component } from "react"
import Product from '../Product/Product'
import axios from "axios"
 
class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            shelfie: []
        }
    }

    componentDidMount(){
        this.renderAgain()
    }

    renderAgain = () => {
        axios.get('/api/products') .then(res => {
            this.setState({
                shelfie: res.data
            })
        })
        console.log(this.state.shelfie)
    }
    render(){
        return(
            <div> 
                {this.state.shelfie.map(element => {
                    console.log(element)
                    return(
                        <Product 
                            key={element.id}
                            productInfo={element}
                            renderAgain={this.renderAgain}
                        />
                
            )
            
        })}
            </div>
        )
       
    }
}
export default Dashboard