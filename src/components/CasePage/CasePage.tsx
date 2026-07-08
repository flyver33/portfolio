import { useEffect, useRef } from 'react'
import type { MouseEvent, RefObject } from 'react'
import PhoneMockup from '../PhoneMockup'
import MonitorMockup from '../MonitorMockup'
import type { CaseInfo, CaseSection, CaseWebScreens } from '../../cases'
import { href, navigate } from '../../router'
import { typo } from '../../typography'

const SITE_TITLE = 'Людмила Сафронова — UX/UI-дизайнер'

const goHome = (e: MouseEvent<HTMLAnchorElement>) => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  e.preventDefault()
  navigate('')
}

const ArrowLeftIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-6"
  >
    <path d="M19.5 12h-15M11 5.5 4.5 12l6.5 6.5" />
  </svg>
)

const CalendarIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-5 shrink-0 text-accent"
  >
    <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
    <path d="M3.5 9.5h17M8.5 3v3.5M15.5 3v3.5" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="w-5 shrink-0 text-accent"
  >
    <rect x="3.5" y="7.5" width="17" height="13" rx="2.5" />
    <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17" />
  </svg>
)

/* Пара экранов блока: второй чуть ниже и заходит под первый,
   при наведении каждый приподнимается */
function SectionScreens({ section }: { section: CaseSection }) {
  const [front, back] = section.screens
  return (
    <div className="flex items-start justify-center">
      <PhoneMockup
        notch
        src={front.src}
        alt={`Экран «${front.caption}»`}
        className="z-10 w-[46%] max-w-[240px] -rotate-3 transition-transform duration-300 hover:-translate-y-3"
      />
      <PhoneMockup
        notch
        src={back.src}
        alt={`Экран «${back.caption}»`}
        className="mt-12 -ml-10 w-[46%] max-w-[240px] rotate-2 transition-transform duration-300 hover:z-20 hover:-translate-y-3"
      />
    </div>
  )
}

/* Витрина веб-кейса: монитор со скрином сайта, смещённый влево от центра,
   и мобильные экраны по бокам на разной высоте — композиция нарочно
   асимметричная. На узких экранах телефоны встают рядом под монитором */
function WebShowcase({ web }: { web: CaseWebScreens }) {
  const [left, right] = web.phones
  return (
    <div className="relative mt-24">
      <MonitorMockup
        src={web.site.src}
        alt={`Скрин сайта — ${web.site.caption.toLowerCase()}`}
        className="sm:ml-[3%] sm:w-[74%]"
      />
      {/* sm:contents убирает обёртку из раскладки — телефоны позиционируются
          от общего relative-контейнера */}
      <div className="mt-10 flex items-start justify-center gap-6 sm:contents">
        <PhoneMockup
          notch
          src={left.src}
          alt={`Мобильный экран «${left.caption}»`}
          className="w-[42%] max-w-[200px] -rotate-[5deg] transition-transform duration-300 hover:-translate-y-3 sm:absolute sm:bottom-[-6%] sm:left-[3%] sm:w-[17%]"
        />
        <PhoneMockup
          notch
          src={right.src}
          alt={`Мобильный экран «${right.caption}»`}
          className="mt-10 w-[42%] max-w-[200px] rotate-[4deg] transition-transform duration-300 hover:-translate-y-3 sm:absolute sm:right-[1%] sm:top-[12%] sm:mt-0 sm:w-[19%]"
        />
      </div>
    </div>
  )
}

/* Витрина видео-демо: монитор с видео по центру, за рамкой пара мягких
   градиентных пятен — фиолетовое в тон акценту и тёплое в тон сайтам */
function VideoShowcase({
  video,
  videoRef,
}: {
  video: NonNullable<CaseInfo['video']>
  videoRef: RefObject<HTMLVideoElement | null>
}) {
  return (
    <div className="relative mt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[10%] left-[-6%] h-[75%] w-[55%] rounded-full bg-[radial-gradient(closest-side,rgba(119,139,255,0.22),transparent)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[6%] right-[-5%] h-[70%] w-[50%] rounded-full bg-[radial-gradient(closest-side,rgba(255,178,102,0.15),transparent)] blur-3xl"
      />
      <MonitorMockup className="relative mx-auto sm:w-[84%]">
        <video
          ref={videoRef}
          src={video.src}
          poster={video.poster}
          controls
          playsInline
          preload="metadata"
          className="block aspect-video w-full rounded-[9px]"
        />
      </MonitorMockup>
    </div>
  )
}

