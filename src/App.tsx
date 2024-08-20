import React from 'react';
import './App.css';
// import axios from 'axios';
import Content from './components/Content/Content';

// const myFetch= async ()=>{
//   await axios.get("https://localhost:44319/Armor").then(res=>console.log(res.data));
// }
// const myFetch= async ()=>{
//   await axios.get("http://troyankh62-001-site1.ftempurl.com/Tank/4",{
    
//     headers: {Authorization: `Basic ` + btoa('11189900'+':'+'60-dayfreetrial'),
//       withCredentials: true,
//       crossorigin: true,
//       mode: 'no-cors',     
//       ContentType: 'application/json',
//      AccessControlAllowOrigin:'*'},
     
//   }
    
//   ).then(res=>console.log(res.data));

// }

const myFetch = async()=>{
  fetch("http://troyankh62-001-site1.ftempurl.com/Tank",{
    method:'get',
    headers:new Headers({
      'Authorization':`Basic ` + btoa('11189900:60-dayfreetrial')
    })
  }).then(res=>res).then(data => console.log(data));
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
