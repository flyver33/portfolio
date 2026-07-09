import { useEffect, useRef, useState } from 'react'

/* Только для тач-устройств (нет hover): подсвечивает «активную» карточку —
   верхнюю из полностью видимых. Активной считается нижняя в потоке карточка,
   чья верхушка уже поднялась выше «линии чтения» (≈42% высоты экрана) и которая
   ещё в кадре. Промотанная выше линии карточка уступает активность следующей.
   На устройствах с hover хук не работает — там веер раскрывается по наведению. */
export function useActiveCard() {
  const [active, setActive] = useState<string | null>(null)
  const els = useRef(new Map<string, HTMLElement>())
  const cbs = useRef(new Map<string, (el: HTMLElement | null) => void>())

  useEffect(() => {
    if (!window.matchMedia('(hover: none)').matches) return

    let raf = 0
    const compute = () => {
      raf = 0
      const line = window.innerHeight * 0.42
      let pick: string | null = null
      // Map хранит карточки в порядке DOM; берём последнюю (нижнюю), чья
      // верхушка выше линии и которая ещё видна — это верхняя из видимых
      els.current.forEach((el, slug) => {
        const r = el.getBoundingClientRect()
        if (r.top <= line && r.bottom > 0) pick = slug
      })
      setActive(pick)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  // Стабильный ref-колбэк на слаг — чтобы карта не пересобиралась при ререндере
  const register = (slug: string) => {
    let cb = cbs.current.get(slug)
    if (!cb) {
      cb = (el: HTMLElement | null) => {
        if (el) els.current.set(slug, el)
        else els.current.delete(slug)
      }
      cbs.current.set(slug, cb)
    }
    return cb
  }

  return { active, register }
}
