import React from 'react';
import axios from 'axios';
class Api extends React.Component{
    constructor(props){
        super(props);
        this.state={message:[]}
        //here the message variable is set as array because array only can be mapped 
    }
  changeval=(event) =>{this.setState({name:event.target.value})};
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response);
            this.setState({
                message:response.data
            })
            console.log(this.state.message);
        });
        

    }
    render(){
        
      const {message}=this.state; 
        
      const mystyle = {
        color: "white",
       width: "500px",
       
        padding: "10px",
        fontFamily: "Arial",
        opacity:.3,
        
        
      };
        
            return(<div style={mystyle}>
                <h1>todays class about API and Component life cycle</h1>
                <h3>1.Mounting</h3>
                <h3>2.Updating</h3>
                <h3>3.Unmounting</h3>
                <h2>Mounting..... constructor,getDe<hr></hr>
                    rivedStatefromProps,render(),componentDidMount()</h2>
                <h2>Updating...... getDerivedStatefromProps,
                    <hr></hr>render(),componentDidUpdate(),getSnapshotBeforeUpdate()</h2>
                <h2>Unmounting..... componentDidUnMount</h2>
                <hr></hr>
                <input type="text" onChange={this.changeval}></input>
                <h2>{this.state.name}</h2>
                <hr></hr>
        <div>{message.map((val)=><li key={val.id}>{val.title}</li>)}</div>
                {/* message(array) variable is mapped  */}
                <hr></hr>
                </div> );
          
        // // ( <Message textclr="false"></message>)
        // in your componetn file message.js

        // function Message(props){
        //     const classPr=props.textClr?"textClr":"";
        //     return<h2 className={classPr}>Welcome</h2>
        // }
        // If we need to use another class in the same element use the template SVGPathSegLinetoVerticalAbs
        // return<h1 className={`${classPr}anotherClass`}>Welcome</h1>
        }
}
export default Api;