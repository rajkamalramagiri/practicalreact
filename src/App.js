import "./App.css";
import {useState} from 'react'

function App() {
  const [showPwd, setShowPwd]=useState(false)
  const type=showPwd?'text':'password'
  const pwdImg=showPwd?'https://icon-library.com/images/show-password-icon/show-password-icon-25.jpg':'https://static.thenounproject.com/png/506282-200.png'
  return (
    <div className="App">
      <div style={{display:'flex',alignItems:'center'}}>
      <label>Username</label>{'  '}
      <input 
      type='text'/>

</div>
      <div style={{display:'flex',alignItems:'center'}}>
      <label>Password</label>{'  '}
      <input 
      type={type}/>
      <img width='30px'
      style={{position:'absolute',left:'170px'}}
      onClick={()=>setShowPwd(!showPwd)}
      src={pwdImg}/>
</div>
    </div>
  );
}

export default App;
