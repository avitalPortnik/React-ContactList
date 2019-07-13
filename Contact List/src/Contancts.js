import React , { Component } from 'react';
import Person from  "./Person/Person";


class Contacts extends Component {
    
    onAddFav= (id,name,phone)=>{
        this.props.addToFav(id,name,phone);
    }


    render() {
        return (
            <div>{
                this.props.listOfContacts.map((person)=> {
                  return <Person  
                  name={person.name} 
                  phone={person.phone}
                  key={person.id}
                  addToFav={() => this.onAddFav(person.id,person.name, person.phone)}
                  //click = {() => this.deletePersonHandler(index) }
                  //changed = {(event) => this.nameChangedHandler(event, person.id)}
                  />
                })
              }</div>
        );
    }

}




export default Contacts;