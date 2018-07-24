import React,{Component}  from 'react'
import {getApartments} from '../api'

class ApartmentList extends Component{
  constructor(props){
    super()

    this.state ={
      apartments:{}
    }
  }

componentWillMount(){
  getApartment(this.props.match).then(object=>{
    this.setState({a:object})
  })
}
  render(){
    let {apt}=this.setState

    return(
      <div>
        <h1>{}<

    )
  }
}

export default ApartmentList
