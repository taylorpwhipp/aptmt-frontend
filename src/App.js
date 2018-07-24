import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { getApartments } from './api/index.js'

class App extends Component {
  constructor(props){
       super(props)
       this.state = {
           apartments: []
       }
   }
   componentWillMount() {
        getApartments()
        .then(APIapartments => {
            this.setState({
                apartments: APIapartments
            })
          }
          )
    }
  render() {
    return (
      <div>
      <Router>
        <div>
        <Route path="/apartments" component={ApartmenList} />
        <Route path="apartment/:id"
        </div>

      </div>
    );
  }
}

export default App;
