import Star from '../Star'
import portrait from '../../assets/portrait-cutout.png'

const SKILLS = [
  'UX/UI-дизайн',
  'UX-аналитика',
  'Веб-дизайн',
  'Продуктовый дизайн',
  'SMM-дизайн',
]

function About() {
  return (
    <section id="about" className="relative scroll-mt-8 py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[2fr_3fr]">
        <div className="relative mx-auto max-w-xs md:max-w-sm">
          <Star className="absolute -left-6 top-6 w-8 -rotate-12 text-star" aria-hidden="true" />
          <Star className="absolute -right-4 bottom-16 w-5 rotate-12 text-star" aria-hidden="true" />
          <img
            src={portrait}
            alt="Людмила Сафронова"
            className="w-full drop-shadow-[0_0_60px_rgba(134,116,245,0.25)]"
          />
        </div>

        <div>
          <h2 className="text-4xl font-semibold">Обо мне</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-300">
            <p>
              Мне 22 года, я программист по образованию и UX/UI-дизайнер по призванию.
              Технический бэкграунд помогает мне говорить с разработчиками на одном языке
              и проектировать интерфейсы, которые реально можно собрать.
            </p>
            <p>
              Помимо интерфейсов занимаюсь UX-аналитикой, веб-, продуктовым
              и SMM-дизайном. Сейчас активно ищу работу и открыта к предложениям.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-sm text-neutral-200"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
