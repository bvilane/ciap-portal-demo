const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4001';

export type Content = { id:number; title:string; type:string; size_bytes:number; tags:string; last_updated:string };
export type RequestLog = { id:number; title:string; served_from:'cache'|'upstream'|'offline'; latency_ms:number; ts:string };
export type Stats = { total_requests:number; cache_hits:number; hit_ratio_pct:number; bytes_saved:number };

export async function listContent(): Promise<Content[]> {
  const r = await fetch(`${API_BASE}/api/content`); if(!r.ok) throw new Error('content'); return r.json();
}
export async function addContent(payload: Partial<Content>): Promise<Content> {
  const r = await fetch(`${API_BASE}/api/content`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
  if(!r.ok) throw new Error('add'); return r.json();
}
export async function requestContent(id:number){ 
  const r = await fetch(`${API_BASE}/api/requests`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({content_id:id}) });
  if(!r.ok) throw new Error('request'); return r.json();
}
export async function recentRequests(): Promise<RequestLog[]> {
  const r = await fetch(`${API_BASE}/api/requests/recent`); if(!r.ok) throw new Error('recent'); return r.json();
}
export async function getStats(): Promise<Stats> {
  const r = await fetch(`${API_BASE}/api/stats`); if(!r.ok) throw new Error('stats'); return r.json();
}
