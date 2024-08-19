import React from 'react';
import './App.css';
import axios from 'axios';
import Content from './components/Content/Content';

// const myFetch= async ()=>{
//   await axios.get("https://localhost:44319/Armor").then(res=>console.log(res.data));
// }
const myFetch= async ()=>{
  await axios.get("http://troyankh62-001-site1.ftempurl.com/Tank",{
    headers: {Authorization: `Basic MTExODk5MDA6NjAtZGF5ZnJlZXRyaWFs`,
    'Content-Type': 'application/json',
     Accept: "*/*",
     'Access-Control-Allow-Origin':'*'}
  }
    
  ).then(res=>console.log(res.data));

}
function App() {
  
  return (
    <div className='App'>
    
    <button style={{width:"max-content"}} onClick={()=>myFetch()}>Click</button>
    <Content/>
    </div>
    
  );
}

export default App;
