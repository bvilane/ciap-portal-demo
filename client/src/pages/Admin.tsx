import { useEffect, useState } from 'react'
import { getStats, recentRequests, Stats, RequestLog } from '../api'

export default function Admin(){
  const [stats, setStats] = useState<Stats|null>(null)
  const [logs, setLogs] = useState<RequestLog[]>([])

  useEffect(()=>{
    getStats().then(setStats).catch(()=>{})
    recentRequests().then(setLogs).catch(()=>{})
  },[])

  return (
    <section className="grid">
      <div className="card">
        <h2>Admin / Stats</h2>
        {stats ? (
          <div className="kpi-grid">
            <div className="kpi"><strong>Hit Ratio</strong><span>{stats.hit_ratio_pct}%</span></div>
            <div className="kpi"><strong>Total Requests</strong><span>{stats.total_requests}</span></div>
            <div className="kpi"><strong>Cache Hits</strong><span>{stats.cache_hits}</span></div>
            <div className="kpi"><strong>Bytes Saved</strong><span>{(stats.bytes_saved/1024/1024).toFixed(2)} MB</span></div>
          </div>
        ) : <p className="badge">Loading stats…</p>}

        <h3 style={{marginTop:16}}>Recent Requests</h3>
        <div style={{overflowX:'auto'}}>
          <table className="table">
            <thead><tr><th>Time</th><th>Title</th><th>Source</th><th>Latency</th></tr></thead>
            <tbody>
              {logs.map(l => (
                <tr key={l.id}>
                  <td>{new Date(l.ts).toLocaleTimeString()}</td>
                  <td>{l.title || '-'}</td>
                  <td><span className="badge">{l.served_from}</span></td>
                  <td>{l.latency_ms} ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
