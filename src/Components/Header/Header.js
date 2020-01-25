import React, { Component } from "react"
import{Link} from 'react-router-dom'

 
class Header extends Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div className='nav-links'>
                Header
                <Link to='/'><button>Dash board</button></Link>
                <Link to='/form'><button>Add inventory</button></Link>

            </div>
        )
    }
}
export default Header