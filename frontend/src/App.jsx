
import React, { useState } from 'react'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import OfflineHome from './pages/OfflineHome.jsx'
import OfflineAdmin from './pages/OfflineAdmin.jsx'

export default function App(){
  const [route, setRoute] = useState('home')
  const [mode, setMode] = useState('online')
  const isOnline = mode === 'online'

  const Nav = () => (
    <div className="nav">
      <div className="container nav-inner">
        <div className="brand">
          <span>🌍 CIAP</span>
          <span className="badge">{isOnline ? 'Online (Rich)' : 'Offline (Basic)'}</span>
        </div>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <div className="mode">
            <span className="kicker">Mode</span>
            <button className="toggle" onClick={()=> setMode(m => m==='online' ? 'offline' : 'online')}>
              {isOnline ? 'Switch to Offline' : 'Switch to Online'}
            </button>
          </div>
          <nav style={{display:'flex',gap:12}}>
            <a href="#" onClick={()=>setRoute('home')}>Home</a>
            <a href="#" onClick={()=>setRoute('admin')}>Admin</a>
          </nav>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <div className="ticker">Notification Ticker: Important announcements show up here.</div>
      <Nav/>
      {route==='home' && (isOnline ? <Home/> : <OfflineHome/>)}
      {route==='admin' && (isOnline ? <Admin/> : <OfflineAdmin/>)}
      <footer className="footer">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16}}>
            <div>
              <h3>CIAP</h3>
              <p>Offline-First access for communities.</p>
            </div>
            <div>
              <div className="kicker">Quick Links</div>
              <ul className="list">
                <li><a href="#">User Guide</a><span className="badge-soft">PDF</span></li>
                <li><a href="#">Kiwix (Local)</a><span className="badge-soft">Offline</span></li>
              </ul>
            </div>
            <div>
              <div className="kicker">Contact</div>
              <p>Email: admin@ciap.local</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
