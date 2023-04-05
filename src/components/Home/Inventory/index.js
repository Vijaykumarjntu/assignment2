import { Component } from "react";
import { FaChevronUp,FaChevronDown } from "react-icons/fa";
import './index.css'

class Inventory extends Component{
    state = {showDetails:false}

    onShowDetails = ()=>{
        this.setState(prevState => ({showDetails: !prevState.showDetails}))
    }

    render(){
        const {showDetails} = this.state
        const {value} = this.props
        const {name,category,displayName} = value
        console.log(`name is ${name}, category is ${category}, display name is ${displayName}`)
        console.log(`props are ${this.props}`)
        return(
            <>
            <div className='inventory-list-item-container'>
                <div className='name-container'>
                    <li>{name}</li>
                </div>
                <div className='bt2'>
                    <button type='button' className='list-item-button' onClick={this.onShowDetails}>{showDetails ? <FaChevronUp/>:<FaChevronDown/>}</button>
                </div>    
            </div>
            {showDetails && <p>details are showen</p>}
            </>
        )
    }
}

export default Inventory