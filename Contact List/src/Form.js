
import React, { Component } from "react";


class Form extends Component{
    state={
        inputName: "",
        inputPhone: ""
    }
    
    
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.inputName, this.state.inputPhone);
        this.setState({ inputName: '' , inputPhone : ''} );
    }

    onChangeName = (e) => this.setState({ inputName: e.target.value });
    onChangePhone =  (e) => this.setState({ inputPhone: e.target.value });

    render() {

        return (
            <div> 
        
            <form onSubmit={this.onSubmit}>
            <span className="formtext">Form </span>
              <input 
              type="text" 
              placeholder="Enter Name" 
              required 
              onChange={this.onChangeName}
            />
            <input 
              type="text" 
              placeholder="Enter Phone" 
              required 
              onChange={this.onChangePhone}
            />
            <button type="submit"  >Go!</button>
            
            </form>
            </div>
        );
    }



}

export default Form;