import dosimeterHome from './assets/dosimeter-home.png'
import dosimeterMeasure from './assets/dosimeter-measure.png'
import dosimeterJournal from './assets/dosimeter-journal.png'
import dosimeterGamma from './assets/dosimeter-gamma.svg'
import dosimeterBeta from './assets/dosimeter-beta.svg'
import dosimeterAlpha from './assets/dosimeter-alpha.svg'
import dosimeterRad from './assets/dosimeter-rad.svg'

export type CaseScreen = {
  src: string
  caption: string
}

export type CaseInfo = {
  slug: string
  title: string
  year: string
  type: 'Веб-сайт' | 'Мобильное приложение'
  /** Краткое описание для страницы кейса */
  description?: string
  /** Экраны: используются и в веере карточки, и на странице кейса */
  screens?: CaseScreen[]
  /** Иконки проекта, выскакивающие из-под плашки карточки при наведении */
  hoverIcons?: string[]
  /** Стилизованная заглушка превью, пока нет реальных экранов */
  stockPreview?: 'browser' | 'phone' | 'duo'
  /** Ссылка на действующий сайт или Figma */
  link?: { label: string; href: string }
}

/* TODO: заменить оставшиеся стоковые кейсы реальными (превью, описание,
   экраны, ссылка на сайт/Figma) — контент автор приведёт позже */
export const CASES: CaseInfo[] = [
  {
    slug: 'dosimeter',
    title: 'Мой дозиметр',
    year: '2025',
    type: 'Мобильное приложение',
    description: 'Приложение для беспроводного управления дозиметром.',
    screens: [
      { src: dosimeterHome, caption: 'Подключение прибора' },
      { src: dosimeterMeasure, caption: 'Измерение' },
      { src: dosimeterJournal, caption: 'Журнал' },
    ],
    hoverIcons: [dosimeterGamma, dosimeterBeta, dosimeterAlpha, dosimeterRad],
    // TODO: ссылка на сайт/Figma — автор приведёт позже
  },
  { slug: 'case-2', title: 'Кейс №2', year: '2025', type: 'Веб-сайт', stockPreview: 'browser' },
  { slug: 'case-3', title: 'Кейс №3', year: '2024', type: 'Веб-сайт', stockPreview: 'duo' },
  { slug: 'case-4', title: 'Кейс №4', year: '2024', type: 'Мобильное приложение', stockPreview: 'duo' },
  { slug: 'case-5', title: 'Кейс №5', year: '2024', type: 'Веб-сайт', stockPreview: 'browser' },
  { slug: 'case-6', title: 'Кейс №6', year: '2023', type: 'Мобильное приложение', stockPreview: 'phone' },
]