/* Таймкоды вида «0:32» в тексте описания становятся кнопками-перемотками
   видео ниже. split с захватом: нечётные индексы — сами таймкоды */
const TIMECODE = /(\d+:\d{2})/g

const toSeconds = (timecode: string) => {
  const [minutes, seconds] = timecode.split(':').map(Number)
  return minutes * 60 + seconds
}

function TimecodeText({ text, onSeek }: { text: string; onSeek: (seconds: number) => void }) {
  return (
    <>
      {text.split(TIMECODE).map((part, i) =>
        i % 2 === 1 ? (
          <button
            key={`${part}-${i}`}
            type="button"
            onClick={() => onSeek(toSeconds(part))}
            aria-label={`Перемотать видео на ${part}`}
            className="cursor-pointer font-medium text-accent underline decoration-accent/50 decoration-dotted underline-offset-4 transition-colors duration-150 hover:text-accent-hover"
          >
            {part}
          </button>
        ) : (
          typo(part)
        ),
      )}
    </>
  )
}

/* Страница кейса: липкая шапка (стрелка, заголовок, ссылка на фигму),
   чипы периода и формата, описание и чередующиеся блоки «экраны + текст» */
function CasePage({ info }: { info: CaseInfo }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    document.title = `${info.title} — Людмила Сафронова`
    return () => {
      document.title = SITE_TITLE
    }
  }, [info])

  const seekTo = (seconds: number) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = seconds
    void video.play()
    video.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <div className="relative min-h-screen">
      {/* Свечение как в hero, но по бокам первого экрана */}
      <div className="side-glow pointer-events-none absolute inset-x-0 top-0 h-screen" aria-hidden="true" />
      <header className="sticky top-0 z-40 border-b border-line/60 bg-bg">
        <div className="mx-auto flex max-w-6xl items-center gap-5 px-6 py-4">
          <a
            href={href('')}
            onClick={goHome}
            aria-label="Ко всем кейсам"
            className="-m-2 p-2 text-fog transition-colors duration-150 hover:text-white"
          >
            <ArrowLeftIcon />
          </a>
          <h1 className="font-display text-[clamp(18px,2vw,24px)] font-semibold leading-tight">
            {info.title}
          </h1>
          {info.link && (
            <a
              href={info.link.href}
              target="_blank"
              rel="noreferrer"
              className="ml-auto shrink-0 rounded-lg bg-accent px-5 py-2.5 text-[15px] font-semibold text-bg transition-colors duration-150 hover:bg-accent-hover active:bg-accent-press"
            >
              {info.link.label}
            </a>
          )}
        </div>
      </header>

      <main className="relative mx-auto max-w-6xl px-6 pt-14 pb-32">
        {(info.timeframe || info.format) && (
          <div className="flex flex-wrap gap-x-9 gap-y-3">
            {info.timeframe && (
              <span className="flex items-center gap-2.5 text-[15px] text-fog">
                <CalendarIcon />
                {info.timeframe}
              </span>
            )}
            {info.format && (
              <span className="flex items-center gap-2.5 text-[15px] text-fog">
                <BriefcaseIcon />
                {info.format}
              </span>
            )}
          </div>
        )}

        {info.description &&
          info.description.split('\n\n').map((paragraph) => (
            <p key={paragraph} className="mt-6 text-xl leading-[1.35] text-fog">
              {info.video ? <TimecodeText text={paragraph} onSeek={seekTo} /> : typo(paragraph)}
            </p>
          ))}

        {info.sections ? (
          <div className="mt-28 space-y-32">
            {info.sections.map((section, i) => (
              <section
                key={section.text}
                className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20"
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <SectionScreens section={section} />
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span
                    aria-hidden="true"
                    className="font-display block text-[clamp(64px,7vw,96px)] font-bold leading-none text-accent/20 select-none"
                  >
                    {i + 1}
                  </span>
                  <p className="mt-5 max-w-lg text-[17px] leading-[1.5] text-fog">
                    {typo(section.text)}
                  </p>
                </div>
              </section>
            ))}
          </div>
        ) : info.webScreens ? (
          <WebShowcase web={info.webScreens} />
        ) : info.video ? (
          <VideoShowcase video={info.video} videoRef={videoRef} />
        ) : (
          /* TODO: контент кейса (описание, экраны, ссылка) автор приведёт позже */
          <p className="mt-20 max-w-xl text-[17px] leading-[1.32] text-fog">
            Материалы этого кейса скоро появятся
          </p>
        )}
      </main>
    </div>
  )
}

export default CasePage
