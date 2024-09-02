import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Home from './Home';

function App() {
  let firstname = "Jofin";
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const validate = () =>{
    if(!email){
      alert('email is empty')
    } else if(!mobile){
      alert('mobile is empty')
    } else{
      alert("everything is fine")
    }
  }
  return (
    <div className="App"> 
      <h1>This Is React App </h1>
      {firstname} <br/> {email} <br/>{mobile}
      <Home/>
      <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
      <br/>
      <input type='text' placeholder='Mobile' onChange={(e) => setMobile(e.target.value)} />
      <br/>
      <br/>
      <button onClick={() => validate()}>Click</button>
    </div>
    
  );

  
}

export default App;