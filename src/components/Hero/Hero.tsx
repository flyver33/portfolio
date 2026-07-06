import { useState } from 'react'
import type { CSSProperties } from 'react'
import Star from '../Star'
import photoRoad from '../../assets/photo-road.jpg'
import photoGreen from '../../assets/photo-green.png'
import photoDiploma from '../../assets/photo-diploma.png'

const NAV_ITEMS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Мои работы', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
]

/* Вектор полёта конфетти: откуда (относительно финальной позиции) элемент
   вылетает — направлен от центра экрана, плюс финальный поворот и задержка */
const fly = (fx: number, fy: number, rot: number, delay: number): CSSProperties =>
  ({
    '--fx': `${fx}px`,
    '--fy': `${fy}px`,
    '--rot': `${rot}deg`,
    '--d': `${delay}ms`,
  }) as CSSProperties

function Hero() {
  const [revealed, setRevealed] = useState(false)

  return (
    <section
      id="hero"
      className="dot-grid relative flex min-h-screen flex-col overflow-hidden"
    >
      <div className="top-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <header className="relative z-10 pt-8">
        <nav className="flex justify-center gap-12 text-[15px] font-semibold text-fog">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Конфетти: при наведении на имя фото и звёзды вылетают из центра */}
      <div
        className={`pointer-events-none absolute inset-0 hidden md:block ${revealed ? 'revealed' : ''}`}
        aria-hidden="true"
      >
        <Star className="confetti absolute left-[12%] top-[17%] w-9 text-accent" style={fly(620, 300, -12, 260)} />
        <p className="confetti absolute left-[16%] top-[20%] text-[15px]" style={fly(560, 280, 4, 160)}>
          Активно ищу работу!
        </p>
        <img
          src={photoRoad}
          alt=""
          className="confetti absolute left-[13%] top-[28%] w-44 rounded-3xl shadow-(--shadow-card)"
          style={fly(580, 180, -6, 0)}
        />

        <Star className="confetti absolute left-[27%] top-[42%] w-6 text-accent" style={fly(400, 60, 20, 330)} />
        <Star className="confetti absolute left-[26%] top-[49%] w-3.5 text-accent" style={fly(420, 20, -6, 400)} />
        <p className="confetti absolute left-[21%] top-[62%] text-[15px]" style={fly(500, -120, -8, 200)}>
          мне 22 года
        </p>
        <img
          src={photoGreen}
          alt=""
          className="confetti absolute left-[30%] top-[59%] w-32 rounded-3xl shadow-(--shadow-card)"
          style={fly(340, -100, 6, 60)}
        />
        <Star className="confetti absolute bottom-[22%] left-[30%] w-5 text-accent" style={fly(350, -230, 12, 450)} />

        <Star className="confetti absolute right-[32%] top-[35%] w-5 text-accent" style={fly(-300, 120, 6, 370)} />
        <img
          src={photoDiploma}
          alt=""
          className="confetti absolute right-[13%] top-[33%] w-48 rounded-3xl shadow-(--shadow-card)"
          style={fly(-600, 140, -6, 120)}
        />
        <Star className="confetti absolute right-[12%] top-[32%] w-9 text-accent" style={fly(-640, 160, 24, 290)} />
        <p className="confetti absolute right-[9%] top-[61%] text-[15px]" style={fly(-620, -110, 0, 230)}>
          Программист по образованию
        </p>
        <Star className="confetti absolute bottom-[30%] right-[29%] w-4 text-accent" style={fly(-340, -180, -12, 430)} />
        <Star className="confetti absolute bottom-[26%] right-[26%] w-6 text-accent" style={fly(-390, -220, 6, 490)} />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div
          onMouseEnter={() => setRevealed(true)}
          onMouseLeave={() => setRevealed(false)}
        >
          <p className="text-xl text-fog">Доброго времени суток! Меня зовут</p>
          <h1 className="font-display mt-5 text-[clamp(36px,4.5vw,56px)] font-bold leading-[1.05]">
            Людмила Сафронова
          </h1>
          <p className="font-display mt-4 text-[clamp(28px,3.2vw,40px)] font-semibold leading-[1.08] text-accent">
            UX/UI-дизайнер<sup>*</sup>
          </p>
        </div>
      </div>

      <p className="relative z-10 pb-14 text-center text-sm leading-[1.3] text-fog">
        *а также немного UX-аналитик,
        <br />
        веб-, продуктовый и SMM дизайнер
      </p>
    </section>
  )
}

export default Hero
