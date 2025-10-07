import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'luxe' | 'lite'
type ThemeContextType = { theme: Theme; setTheme: (t: Theme) => void; online: boolean }

const ThemeContext = createContext<ThemeContextType>({ theme: 'luxe', setTheme: () => {}, online: true })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('luxe')
  const [online, setOnline] = useState<boolean>(navigator.onLine)

  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])

  useEffect(() => { document.documentElement.setAttribute('data-theme', theme) }, [theme])

  const value = useMemo(() => ({ theme, setTheme, online }), [theme, online])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(){ return useContext(ThemeContext) }
