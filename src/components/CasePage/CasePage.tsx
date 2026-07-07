import { useEffect } from 'react'
import type { MouseEvent } from 'react'
import Star from '../Star'
import PhoneMockup from '../PhoneMockup'
import type { CaseInfo } from '../../cases'
import { href, navigate } from '../../router'

const SITE_TITLE = 'Людмила Сафронова — UX/UI-дизайнер'

const goHome = (e: MouseEvent<HTMLAnchorElement>) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  e.preventDefault()
  navigate('')
}

/* Страница кейса. Структура по .claude/memory/structure.md: краткое описание,
   экраны, ссылка на сайт/Figma. «Оформленные изображения с экранами» автор
   приведёт позже — под них добавится отдельный блок ниже экранов. */
function CasePage({ info }: { info: CaseInfo }) {
  useEffect(() => {
    document.title = `${info.title} — Людмила Сафронова`
    return () => {
      document.title = SITE_TITLE
    }
  }, [info])

  return (
    <div className="min-h-screen">
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <a
          href={href('')}
          onClick={goHome}
          className="text-[15px] font-semibold text-fog transition-colors duration-150 hover:text-white"
        >
          ← Все кейсы
        </a>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-16 pb-32">
        <p className="text-sm text-mute">
          {info.year} · {info.type}
        </p>
        <h1 className="font-display mt-3 flex items-center gap-4 text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.08]">
          {info.title}
          <Star className="w-7 shrink-0 -rotate-12 text-accent" aria-hidden="true" />
        </h1>
        {info.description && (
          <p className="mt-5 max-w-xl text-xl leading-[1.3] text-fog">{info.description}</p>
        )}
        {info.link && (
          <a
            href={info.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-lg bg-accent px-6 py-3 text-[15px] font-semibold text-bg transition-colors duration-150 hover:bg-accent-hover active:bg-accent-press"
          >
            {info.link.label}
          </a>
        )}

        {info.screens ? (
          <div className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {info.screens.map((screen) => (
              <figure key={screen.caption} className="m-0">
                <PhoneMockup
                  src={screen.src}
                  alt={`Экран «${screen.caption}»`}
                  className="mx-auto w-full max-w-[280px]"
                />
                <figcaption className="mt-4 text-center text-sm text-fog">
                  {screen.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          /* TODO: контент кейса (описание, экраны, ссылка) автор приведёт позже */
          <p className="mt-20 max-w-xl text-[17px] leading-[1.32] text-fog">
            Материалы этого кейса скоро появятся.
          </p>
        )}
      </main>
    </div>
  )
}

export default CasePage
