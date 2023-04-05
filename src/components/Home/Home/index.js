import {Component}  from 'react'
import Address from '../Address'
import Navigation from '../Navigation'
import './index.css'

class Home extends Component{
    state = {isLoading:true,newData:[]}

    componentDidMount(){
        this.getData()
    }

    formatData = ()=>{
        const {newData} = this.state
        const {Customer_Estimate_Flow} = newData
        return(
            <>
            {Customer_Estimate_Flow.map(address => 
            <Address key={address.estimate_id} city_details={address}/>
            )}
            </>
        )
    }

    getData = async()=>{
        const source_url = 'http://test.api.boxigo.in/sample-data/'
        const options = {
            method:'GET'
        }

        try{
        const res = await fetch(source_url,options)
        const data = await res.json()
        console.log(data)
        this.setState({isLoading:false,newData:data})
        }catch(e){
            console.log(e)
        }
        
    }

    render(){
        const {isLoading} = this.state
        return(
            <div className='home-container'>
                <Navigation className='navigation'/>
                <ul className='details-card-container'>
                    {!isLoading && this.formatData()}
                </ul>
            </div>    
        )
    }
}
export default Home