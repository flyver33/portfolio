import dosimeterHome from './assets/dosimeter-home.png'
import dosimeterMeasure from './assets/dosimeter-measure.png'
import dosimeterJournal from './assets/dosimeter-journal.png'
import dosimeterMain1 from './assets/dosimeter-main-1.png'
import dosimeterMain2 from './assets/dosimeter-main-2.png'
import dosimeterMeasure1 from './assets/dosimeter-measure-1.png'
import dosimeterMeasure2 from './assets/dosimeter-measure-2.png'
import dosimeterJournal1 from './assets/dosimeter-journal-1.png'
import dosimeterJournal2 from './assets/dosimeter-journal-2.png'
import dosimeterSettings1 from './assets/dosimeter-settings-1.png'
import dosimeterSettings2 from './assets/dosimeter-settings-2.png'
import dosimeterGamma from './assets/dosimeter-gamma.svg'
import dosimeterBeta from './assets/dosimeter-beta.svg'
import dosimeterAlpha from './assets/dosimeter-alpha.svg'
import dosimeterRad from './assets/dosimeter-rad.svg'

export type CaseScreen = {
  src: string
  caption: string
}

/** Блок страницы кейса: пара экранов + текст; номер блока — индекс + 1 */
export type CaseSection = {
  text: string
  screens: [CaseScreen, CaseScreen]
}

export type CaseInfo = {
  slug: string
  title: string
  year: string
  type: 'Веб-сайт' | 'Мобильное приложение'
  /** Краткое описание для страницы кейса; абзацы разделяются \n\n */
  description?: string
  /** Период работы — чип с календарём на странице кейса */
  timeframe?: string
  /** Формат работы — чип с портфелем на странице кейса */
  format?: string
  /** Экраны для веера карточки в сетке кейсов */
  screens?: CaseScreen[]
  /** Блоки страницы кейса: экраны и текст чередуются по сторонам */
  sections?: CaseSection[]
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
    description:
      'Вместе с московским НИИПом сделали мобильное приложение для беспроводного управления дозиметром, с помощью которого работники могут подключать устройство и удобно просматривать информацию на экране своего телефона\n\n«Мой дозиметр» есть в RuStore! Можно скачать и проверить функционал на демо-устройстве',
    timeframe: 'Сентябрь–октябрь 2025',
    format: 'Заказная разработка',
    screens: [
      { src: dosimeterHome, caption: 'Подключение прибора' },
      { src: dosimeterMeasure, caption: 'Измерение' },
      { src: dosimeterJournal, caption: 'Журнал' },
    ],
    sections: [
      {
        text: 'Юзер может подключить в приложении свой дозиметр по bluetooth. Если у юзера нет дозиметра (этот функционал нужен был для тестирования), в приложении возможно подключение демо-устройства, с которым можно посмотреть все возможности приложения',
        screens: [
          { src: dosimeterMain1, caption: 'Добавление прибора' },
          { src: dosimeterMain2, caption: 'Подключённый прибор' },
        ],
      },
      {
        text: 'После подключения устройства можно производить все 4 типа измерений: гамма, альфа и бета частицы, а также продолжительный поиск частиц. Измерения в конкретный момент времени можно записывать в журнал, прикреплять фото к записи, а вся остальная информация, в том числе и геолокация, подтянется автоматически. Для каждого режима есть обучение: на всякий случай, если работник забыл рутину',
        screens: [
          { src: dosimeterMeasure1, caption: 'Измерение гамма-частиц' },
          { src: dosimeterMeasure2, caption: 'Обучение режиму измерения' },
        ],
      },
      {
        text: 'В журнале хранятся все записи: автоматически созданные, записанные с приложения и записанные с дозиметра. При подключении устройства к телефону журнал подтягивает все имеющиеся записи. Журнал можно просматривать в трёх видах: списком, графиком и картой. Особое выделение имеют записи, доза радиации у которых превышена',
        screens: [
          { src: dosimeterJournal1, caption: 'Журнал списком' },
          { src: dosimeterJournal2, caption: 'Журнал графиком' },
        ],
      },
      {
        text: 'Приложение можно настроить под себя: тема приложения, автозапись в журнал, пороги сигнализации. Настроить можно не только приложение, но и дозиметр: звуковые и световые сигналы, язык прибора, синхронизация даты',
        screens: [
          { src: dosimeterSettings1, caption: 'Настройки прибора' },
          { src: dosimeterSettings2, caption: 'Локальный журнал' },
        ],
      },
    ],
    hoverIcons: [dosimeterGamma, dosimeterBeta, dosimeterAlpha, dosimeterRad],
    link: {
      label: 'Смотреть фигму',
      href: 'https://www.figma.com/design/iQ8AZJg3leYsIheZ35KSsM/%D0%94%D0%BE%D0%B7%D0%B8%D0%BC%D0%B5%D1%82%D1%80?node-id=58686-2&t=gqlPzGG8dtcLOa2P-1',
    },
  },
  { slug: 'case-2', title: 'Кейс №2', year: '2025', type: 'Веб-сайт', stockPreview: 'browser' },
  { slug: 'case-3', title: 'Кейс №3', year: '2024', type: 'Веб-сайт', stockPreview: 'duo' },
  { slug: 'case-4', title: 'Кейс №4', year: '2024', type: 'Мобильное приложение', stockPreview: 'duo' },
  { slug: 'case-5', title: 'Кейс №5', year: '2024', type: 'Веб-сайт', stockPreview: 'browser' },
  { slug: 'case-6', title: 'Кейс №6', year: '2023', type: 'Мобильное приложение', stockPreview: 'phone' },
]
