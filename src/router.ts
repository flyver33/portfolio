import { useEffect, useState } from 'react'

/* Мини-роутер на History API: страниц всего две разновидности (главная и
   страница кейса), полноценный react-router здесь избыточен.
   Для GitHub Pages прямые заходы на /portfolio/case/... обслуживает
   404.html — копия index.html, создаётся на этапе build (см. package.json). */

const BASE = import.meta.env.BASE_URL

/** Путь внутри сайта без базового префикса и слешей по краям: '' | 'case/<slug>' */
export function currentPath(): string {
  const p = window.location.pathname
  const rest = p.startsWith(BASE) ? p.slice(BASE.length) : p.replace(/^\//, '')
  return rest.replace(/\/+$/, '')
}

export function navigate(path: string) {
  window.history.pushState(null, '', BASE + path)
  window.dispatchEvent(new PopStateEvent('popstate'))
  // instant, а не smooth из html { scroll-behavior } — это смена страницы
  window.scrollTo({ top: 0, behavior: 'instant' })
}

export function usePath(): string {
  const [path, setPath] = useState(currentPath)
  useEffect(() => {
    const onPop = () => setPath(currentPath())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  return path
}

/** href для <a>, чтобы работали middle-click и «открыть в новой вкладке» */
export const href = (path: string) => BASE + path
