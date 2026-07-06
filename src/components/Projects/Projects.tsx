import Star from '../Star'

/* TODO: заменить заглушки реальными кейсами (обложка, название, ссылка) */
const PROJECTS = [
  { title: 'Кейс №1', description: 'Скоро здесь появится проект' },
  { title: 'Кейс №2', description: 'Скоро здесь появится проект' },
  { title: 'Кейс №3', description: 'Скоро здесь появится проект' },
]

function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-8 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-4xl font-semibold">Мои работы</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-ink-soft p-6 transition-colors duration-300 hover:border-accent/50"
            >
              <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-accent/15 to-transparent">
                <Star
                  className="w-10 text-star transition-transform duration-500 group-hover:rotate-45"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 text-xl font-medium">{project.title}</h3>
              <p className="mt-1 text-neutral-400">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
