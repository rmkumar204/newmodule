
import './App.css';
import Api from './Api';
import Message from './Message';
import Hook from './Hook';
import Calculator from './Calculator';
import Video from './Video';
import Back from './Back';
function App() {
  return (
    <div className="App">
      <Back className="setback"/>
    <div className="innerapp">
        <Calculator/>
        <br/><br/><br/>
        <Video/>
      <Hook className="setfront" ></Hook>
      <Api className="setfront" ></Api>
      <Message color="textcolor" className="setfront" ></Message> 
    </div>




    </div>
  );
}

export default App;
