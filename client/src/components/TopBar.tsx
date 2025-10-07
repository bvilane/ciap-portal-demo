import { useTheme } from '../theme'

export default function TopBar(){
  const { theme, setTheme, online } = useTheme()

  return (
    <header className="topbar">
      <div className="brand">
        {/* optional: replace with your logo */}
        <div className="title">
          <h1>CIAP Portal</h1>
          <span className="subtitle">Community Internet Access • Offline-first</span>
        </div>
      </div>

      <div className="actions">
        <span className={`status ${online ? 'ok' : 'warn'}`}>{online ? 'Online' : 'Offline'}</span>
        <div className="toggle">
          <button className={theme==='luxe' ? 'active' : ''} onClick={()=>setTheme('luxe')} aria-pressed={theme==='luxe'}>Luxe</button>
          <button className={theme==='lite' ? 'active' : ''} onClick={()=>setTheme('lite')} aria-pressed={theme==='lite'}>Lite</button>
        </div>
      </div>
    </header>
  )
}
