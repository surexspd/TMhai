
import React, { useEffect, useState } from 'react';

export default function Admin(){
  const [leads, setLeads] = useState([]);
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState('');

  const load = async () => {
    try {
      const r = await fetch('/api/leads',{headers:{"x-api-key":apiKey}});
      const d = await r.json();
      if(d.ok){
        setLeads(d.leads);
        setError('');
      } else setError('Invalid API Key');
    } catch(e){ setError('Network error'); }
  };

  const updateStatus = async (id,status) => {
    await fetch('/api/update-status',{
      method:'POST',
      headers:{"Content-Type":"application/json","x-api-key":apiKey},
      body:JSON.stringify({id,status})
    });
    load();
  };

  const remove = async (id) => {
    await fetch('/api/delete-lead',{
      method:'POST',
      headers:{"Content-Type":"application/json","x-api-key":apiKey},
      body:JSON.stringify({id})
    });
    load();
  };

  return (
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h2>Lead Management</h2>
      <input placeholder="API Key" value={apiKey} onChange={e=>setApiKey(e.target.value)}
             style={{padding:8}}/>
      <button onClick={load} style={{marginLeft:10,padding:'8px 14px'}}>Load</button>
      {error && <p style={{color:'red'}}>{error}</p>}

      <table border="1" cellPadding="8" style={{marginTop:20}}>
        <thead>
          <tr><th>Name</th><th>Phone</th><th>Status</th><th>Action</th></tr>
        </thead>
        <tbody>
          {leads.map(l=>(
            <tr key={l.id}>
              <td>{l.name}</td>
              <td>{l.phone}</td>
              <td>{l.status}</td>
              <td>
                <button onClick={()=>updateStatus(l.id,'contacted')}>Contacted</button>
                <button onClick={()=>updateStatus(l.id,'closed')}>Closed</button>
                <button onClick={()=>remove(l.id)} style={{color:'red'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
