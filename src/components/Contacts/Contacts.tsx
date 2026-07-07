/* Иконки — Phosphor Icons (phosphoricons.com), вес Fill, 24px */
const icons = {
  telegram: (
    <svg viewBox="0 0 256 256" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M228.6 49.6a12 12 0 0 0-12.2-2L27.9 121.4a12 12 0 0 0 .9 22.6l45.2 14.2 20.5 60.4a12 12 0 0 0 19.6 4.7l28.4-27.3 43.7 33.3a12 12 0 0 0 19-6.8l27.6-160.7a12 12 0 0 0-4.2-12.2ZM175.1 200l-63.8-48.6 91.4-83.2Z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 256 256" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-96 85.2L61.6 64h132.8ZM98.7 128 40 181.8V74.2Zm11.8 10.9 12.1 11a8 8 0 0 0 10.8 0l12.1-11L203.4 192H52.6ZM157.3 128 216 74.2v107.6Z" />
    </svg>
  ),
  max: (
    <svg viewBox="0 0 256 256" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M128 24A104 104 0 0 0 36.2 176.9l-11.4 34a16 16 0 0 0 20.3 20.3l34-11.4A104 104 0 1 0 128 24Zm-48 92h96a8 8 0 0 1 0 16H80a8 8 0 0 1 0-16Zm64 48H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 256 256" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M216 24H40a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM96 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0ZM88 96a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm96 80a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.8-1.8A36 36 0 0 1 184 140Z" />
    </svg>
  ),
}

/* TODO: подставить реальные адреса (Telegram, почта, Max, LinkedIn) */
const CONTACTS = [
  { label: 'Telegram', value: '@username', href: 'https://t.me/username', icon: icons.telegram },
  { label: 'Почта', value: 'hello@example.com', href: 'mailto:hello@example.com', icon: icons.mail },
  { label: 'Max', value: '@username', href: 'https://max.ru/username', icon: icons.max },
  { label: 'LinkedIn', value: 'linkedin.com/in/username', href: 'https://linkedin.com/in/username', icon: icons.linkedin },
]

function Contacts() {
  return (
    <section id="contacts" className="relative scroll-mt-8 pt-36">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="font-display text-[28px] font-semibold">Контакты</h2>
        <p className="mt-4 text-[17px] leading-[1.32] text-fog">
          Активно ищу работу и открыта к предложениям — напишите мне, отвечу быстро
        </p>
        <ul className="mt-8">
          {CONTACTS.map((contact) => (
            <li key={contact.label} className="border-b border-line last:border-b-0">
              <a
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 py-4"
              >
                <span className="text-fog transition-colors duration-150 group-hover:text-accent">
                  {contact.icon}
                </span>
                <span className="w-24 shrink-0 text-sm text-mute">{contact.label}</span>
                <span className="text-[17px] transition-colors duration-150 group-hover:text-accent-hover">
                  {contact.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <footer className="mt-28 pb-8 text-center text-sm text-mute">
        © 2026 Людмила Сафронова
      </footer>
    </section>
  )
}

export default Contacts
