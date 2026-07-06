/* TODO: подставить реальные ссылки и адреса */
const CONTACTS = [
  {
    label: 'Telegram',
    value: '@username',
    href: 'https://t.me/username',
    icon: (
      // Иконки в стиле Phosphor Icons (phosphoricons.com)
      <svg viewBox="0 0 256 256" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M228.6 49.6a12 12 0 0 0-12.2-2L27.9 121.4a12 12 0 0 0 .9 22.6l45.2 14.2 20.5 60.4a12 12 0 0 0 19.6 4.7l28.4-27.3 43.7 33.3a12 12 0 0 0 19-6.8l27.6-160.7a12 12 0 0 0-4.2-12.2ZM175.1 200l-63.8-48.6 91.4-83.2Z" />
      </svg>
    ),
  },
  {
    label: 'Почта',
    value: 'hello@example.com',
    href: 'mailto:hello@example.com',
    icon: (
      <svg viewBox="0 0 256 256" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-96 85.2L61.6 64h132.8ZM98.7 128 40 181.8V74.2Zm11.8 10.9 12.1 11a8 8 0 0 0 10.8 0l12.1-11L203.4 192H52.6ZM157.3 128 216 74.2v107.6Z" />
      </svg>
    ),
  },
  {
    label: 'Behance',
    value: 'behance.net/username',
    href: 'https://behance.net/username',
    icon: (
      <svg viewBox="0 0 256 256" className="h-6 w-6" fill="currentColor" aria-hidden="true">
        <path d="M160 80h56a8 8 0 0 1 0 16h-56a8 8 0 0 1 0-16Zm-36 44a34 34 0 0 0-20-62H40a8 8 0 0 0-8 8v116a8 8 0 0 0 8 8h72a38 38 0 0 0 12-74Zm-76-46h56a18 18 0 0 1 0 36H48Zm64 100H48v-48h64a22 22 0 0 1 0 44Zm140-32a8 8 0 0 1-8 8h-63.3a28 28 0 0 0 47.3 13.1 8 8 0 0 1 11.4 11.2A44 44 0 1 1 188 102a44.05 44.05 0 0 1 44 44Zm-70.7-8h53.4a28 28 0 0 0-53.4 0Z" />
      </svg>
    ),
  },
]

function Contacts() {
  return (
    <section id="contacts" className="relative scroll-mt-8 py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-semibold">Контакты</h2>
        <p className="mt-4 text-lg text-neutral-300">
          Открыта к предложениям — напишите мне, и обсудим ваш проект.
        </p>
        <ul className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {CONTACTS.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-ink-soft px-6 py-4 text-neutral-200 transition-colors duration-300 hover:border-accent/50 hover:text-white"
              >
                <span className="text-accent">{contact.icon}</span>
                <span className="text-left">
                  <span className="block text-sm text-neutral-400">{contact.label}</span>
                  {contact.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-24 pb-8 text-center text-sm text-neutral-500">
        © 2026 Людмила Сафронова
      </footer>
    </section>
  )
}

export default Contacts
