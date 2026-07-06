import { useState } from 'react'
import Star from '../Star'
import photoRoad from '../../assets/photo-road.jpg'
import photoGreen from '../../assets/photo-green.png'
import photoDiploma from '../../assets/photo-diploma.png'

const NAV_ITEMS = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Мои работы', href: '#projects' },
  { label: 'Контакты', href: '#contacts' },
]

function Hero() {
  const [revealed, setRevealed] = useState(false)

  const decorItem = (delay: string) =>
    `absolute transition-all duration-700 ease-out ${
      revealed ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
    } ${delay}`

  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="top-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <header className="relative z-10 pt-8">
        <nav className="flex justify-center gap-12 text-[15px] text-neutral-300">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Декор, проявляющийся при наведении на имя; на тач-устройствах виден всегда */}
      <div
        className={`hero-decor pointer-events-none absolute inset-0 hidden transition-opacity duration-500 md:block ${
          revealed ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <Star className={decorItem('delay-100') + ' left-[12%] top-[17%] w-9 -rotate-12 text-star'} />
        <p className={decorItem('delay-150') + ' left-[16%] top-[20%] rotate-[4deg] text-xl'}>
          Активно ищу работу!
        </p>
        <img
          src={photoRoad}
          alt=""
          className={decorItem('delay-200') + ' left-[13%] top-[28%] w-44 -rotate-6 rounded-2xl'}
        />

        <Star className={decorItem('delay-500') + ' left-[27%] top-[42%] w-6 rotate-[20deg] text-star'} />
        <Star className={decorItem('delay-500') + ' left-[26%] top-[49%] w-3.5 -rotate-6 text-star'} />
        <p className={decorItem('delay-300') + ' left-[21%] top-[62%] -rotate-[8deg] text-xl'}>
          мне 22 года
        </p>
        <img
          src={photoGreen}
          alt=""
          className={decorItem('delay-350') + ' left-[30%] top-[59%] w-32 rotate-6 rounded-2xl'}
        />
        <Star className={decorItem('delay-600') + ' bottom-[22%] left-[30%] w-5 rotate-12 text-star'} />

        <Star className={decorItem('delay-450') + ' right-[32%] top-[35%] w-5 rotate-6 text-star'} />
        <img
          src={photoDiploma}
          alt=""
          className={decorItem('delay-250') + ' right-[13%] top-[33%] w-48 -rotate-6 rounded-2xl'}
        />
        <Star className={decorItem('delay-400') + ' right-[12%] top-[32%] w-9 rotate-[24deg] text-star'} />
        <p className={decorItem('delay-350') + ' right-[9%] top-[61%] text-xl'}>
          Программист по образованию
        </p>
        <Star className={decorItem('delay-550') + ' bottom-[30%] right-[29%] w-4 -rotate-12 text-star'} />
        <Star className={decorItem('delay-600') + ' bottom-[26%] right-[26%] w-6 rotate-6 text-star'} />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div
          onMouseEnter={() => setRevealed(true)}
          onMouseLeave={() => setRevealed(false)}
        >
          <p className="text-2xl text-fog">Доброго времени суток! Меня зовут</p>
          <h1 className="mt-3 text-5xl font-semibold sm:text-[52px]">Людмила Сафронова</h1>
          <p className="mt-4 text-5xl font-semibold text-accent sm:text-[52px]">
            UX/UI-дизайнер<sup className="text-2xl">*</sup>
          </p>
        </div>
      </div>

      <p className="relative z-10 pb-14 text-center text-[15px] leading-relaxed text-fog">
        *а также немного UX-аналитик,
        <br />
        веб-, продуктовый и SMM дизайнер
      </p>
    </section>
  )
}

export default Hero
