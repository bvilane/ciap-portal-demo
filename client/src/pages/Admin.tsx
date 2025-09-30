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
    <section className="card">
      <h2>Admin / Stats</h2>
      {stats ? (
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'12px'}}>
          <div className="card"><strong>Hit Ratio</strong><br/>{stats.hit_ratio_pct}%</div>
          <div className="card"><strong>Total Requests</strong><br/>{stats.total_requests}</div>
          <div className="card"><strong>Cache Hits</strong><br/>{stats.cache_hits}</div>
          <div className="card"><strong>Bytes Saved</strong><br/>{(stats.bytes_saved/1024/1024).toFixed(2)} MB</div>
        </div>
      ): <p className="muted">Loading stats…</p>}
      <h3 style={{marginTop:16}}>Recent Requests</h3>
      <table>
        <thead><tr><th>Time</th><th>Title</th><th>Source</th><th>Latency</th></tr></thead>
        <tbody>
          {logs.map(l=>(
            <tr key={l.id}>
              <td>{new Date(l.ts).toLocaleTimeString()}</td>
              <td>{l.title||'-'}</td>
              <td>{l.served_from}</td>
              <td>{l.latency_ms} ms</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
