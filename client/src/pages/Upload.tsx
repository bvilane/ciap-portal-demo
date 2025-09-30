import { useState } from 'react'
import { addContent } from '../api'

export default function Upload(){
  const [title,setTitle]=useState('')
  const [type,setType]=useState('pdf')
  const [size,setSize]=useState(0)
  const [tags,setTags]=useState('')

  const submit = async (e:React.FormEvent)=>{
    e.preventDefault()
    await addContent({ title, type, size_bytes:Number(size), tags })
    setTitle(''); setType('pdf'); setSize(0); setTags('')
    alert('Added!')
  }

  return (
    <section className="card">
      <h2>Upload (simulate)</h2>
      <form onSubmit={submit} style={{display:'grid', gap:8, gridTemplateColumns:'1fr 1fr'}}>
        <input placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
        <select value={type} onChange={(e)=>setType(e.target.value)}>
          <option value="pdf">pdf</option><option value="video">video</option>
          <option value="html">html</option><option value="image">image</option>
          <option value="other">other</option>
        </select>
        <input placeholder="Size (bytes)" type="number" value={size} onChange={(e)=>setSize(parseInt(e.target.value||'0'))} />
        <input placeholder="Tags (comma separated)" value={tags} onChange={(e)=>setTags(e.target.value)} />
        <button className="secondary" type="button" onClick={()=>{setTitle('Clinic Guidelines (PDF)');setType('pdf');setSize(2300000);setTags('health,clinic,pdf')}}>Example PDF</button>
        <button type="submit">Add</button>
      </form>
    </section>
  )
}
