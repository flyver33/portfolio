/* TODO: заменить стоковые карточки реальными кейсами (превью, название, год,
   тип, ссылка на страницу кейса) — контент автор приведёт позже */
const CASES = [
  { title: 'Кейс №1', year: '2025', type: 'Веб-сайт', preview: 'browser' },
  { title: 'Кейс №2', year: '2025', type: 'Мобильное приложение', preview: 'phone' },
  { title: 'Кейс №3', year: '2024', type: 'Веб-сайт', preview: 'duo' },
  { title: 'Кейс №4', year: '2024', type: 'Мобильное приложение', preview: 'duo' },
  { title: 'Кейс №5', year: '2024', type: 'Веб-сайт', preview: 'browser' },
  { title: 'Кейс №6', year: '2023', type: 'Мобильное приложение', preview: 'phone' },
] as const

/* Стилизованные «экраны», выезжающие из карточки при наведении.
   Композиции нарочно разные, чтобы карточки не были близнецами. */
function Preview({ kind }: { kind: (typeof CASES)[number]['preview'] }) {
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

function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-8 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-[28px] font-semibold">Кейсы</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((item) => (
            /* TODO: обернуть в ссылку на страницу кейса, когда появятся страницы */
            <article
              key={item.title}
              className="group cursor-pointer rounded-2xl border border-line bg-elevated shadow-(--shadow-card) transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-(--shadow-hover)"
            >
              <div className="relative h-44 overflow-hidden rounded-t-2xl bg-bg">
                <Preview kind={item.preview} />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm text-mute">
                  {item.year} · {item.type}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
