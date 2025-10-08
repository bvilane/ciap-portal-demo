// frontend/src/pages/Home.jsx
import React, { useEffect, useState } from 'react'
import hero from '../assets/hero.jpg'

const API = 'http://localhost:4000'

export default function Home(){
  const [news, setNews] = useState([])
  const [tuts, setTuts] = useState([])
  const [pdfs, setPdfs] = useState([])

  useEffect(()=>{
    fetch(`${API}/api/news`).then(r=>r.json()).then(setNews).catch(()=>setNews([]))
    fetch(`${API}/api/tutorials`).then(r=>r.json()).then(setTuts).catch(()=>setTuts([]))
    fetch(`${API}/api/pdfs`).then(r=>r.json()).then(setPdfs).catch(()=>setPdfs([]))
  },[])

  return (
    <div>
      <section className="hero">
        <div className="container">
          <div>
            <div className="badge">Welcome to CIAP</div>
            <h1>Bringing the Internet Closer, Even When It’s Gone</h1>
            <p>
              A locally powered community network that keeps learning, health, and civic content available
              even when connectivity drops. CIAP uses mesh networking and smart caching to deliver fast,
              low-cost internet access designed for Africa’s offline-first communities.
            </p>
            <div style={{display:'flex',gap:12,marginTop:12}}>
              <a className="btn" href="#videos">Watch Tutorials</a>
              <a className="btn" href="#pdfs" style={{background:'#111827'}}>Important PDFs</a>
            </div>
          </div>
          <img src={hero} alt="Hero" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Latest News</div>
          <div className="grid">
            {news.map(n=> (
              <div key={n.id} className="card" style={{gridColumn:'span 6'}}>
                {n.image && (
                  <img src={n.image} alt="" style={{width:'100%',borderRadius:12,marginBottom:10}}/>
                )}
                <div className="kicker">{new Date(n.date).toDateString()}</div>
                <h3>{n.title}</h3>
                <p>{n.summary}</p>
                {n.link && <a href={n.link} target="_blank" rel="noreferrer">Read more →</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="section" style={{background:'#f1f5f9'}}>
        <div className="container">
          <div className="kicker">Tutorials & Guides (Video)</div>
          <div className="grid">
            {tuts.map(t => (
              <div key={t.id} className="card" style={{gridColumn:'span 6'}}>
                <h3>{t.title}</h3>
                <div style={{position:'relative',paddingTop:'56.25%'}}>
                  <iframe
                    style={{position:'absolute',inset:0,width:'100%',height:'100%',border:0}}
                    src={
                      t.url.includes('embed')
                        ? t.url
                        : t.url
                            .replace('watch?v=','embed/')
                            .replace('youtu.be/','youtube.com/embed/')
                    }
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title={t.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pdfs" className="section">
        <div className="container">
          <div className="kicker">Important PDFs</div>
          <ul className="list">
            {pdfs.map(p => (
              <li key={p.id}>
                <a
                  href={`${p.url.startsWith('http') ? '' : API}${p.url}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {p.title}
                </a>
                <span className="badge-soft">PDF</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
