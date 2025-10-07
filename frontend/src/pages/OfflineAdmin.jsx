
import React from 'react'

export default function OfflineAdmin(){
  return (
    <div className="container" style={{padding:'24px 0'}}>
      <div className="notice">
        Admin is in <b>Offline (Basic)</b> mode. Only essential controls are shown.
      </div>
      <h2 style={{marginTop:12}}>Admin — Minimal</h2>
      <ul className="list">
        <li>Start Sync (when link available)</li>
        <li>Approve Local Uploads</li>
        <li>Backup to USB</li>
      </ul>
    </div>
  )
}
