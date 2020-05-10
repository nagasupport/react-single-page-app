import React, { Component } from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list-component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component {

  constructor(){
    super();
    this.state = {
      string: 'Hello world',
      employess: [
      ],
      searchString: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({employess: users}));
  }

  handleChange = (e) => {
    this.setState({searchString: e.target.value});
  }

  render(){

    const {employess, searchString} = this.state
    const filteredEmpList = employess.filter(emp => 
      emp.name.toLowerCase().includes(searchString.toLowerCase())
      );
  return (
    
    <div className="App">
    <h1> Single page application using React</h1>
    <SearchBox
      placeholder="Search employees"
      handleChange={this.handleChange}
    />
   
    <CardList employess={filteredEmpList}>
       
    </CardList>
      {/*
        this.state.employess.map( emp => (
          <h1 key={emp.id}> {emp.id}. {emp.name}, {emp.email}</h1>
        ))
        */} 
    </div>
  );
}
}

export default App;
