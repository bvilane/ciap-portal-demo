import { useEffect, useState } from 'react'
import { Content, listContent, requestContent } from '../api'

export default function Browse(){
  const [items, setItems] = useState<Content[]>([])
  const [msg, setMsg] = useState<string>('')
  useEffect(()=>{ listContent().then(setItems).catch(()=>setMsg('Failed to load content')) },[])

  const onRequest = async (id:number)=>{
    const r = await requestContent(id)
    setMsg(`Served from: ${r.served_from} • ${r.latency_ms}ms`)
    setTimeout(()=>setMsg(''), 2000)
  }

  return (
    <section className="card">
      <h2>Content</h2>
      {msg && <p className="badge">{msg}</p>}
      <table>
        <thead><tr><th>Title</th><th>Type</th><th>Size</th><th>Tags</th><th></th></tr></thead>
        <tbody>
          {items.map(i=>(
            <tr key={i.id}>
              <td>{i.title}</td>
              <td>{i.type.toUpperCase()}</td>
              <td>{(i.size_bytes/1024/1024).toFixed(2)} MB</td>
              <td className="muted">{i.tags||'-'}</td>
              <td><button onClick={()=>onRequest(i.id)}>Request</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      {items.length===0 && <p className="muted">No content yet.</p>}
    </section>
  )
}
