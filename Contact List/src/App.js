import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Menu from "./Menu";
import Contacts from "./Contancts";
import Form from "./Form";
import Favorites from "./Favorites";

class App extends Component {
  state = {
    persons: [
      { id:1 , name: "Avital", phone: "0507157907" }
    ],
    favorites: [], 
    showPerson: "false",
    id: 3,
  };

  
deletePersonHandler = (personIndex) => {
  const persons= [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons : persons});
}

addContact=(inputName, inputPhone)=>{
  console.log("here");
  const persons= [...this.state.persons];
  persons.push({id:"5", name:inputName, phone : inputPhone});
  this.setState( {persons : persons});
}

addFavorite=(id,name,phone)=>{
 console.log("in app");
 const fav= [...this.state.favorites];
 const toAdd= {id:id, name:name, phone : phone};
 fav.push(toAdd);
 this.setState({favorites: fav});
};

removeFav= (index) => {
  console.log("in remove app");
  const fav= [...this.state.favorites];
  fav.splice(index,1);
  this.setState({favorites: fav});
}


  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {
            this.state.persons.map((person,index)=> {
              return <Person  
              name={person.name} 
              phone={person.phone}
              key={person.id}
              click = {() => this.deletePersonHandler(index) }
              changed = {(event) => this.nameChangedHandler(event, person.id)}/>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <Menu/>
        <h1>Contacts App</h1> 
        
        {/* <button style={style} onClick={this.togglePersondHandler}>  Toggle   </button> */}
        <Form addContact={this.addContact}  />
        <Contacts listOfContacts= {this.state.persons}  addToFav={this.addFavorite} />
        <h1>Favorites</h1> 
        <Favorites listOfFavorites={this.state.favorites} remove={this.removeFav}/>
      </div>
    );
    
  }


  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  togglePersondHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };




}

export default App;
