import { Component } from "react";
import Inventory from "../Inventory";
import {BiChevronRight} from 'react-icons/bi'
import {FaHome,FaMapMarker,FaExclamationTriangle} from 'react-icons/fa'
import {IoIosCart} from 'react-icons/io'

import './index.css'

class Address extends Component{
    state = {isViewMoreClicked:false}

    onViewMoreClicked = ()=>{
        this.setState(prevState => ({isViewMoreClicked: !prevState.isViewMoreClicked}))
    }

    renderAdditionalInformation = ()=>{
        const {city_details} = this.props
        const {old_floor_no,old_elevator_availability,old_parking_distance,new_floor_no,new_elevator_availability,new_parking_distance} = city_details
        return(
            <>
            <h3 className='additional-heading'>Additional Information</h3>
            <div className='additional-container'>
                <p className='additional-text'>Test Data</p>
                <button type='button' className ='add-button black-button'>Edit Additional Infor</button>
            </div>
            <div className='old-house-additional-information-container'>
                <div className='existing-container'>
                    <h3 className='existing-house-heading'>House Details</h3>
                    <button type='button' className='add-button black-button'>Edit House Details</button>
                </div>
                <h3 className='old-house-heading'>Existing House Details</h3>
                <div className='old-container'>
                    <div className='floor-container'>
                        <h3 className='floor-heading'>Floor No</h3>
                        <p className='floor-no'>{old_floor_no}</p>
                    </div>
                    <div className='elevator-container'>
                        <h3 className='elevator-heading'>Elevator Availability</h3>
                        <p className='elevator-status'>{old_elevator_availability}</p>
                    </div>
                    <div className='distance-container'>
                        <h3 className='elevator-heading'>Distance from Elevator/Staircase to truck</h3>
                        <p className='elevator-status'>{old_parking_distance}</p>
                    </div>
                </div>
            </div>
            <div className='new-house-additional-information-container'>
                <h3 className='new-house-heading'>New House Details</h3>
                <div className='old-container'>
                    <div className='floor-container'>
                        <h3 className='floor-heading'>Floor No</h3>
                        <p className='floor-no'>{new_floor_no}</p>
                    </div>
                    <div className='elevator-container'>
                        <h3 className='elevator-heading'>Elevator Availability</h3>
                        <p className='elevator-status'>{new_elevator_availability}</p>
                    </div>
                    <div className='distance-container'>
                        <h3 className='elevator-heading'>Distance from Elevator/Staircase to truck</h3>
                        <p className='elevator-status'>{new_parking_distance}</p>
                    </div>
                </div>
            </div>
            </>
        )
    }

    renderInventoryInformation = ()=>{
        const {city_details} = this.props
        const {items} = city_details
        const {inventory} = items
        return(
            <ul className='inventory-list-container'>
                {inventory.map(item => <Inventory key={item.id} value={item}/>)}
            </ul>
        )
    }

    render (){
        const {isViewMoreClicked} = this.state
        const {city_details} = this.props
        console.log(city_details)
        console.log(city_details.fromAddress)
        const {from_address,to_address,estimate_id,property_size,total_items,moving_on} = city_details
        console.log(`this is from address ${from_address}`)
        const {fromLocality,fromCity,fromState} = from_address
        const {toLocality,toCity,toState} = to_address

        return(
            <>
            <div className='bg-container'>
                <div className='from-to-container'>
                    <div className='from-address'>
                        <h3 className='from-heading'>From</h3>
                        <p className='from-description'>{fromLocality},{fromCity},{fromState}</p>
                    </div>
                    <div className='icon-container'>
                        <p>
                        <BiChevronRight/>
                        </p>
                    </div>
                    <div className='to-address'>
                        <h3 className='from-heading'>To</h3>
                        <p className='from-description'>{toLocality},{toCity},{toState}</p>
                    </div>
                    <div className='estimate-container'>
                        <h3 className='estimate-heading'>Requests</h3>
                        <p className='estimate-description'>{estimate_id}</p>
                    </div>
                </div>
                <div className='details-container'>
                    <div className='home-container'>
                        <p className='home-description'><FaHome className='home-icon'/>{property_size}</p>
                    </div>
                    <div className='items-container'>
                        <p className='item-count'><IoIosCart className='home-icon'/>{total_items}</p>
                    </div>
                    <div className='date-container'>
                        <p className='moving-date'><FaMapMarker className='home-icon'/>{moving_on}</p>
                    </div>
                    <div className='checkbox-container'>
                        <input type='checkbox'>
                        </input>
                        <label className='checkbox-label'>is flexible</label>
                    </div>
                    <div className='button-container'>
                        <button type='button' className='view-more-button' onClick={this.onViewMoreClicked}>View more details</button>
                        <button type='button' className='quotes'>Quotes Awaiting</button>
                    </div>
                </div>
                <div className='disclaimer-container'>
                    <p className='disclaimer-description'><FaExclamationTriangle class='triangle'/>Please update your move data before two days of shifting</p>
                </div>
                {isViewMoreClicked && this.renderAdditionalInformation()}
                {isViewMoreClicked && this.renderInventoryInformation()}
            </div>
            
            </>
        )
    }
}

export default Address