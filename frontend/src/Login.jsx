
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const nav = useNavigate();

  const submit = () => {
    if(email==="admin@tmhai.com" && password==="admin123"){
       sessionStorage.setItem("logged","yes");
       nav("/dashboard");
    } else {
       setError("Invalid login");
    }
  }

  return (
    <div style={{padding:40,fontFamily:'sans-serif'}}>
      <h2>Admin Login</h2>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}
             style={{padding:10,marginBottom:10,display:'block'}} />
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}
             style={{padding:10,marginBottom:10,display:'block'}} />
      <button onClick={submit} style={{padding:'8px 14px'}}>Login</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  )
}
