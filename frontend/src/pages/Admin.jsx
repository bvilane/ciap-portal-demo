import React, { useEffect, useState } from 'react'

const API = 'http://localhost:4000'

export default function Admin(){
  const [status, setStatus] = useState(null)
  const [news, setNews] = useState([])

  useEffect(()=>{
    fetch(`${API}/api/status`).then(r=>r.json()).then(setStatus).catch(()=>setStatus(null))
    fetch(`${API}/api/news`).then(r=>r.json()).then(setNews).catch(()=>setNews([]))
  },[])

  return (
    <div className="container" style={{padding:'24px 0'}}>
      <div className="dashboard">
        <aside className="sidebar">
          <div className="kicker">Admin</div>
          <ul className="list">
            <li><a href="#">Overview</a></li>
            <li><a href="#">Content</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Sync</a></li>
            <li><a href="#">Stats</a></li>
          </ul>
        </aside>

        <main style={{flex:1}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <h2>Dashboard</h2>
            <span className="badge">{status ? 'Backend Online' : 'Backend Unavailable'}</span>
          </div>

          <div className="cards" style={{marginTop:12}}>
            <div className="kpi">
              <div className="kicker">Cache Hit Rate</div>
              <h4>78%</h4>
              <p className="kicker">last 24h</p>
            </div>
            <div className="kpi">
              <div className="kicker">Bandwidth Saved</div>
              <h4>4.1 GB</h4>
              <p className="kicker">this week</p>
            </div>
            <div className="kpi">
              <div className="kicker">Active Users</div>
              <h4>126</h4>
              <p className="kicker">unique devices</p>
            </div>
            <div className="kpi">
              <div className="kicker">Queued Requests</div>
              <h4>32</h4>
              <p className="kicker">for next sync</p>
            </div>
          </div>

          <div className="card" style={{marginTop:16}}>
            <h3>Announcements</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Summary</th>
                </tr>
              </thead>
              <tbody>
                {news.map(n => (
                  <tr key={n.id}>
                    <td>{new Date(n.date).toLocaleDateString()}</td>
                    <td>{n.title}</td>
                    <td>{n.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
