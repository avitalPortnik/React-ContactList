import React, { Component } from "react";
import Person from "./Person/Person";

import './favorites.css'



class Favorites extends Component {


    removeFav=(index)=>{
        this.props.remove(index);
    }


  render() {
    return (
      <div>
        {this.props.listOfFavorites.map((person,index) => {
          return (
            <div>
            <h4>  {person.name} </h4>
            <h6> Phone: {person.phone} </h6> 
            <button onClick={()=>this.removeFav(index)}> remove From Favorites </button>
            <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Favorites;
