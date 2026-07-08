import type { MouseEvent } from 'react'
import Star from '../Star'
import PhoneMockup from '../PhoneMockup'
import BrowserMockup from '../BrowserMockup'
import { CASES } from '../../cases'
import type { CaseInfo, CaseScreen, CaseWebScreens } from '../../cases'
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

/* Крупные звёзды-конфетти карточки: расположение как у иконок веера,
   но мельче. У Effective Office — оранжевые (свой svg через src),
   у остальных веб-кейсов — стандартные фиолетовые */
const bigStarSpots = [
  { pos: 'left-[3%] -top-9 w-6', vec: fly(58, 185, -12, 40) },
  { pos: 'right-[6%] -top-11 w-7', vec: fly(-66, 200, 14, 100) },
  { pos: '-left-9 top-[58%] w-5', vec: fly(52, 90, -8, 170) },
]

function BigStars({ src }: { src?: string }) {
  return (
    <>
      {bigStarSpots.map((spot, i) =>
        src ? (
          <img
            key={`${spot.pos}-${i}`}
            src={src}
            alt=""
            className={`confetti confetti-soft absolute ${spot.pos}`}
            style={spot.vec}
          />
        ) : (
          <Star
            key={`${spot.pos}-${i}`}
            className={`confetti confetti-soft absolute ${spot.pos} text-accent`}
            style={spot.vec}
          />
        ),
      )}
    </>
  )
}

/* Веер из трёх экранов в мокапах телефона; при наведении раскрывается,
   приподнимается и вылезает за рамки карточки (обрезка только снизу — под
   плашкой, см. .fan-clip). Из-под плашки выскакивают иконки проекта и
   мелкие звёздочки — конфетти-эффект как в hero, у иконок отскок мягче. */
