
import React, { useEffect, useState } from 'react';

export default function Dashboard(){
  const [stats,setStats]=useState({total:0, new:0, contacted:0, closed:0});

  // Fake analytics (backend can be added later)
  useEffect(()=>{
    setStats({total:40,new:20,contacted:10,closed:10});
  },[]);

  return (
    <div style={{padding:20,fontFamily:'sans-serif'}}>
      <h2>Analytics Dashboard</h2>
      <ul>
        <li>Total Leads: {stats.total}</li>
        <li>New: {stats.new}</li>
        <li>Contacted: {stats.contacted}</li>
        <li>Closed: {stats.closed}</li>
      </ul>
    </div>
  )
}
