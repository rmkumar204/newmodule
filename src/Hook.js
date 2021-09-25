import React, {useState} from 'react';
function Hook(){
    let [click,setClick]=useState(100);
    

    

return(
    <div style={{textAlign:"left",color:"red",fontWeight:"900",fontFamily:"cursive",fontSize:"50px"}}>
        <p > தமிழ் {click}</p>
        
        {/* <p> english {click}</p>
        <p> maths {click}</p>
        <p> science {click}</p>
        <p> social science {click}</p> */}
        
    <button type="submit" style={{background:"violet",opacity:".3",border:"none",borderRadius:"15px",padding:"10px"}} onClick={()=>setClick(click +5)}>மதிப்பெண்</button>
    </div>
);

}
export default Hook;