import type { CSSProperties } from 'react'
import Star from '../Star'
import portrait from '../../assets/portrait-cutout.png'
import { useInView } from '../../hooks/useInView'
import { typo } from '../../typography'

const TIMELINE = [
  {
    title: 'Заказная разработка',
    period: '2025 — н.в.',
    note: 'Проектирую интерфейсы для клиентских проектов',
  },
  {
    title: 'Курсы «Дизайн» — 7bits, IT-LIFT',
    period: '2023 — 2024',
    note: 'Практика продуктового и интерфейсного дизайна',
  },
  {
    title: 'Бакалавриат, ОмГТУ',
    period: '2021 — 2025',
    note: '«Фундаментальная информатика и информационные технологии», профиль «Технологии ИИ»',
  },
]

const PORTFOLIO_URL = 'https://disk.yandex.ru/i/5hCU9aSmG87cUA'

const delay = (ms: number, dur?: number): CSSProperties =>
  ({ '--d': `${ms}ms`, ...(dur ? { '--dur': `${dur}ms` } : {}) }) as CSSProperties

function About() {
  const heading = useInView<HTMLDivElement>(0.5)
  const timeline = useInView<HTMLDivElement>(0.25)

  return (
    // overflow-x-clip: гасим горизонтальный выход ленты, но не режем её по вертикали
    <section id="about" className="relative scroll-mt-8 overflow-x-clip pt-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[3fr_2fr]">
        <div className="pb-24">
          <div ref={heading.ref} className={heading.inView ? 'in-view' : ''}>
            <h2 className="font-display text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.15]">
              <span className="line-mask block">
                <span className="line-reveal block" style={delay(0)}>
                  люблю делать жизни
                </span>
              </span>
              <span className="line-mask block">
                <span className="line-reveal inline-flex flex-wrap items-baseline gap-[0.35em] whitespace-nowrap md:flex-nowrap" style={delay(550)}>
                  <span>людей чуточку</span>
                  {/* «проще» догоняет с ускорением, звезда — конфетти как в hero */}
                  <span className="line-mask inline-block">
                    <span className="line-reveal inline-block text-accent" style={delay(1150, 600)}>
                      проще
                    </span>
                  </span>
                  <Star
                    className="confetti inline-block w-7 self-center text-accent"
                    style={{ '--fx': '-48px', '--fy': '36px', '--rot': '18deg', '--d': '1650ms' } as CSSProperties}
                    aria-hidden="true"
                  />
                </span>
              </span>
            </h2>
          </div>

          <div
            ref={timeline.ref}
            className={`mt-16 border-l border-line pl-8 ${timeline.inView ? 'in-view' : ''}`}
          >
            {/* Каскад сверху вниз, шаг намеренно неровный */}
            {TIMELINE.map((item, i) => (
              <div
                key={item.title}
                className="rise relative pb-10 last:pb-0"
                style={delay([0, 140, 320][i])}
              >
                <span
                  className="absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-mute">{item.period}</p>
                <p className="mt-2 max-w-md text-[17px] leading-[1.32] text-fog">{typo(item.note)}</p>
              </div>
            ))}

            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noreferrer"
              className="rise mt-12 inline-block rounded-lg bg-accent px-6 py-3 text-[15px] font-semibold text-bg transition-colors duration-150 hover:bg-accent-hover active:bg-accent-press"
              style={delay(430)}
            >
              Смотреть резюме
            </a>
          </div>
        </div>

        <div className="relative hidden md:block">
          {/* Пара звёзд справа: крупная чуть выше и левее мелкой */}
          <Star className="absolute right-12 top-24 w-8 -rotate-12 text-accent" aria-hidden="true" />
          <Star className="absolute -right-2 top-40 w-5 rotate-12 text-accent" aria-hidden="true" />
          {/* Низ фото уходит под ленту «about me» */}
          <img
            src={portrait}
            alt="Людмила Сафронова"
            className="absolute bottom-0 left-1/2 w-[115%] max-w-[470px] -translate-x-1/2"
          />
        </div>
      </div>

      {/* Лента about me во весь экран, обрезает фото снизу */}
      <div className="relative z-10 -mx-10 -mt-14 -rotate-1">
        <div className="overflow-hidden bg-accent py-3">
          <div className="marquee font-display text-2xl font-semibold text-bg" aria-hidden="true">
            {Array.from({ length: 2 }).map((_, half) => (
              <span key={half} className="flex shrink-0">
                {Array.from({ length: 10 }).map((_, i) => (
                  <span key={i} className="mx-6 flex items-center gap-12">
                    about me
                    <Star className="w-5" />
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
        {/* Наклонная плашка фона: прячет прямой нижний срез фото под лентой */}
        <div className="absolute left-0 top-full h-16 w-full bg-bg" aria-hidden="true" />
      </div>
    </section>
  )
}

export default About
