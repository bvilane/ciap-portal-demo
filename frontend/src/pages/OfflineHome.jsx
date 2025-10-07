
import React from 'react'

export default function OfflineHome(){
  return (
    <div className="container" style={{padding:'24px 0'}}>
      <div className="notice">
        You are in <b>Offline (Basic)</b> mode. Videos and live data are hidden to save bandwidth.
      </div>
      <h1 style={{marginTop:16}}>CIAP — Offline Portal</h1>
      <p>Access cached study materials, community updates and local PDFs without internet.</p>

      <h3>Quick Access</h3>
      <ul className="list">
        <li><a href="#">Wikipedia (Kiwix)</a><span className="badge-soft">Offline</span></li>
        <li><a href="#">Math & Science Pack</a><span className="badge-soft">Local</span></li>
        <li><a href="#">Community Health Guides</a><span className="badge-soft">PDF</span></li>
      </ul>
    </div>
  )
}
