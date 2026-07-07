import type { MouseEvent } from 'react'
import PhoneMockup from '../PhoneMockup'
import { CASES } from '../../cases'
import type { CaseInfo, CaseScreen } from '../../cases'
import { fly } from '../../confetti'
import { href, navigate } from '../../router'

/* Стилизованные «экраны»-заглушки, выезжающие из карточки при наведении.
   Композиции нарочно разные, чтобы карточки не были близнецами.
   TODO: уходят по мере появления реальных экранов у кейсов */
function StockPreview({ kind }: { kind: NonNullable<CaseInfo['stockPreview']> }) {
  const screen = 'rounded-t-lg border border-line bg-elevated shadow-(--shadow-card)'
  if (kind === 'browser') {
    return (
      <div className={`${screen} absolute inset-x-8 top-10 bottom-0 transition-transform duration-300 ease-out group-hover:-translate-y-3`}>
        <div className="flex gap-1.5 border-b border-line p-2.5">
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
        </div>
      </div>
    )
  }
  if (kind === 'phone') {
    return (
      <div className={`${screen} absolute left-1/2 top-12 bottom-0 w-24 -translate-x-1/2 rounded-t-xl transition-transform duration-300 ease-out group-hover:-translate-y-4`}>
        <div className="mx-auto mt-2 h-1 w-8 rounded-full bg-line" />
      </div>
    )
  }
  return (
    <>
      <div className={`${screen} absolute left-6 top-14 bottom-0 w-28 -rotate-3 transition-transform duration-300 ease-out group-hover:-translate-y-3 group-hover:-rotate-6`} />
      <div className={`${screen} absolute right-6 top-9 bottom-0 w-28 rotate-2 transition-transform duration-300 ease-out group-hover:-translate-y-5 group-hover:rotate-4`} />
    </>
  )
}

/* Пружинная кривая — «раскрытие» веера с лёгким перелётом */
const spring =
  'transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none'

/* Веер из трёх экранов в мокапах телефона; при наведении раскрывается и
   целиком приподнимается, а из-под плашки с названием выскакивают иконки
   проекта (тот же конфетти-эффект, что в hero). Низ мокапов уходит за
   границу карточки — виден верхний «козырёк» веера. */
function FanPreview({ screens, icons = [] }: { screens: CaseScreen[]; icons?: string[] }) {
  const [first, second, third] = screens
  /* Иконки летят снизу, из-за плашки, к своим местам по краям карточки */
  const iconSpots = [
    { pos: 'left-[4%] top-[10%] w-8', vec: fly(56, 160, -12, 60) },
    { pos: 'right-[4%] top-[7%] w-9', vec: fly(-64, 170, 14, 150) },
    { pos: 'left-[3%] top-[58%] w-7', vec: fly(40, 90, -8, 240) },
    { pos: 'right-[3%] top-[54%] w-8', vec: fly(-48, 100, 10, 320) },
  ]
  return (
    <>
      <PhoneMockup
        src={first.src}
        className={`absolute left-1/2 top-7 w-28 origin-bottom -translate-x-[calc(50%+34px)] translate-y-1.5 -rotate-[7deg] ${spring} group-hover:-translate-x-[calc(50%+72px)] group-hover:-translate-y-2 group-hover:-rotate-[15deg]`}
      />
      <PhoneMockup
        src={third.src}
        className={`absolute left-1/2 top-7 w-28 origin-bottom translate-x-[calc(-50%+34px)] translate-y-1.5 rotate-[7deg] ${spring} group-hover:translate-x-[calc(-50%+72px)] group-hover:-translate-y-2 group-hover:rotate-[15deg]`}
      />
      <PhoneMockup
        src={second.src}
        className={`absolute left-1/2 top-7 z-10 w-28 origin-bottom -translate-x-1/2 ${spring} group-hover:-translate-y-3`}
      />
      {/* Иконки видны только при наведении (см. .case-card в index.css) */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        {icons.map((icon, i) => (
          <img
            key={icon}
            src={icon}
            alt=""
            className={`confetti absolute ${iconSpots[i % iconSpots.length].pos}`}
            style={iconSpots[i % iconSpots.length].vec}
          />
        ))}
      </div>
    </>
  )
}

const goTo = (slug: string) => (e: MouseEvent<HTMLAnchorElement>) => {
  // модификаторы и не-левую кнопку отдаём браузеру (новая вкладка и т.п.)
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  e.preventDefault()
  navigate(`case/${slug}`)
}

function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-8 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-[28px] font-semibold">Кейсы</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((item) => (
            <a
              key={item.slug}
              href={href(`case/${item.slug}`)}
              onClick={goTo(item.slug)}
              className="case-card group block rounded-2xl border border-line bg-elevated shadow-(--shadow-card) transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-(--shadow-hover)"
            >
              <div className="relative h-44 overflow-hidden rounded-t-2xl bg-bg">
                {item.screens ? (
                  <FanPreview screens={item.screens} icons={item.hoverIcons} />
                ) : (
                  <StockPreview kind={item.stockPreview ?? 'browser'} />
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-mute">
                  {item.year} · {item.type}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
