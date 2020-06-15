import React, {Component} from 'react';
import './App.css';
import {CardList} from "./components/card-list/card-list.jsx";
import {SearchField} from "./components/seachFiled/searchField.jsx";

class App extends Component {
  state = {
    monsters : [],
    searchVal : ""
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users", {mode: 'cors'})
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    
  }

  handelChnageSearch = e => {
    console.log(this)
    this.setState({searchVal: e.target.value});
  }


  render() {
    const {monsters, searchVal} = this.state;
    const filteredMonsters = monsters.filter(monster => 
       monster.name.toLowerCase().includes(searchVal.toLowerCase())
    )
      return ( 
        <div className="App">
          <h1>Monsters Rolodex</h1>
         <SearchField placeholder="search monsters!" 
         handleChange= { this.handelChnageSearch}
        
        ></SearchField>
       
          <CardList monsters={filteredMonsters}></CardList>
         
         
        </div>
      );
  }
}

export default App;

