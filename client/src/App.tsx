import { ThemeProvider } from './theme'
import TopBar from './components/TopBar'
import Browse from './pages/Browse'
import Admin from './pages/Admin'
import Upload from './pages/Upload'
import { useState } from 'react'

export default function AppRoot(){
  return (
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  )
}

function App(){
  const [page, setPage] = useState<'browse'|'upload'|'admin'>('browse')
  return (
    <div className="container">
      <TopBar />
      <nav className="grid" style={{marginBottom: 16}}>
        <div className="card" style={{display:'flex', gap:8, alignItems:'center', justifyContent:'space-between'}}>
          <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
            <button className={`btn ${page==='browse'?'primary':'secondary'}`} onClick={()=>setPage('browse')}>Browse</button>
            <button className={`btn ${page==='upload'?'primary':'secondary'}`} onClick={()=>setPage('upload')}>Upload</button>
            <button className={`btn ${page==='admin'?'primary':'secondary'}`} onClick={()=>setPage('admin')}>Admin</button>
          </div>
          <span className="badge">v0.2</span>
        </div>
      </nav>
      {page==='browse' && <Browse/>}
      {page==='upload' && <Upload/>}
      {page==='admin' && <Admin/>}
    </div>
  )
}
