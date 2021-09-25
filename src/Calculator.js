import React from 'react';
import { useState } from 'react';
import simpson from './simpson.gif';
function Calculator() {
    const[result,setResult]=useState("");
    const handleclick=(e)=>{
        setResult(result.concat(e.target.name));
    }
    const calculate=()=>{
            try{
            setResult(eval(result).toString());
            }
            catch(err){
                
                setResult("error" );

            }
    }
    const clear=()=>{
        setResult("");
    }
    const backspace=()=>{
        setResult(result.slice(0,-1));
    }
    return ( <div >
       <img src={simpson} alt="simpson" className="simpson"></img>
        <div className="grid-container">
            
        <input type="text" className="calcinp" value={result}></input>
        
       
        <button onClick={clear} className="calcclear">Clear</button>
        <button onClick={backspace}>C</button>
        <button onClick={handleclick} name="-">&ndash;</button>
        <button onClick={handleclick} name="7">7</button>
        <button onClick={handleclick} name="8">8</button>
        <button onClick={handleclick} name="9">9</button>
        <button onClick={handleclick} name="/">&divide;</button>
        <button onClick={handleclick} name="4">4</button>
        <button onClick={handleclick} name="5">5</button>
        <button onClick={handleclick} name="6">6</button>
        <button onClick={handleclick} name="*">&times;</button>
        <button onClick={handleclick} name="3">3</button>
        <button onClick={handleclick} name="2">2</button>
        <button onClick={handleclick} name="1">1</button>
        <button onClick={handleclick} name="+">+</button>
        <button onClick={handleclick} name="0">0</button>
        <button onClick={handleclick} name=".">.</button>
        <button onClick={calculate} className="calcequal" >=</button>
        </div>
    </div> );
}

export default Calculator;