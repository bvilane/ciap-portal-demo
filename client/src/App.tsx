import { useState } from 'react'
import Browse from './pages/Browse'
import Admin from './pages/Admin'
import Upload from './pages/Upload'

export default function App(){
  const [page, setPage] = useState<'browse'|'admin'|'upload'>('browse')
  return (
    <div className="container">
      <header>
        <h1>CIAP Portal</h1>
        <nav>
          <a className={page==='browse'?'active':''} href="#" onClick={()=>setPage('browse')}>Browse</a>
          <a className={page==='upload'?'active':''} href="#" onClick={()=>setPage('upload')}>Upload</a>
          <a className={page==='admin'?'active':''} href="#" onClick={()=>setPage('admin')}>Admin</a>
        </nav>
      </header>
      {page==='browse' && <Browse/>}
      {page==='upload' && <Upload/>}
      {page==='admin' && <Admin/>}
    </div>
  )
}