function FanPreview({
  screens,
  icons = [],
  starIcon,
}: {
  screens: CaseScreen[]
  icons?: string[]
  starIcon?: string
}) {
  const [first, second, third] = screens
  /* Иконки летят снизу, из-за плашки, за края карточки — мимо экранов.
     Вместе со звёздочками рассеяны по неровной арке вокруг веера */
  const iconSpots = [
    { pos: 'left-[3%] -top-9 w-9', vec: fly(58, 185, -12, 40) },
    { pos: 'right-[6%] -top-11 w-10', vec: fly(-66, 200, 14, 100) },
    { pos: '-left-9 top-[58%] w-8', vec: fly(52, 90, -8, 170) },
    { pos: '-right-10 top-[48%] w-9', vec: fly(-60, 96, 10, 240) },
  ]
  return (
    <>
      <PhoneMockup
        src={first.src}
        className={`absolute left-1/2 top-7 w-28 origin-bottom -translate-x-[calc(50%+34px)] translate-y-1.5 -rotate-[7deg] ${spring} group-hover:-translate-x-[calc(50%+80px)] group-hover:-translate-y-4 group-hover:-rotate-[15deg]`}
      />
      <PhoneMockup
        src={third.src}
        className={`absolute left-1/2 top-7 w-28 origin-bottom translate-x-[calc(-50%+34px)] translate-y-1.5 rotate-[7deg] ${spring} group-hover:translate-x-[calc(-50%+80px)] group-hover:-translate-y-4 group-hover:rotate-[15deg]`}
      />
      <PhoneMockup
        src={second.src}
        className={`absolute left-1/2 top-7 z-10 w-28 origin-bottom -translate-x-1/2 ${spring} group-hover:-translate-y-10`}
      />
      {/* Иконки и звёздочки видны только при наведении (см. .case-card в index.css) */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        {starIcon && <BigStars src={starIcon} />}
        {icons.map((icon, i) => (
          <img
            key={`${icon}-${i}`}
            src={icon}
            alt=""
            className={`confetti confetti-soft absolute ${iconSpots[i % iconSpots.length].pos}`}
            style={iconSpots[i % iconSpots.length].vec}
          />
        ))}
        {/* Звёздочки: спутники при иконках на разном отлёте + пара случайных
            вне групп — вместе с иконками неровная арка «случайного» конфетти */}
        <Star className="confetti absolute left-[2%] top-[1%] w-2.5 text-accent" style={fly(40, 150, 20, 210)} />
        <Star className="confetti absolute right-[1%] -top-4 w-4 text-accent" style={fly(-58, 182, -16, 60)} />
        <Star className="confetti absolute -left-8 top-[36%] w-3 text-accent" style={fly(46, 110, 24, 300)} />
        {/* случайная, вне групп */}
        <Star className="confetti absolute -right-9 top-[22%] w-2.5 text-accent" style={fly(-52, 126, 18, 370)} />
        {/* верхушка над центральным экраном */}
        <Star className="confetti absolute left-[42%] -top-10 w-4 text-accent" style={fly(22, 208, 16, 190)} />
        <Star className="confetti absolute left-[56%] -top-7 w-2.5 text-accent" style={fly(-18, 196, -22, 350)} />
      </div>
    </>
  )
}

/* Превью веб-кейса: скрин сайта в браузере посередине, мобильные экраны
   по бокам; при наведении композиция раздвигается, а из-под плашки вылетают
   только стандартные фиолетовые звёздочки — без иконок проекта */
function WebFanPreview({ web }: { web: CaseWebScreens }) {
  const [left, right] = web.phones
  return (
    <>
      <PhoneMockup
        src={left.src}
        className={`absolute left-[8%] top-14 w-[88px] origin-bottom -rotate-[8deg] ${spring} group-hover:-translate-x-4 group-hover:-translate-y-3 group-hover:-rotate-[14deg]`}
      />
      <PhoneMockup
        src={right.src}
        className={`absolute right-[8%] top-14 w-[88px] origin-bottom rotate-[8deg] ${spring} group-hover:translate-x-4 group-hover:-translate-y-3 group-hover:rotate-[14deg]`}
      />
      <BrowserMockup
        src={web.site.src}
        className={`absolute left-1/2 top-9 z-10 w-[56%] -translate-x-1/2 ${spring} group-hover:-translate-y-7`}
      />
      {/* Звёздочки видны только при наведении (см. .case-card в index.css) */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        <BigStars />
        <Star className="confetti absolute left-[4%] -top-6 w-3 text-accent" style={fly(44, 170, 18, 60)} />
        <Star className="confetti absolute right-[3%] -top-8 w-4 text-accent" style={fly(-52, 186, -14, 150)} />
        <Star className="confetti absolute -left-7 top-[42%] w-3 text-accent" style={fly(48, 104, 22, 250)} />
        <Star className="confetti absolute -right-8 top-[30%] w-2.5 text-accent" style={fly(-46, 118, 16, 330)} />
        <Star className="confetti absolute left-[38%] -top-9 w-3.5 text-accent" style={fly(20, 200, -20, 190)} />
        <Star className="confetti absolute left-[58%] -top-5 w-2.5 text-accent" style={fly(-16, 188, 24, 380)} />
      </div>
    </>
  )
}

/* Превью веб-кейса с одним экраном: скрин сайта в браузере по центру;
   при наведении приподнимается, из-под плашки вылетают только стандартные
   фиолетовые звёздочки */
function SoloWebPreview({ screen }: { screen: CaseScreen }) {
  return (
    <>
      <BrowserMockup
        src={screen.src}
        className={`absolute left-1/2 top-10 w-[72%] -translate-x-1/2 ${spring} group-hover:-translate-y-6`}
      />
      {/* Звёздочки видны только при наведении (см. .case-card в index.css) */}
      <div className="pointer-events-none absolute inset-0 z-20" aria-hidden="true">
        <BigStars />
        <Star className="confetti absolute left-[5%] -top-6 w-3 text-accent" style={fly(42, 168, 20, 70)} />
        <Star className="confetti absolute right-[4%] -top-8 w-4 text-accent" style={fly(-50, 184, -16, 160)} />
        <Star className="confetti absolute -left-7 top-[40%] w-3 text-accent" style={fly(46, 102, 24, 260)} />
        <Star className="confetti absolute -right-8 top-[28%] w-2.5 text-accent" style={fly(-44, 116, 18, 340)} />
        <Star className="confetti absolute left-[36%] -top-9 w-3.5 text-accent" style={fly(22, 198, -18, 200)} />
        <Star className="confetti absolute left-[60%] -top-5 w-2.5 text-accent" style={fly(-14, 186, 22, 390)} />
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
              className="case-card group relative block rounded-2xl border border-line bg-elevated shadow-(--shadow-card) transition-all duration-300 ease-out hover:z-20 hover:-translate-y-2 hover:shadow-(--shadow-hover)"
            >
              <div
                className={`relative h-44 rounded-t-2xl bg-bg ${item.screens || item.webScreens || item.cardScreen ? 'fan-clip' : 'overflow-hidden'}`}
              >
                {item.screens ? (
                  <FanPreview screens={item.screens} icons={item.hoverIcons} starIcon={item.starIcon} />
                ) : item.webScreens ? (
                  <WebFanPreview web={item.webScreens} />
                ) : item.cardScreen ? (
                  <SoloWebPreview screen={item.cardScreen} />
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
