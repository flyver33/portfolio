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
import effectiveBooking from './assets/effective-booking.png'
import effectiveBookings from './assets/effective-bookings.png'
import effectiveCancel from './assets/effective-cancel.png'
import effectiveProcess1 from './assets/effective-process-1.png'
import effectiveProcess2 from './assets/effective-process-2.png'
import effectiveViews2 from './assets/effective-views-2.png'
import effectiveHome1 from './assets/effective-home-1.png'
import effectiveHome2 from './assets/effective-home-2.png'
import effectiveStar from './assets/effective-star.svg'
import kipSite from './assets/kip-site.png'
import kipPartner from './assets/kip-phone-partner.png'
import kipTariffs from './assets/kip-phone-tariffs.png'

export type CaseScreen = {
  src: string
  caption: string
}

/** Блок страницы кейса: пара экранов + текст; номер блока — индекс + 1 */
export type CaseSection = {
  text: string
  screens: [CaseScreen, CaseScreen]
}

/** Экраны веб-кейса: скрин сайта в центре и два мобильных экрана по бокам */
export type CaseWebScreens = {
  site: CaseScreen
  phones: [CaseScreen, CaseScreen]
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
  /** Веб-кейс: сайт + мобильные экраны — и для карточки, и для витрины страницы */
  webScreens?: CaseWebScreens
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
  {
    slug: 'effective-office',
    title: 'Effective Office',
    year: '2025',
    type: 'Мобильное приложение',
    description:
      'Делали с компанией Effective мобильное приложение для бронирования мест в их офисе. У них уже есть такое приложение, но им мало кто пользуется из-за неудобства и очень долгого процесса бронирования, и нашей задачей было сделать максимально быструю и удобную бронь для постоянных и временных сотрудников',
    timeframe: 'Январь–апрель 2025',
    format: 'Effective',
    screens: [
      { src: effectiveBookings, caption: 'Брони на неделю' },
      { src: effectiveBooking, caption: 'Бронирование' },
      { src: effectiveCancel, caption: 'Отмена брони' },
    ],
    sections: [
      {
        text: 'У бронирования есть много настроек: цикличность бронирования, период, время, но чаще всего, особенно временные гости, бронируют сегодня на весь день, поэтому автоматически стоит эта настройка, чтобы можно было забронировать место в один клик. Также приоритет выбора гостей — время работы, а не место, поэтому сначала выбирается время, а потом уже загружаются доступные места',
        screens: [
          { src: effectiveProcess1, caption: 'Настройки брони' },
          { src: effectiveProcess2, caption: 'Выбор периода' },
        ],
      },
      {
        text: 'Места могут отображаться списком, это удобно, если человеку без разницы, на каком месте ему сидеть, либо он уже знает своё место по названию. Если человек новенький и знает только расположение, можно выбрать место с помощью карты',
        screens: [
          { src: effectiveBooking, caption: 'Места списком' },
          { src: effectiveViews2, caption: 'Места на карте' },
        ],
      },
      {
        text: 'Все забронированные места отображаются на главной странице при входе в приложение. Также брони можно отфильтровать по дате, можно удалять и редактировать',
        screens: [
          { src: effectiveHome1, caption: 'Брони на главной' },
          { src: effectiveHome2, caption: 'Главная без броней' },
        ],
      },
    ],
    hoverIcons: [effectiveStar],
  },
  {
    slug: 'kip',
    title: 'Кузнецов и Партнеры',
    year: '2026',
    type: 'Веб-сайт',
    description:
      'Небольшой редизайн сайта для финансовой фирмы. Определили вместе с заказчиком стиль, настроение и цель сайта и обновили сайт, чтобы он привлекал больше новых клиентов',
    timeframe: 'Апрель 2026 – н.в.',
    format: 'Заказная разработка',
    webScreens: {
      site: { src: kipSite, caption: 'Главная страница' },
      phones: [
        { src: kipPartner, caption: 'Управляющий партнёр' },
        { src: kipTariffs, caption: 'Тарифы' },
      ],
    },
    link: { label: 'Перейти на сайт', href: 'https://kipfinance.ru/' },
  },
  { slug: 'case-4', title: 'Кейс №4', year: '2024', type: 'Мобильное приложение', stockPreview: 'duo' },
  { slug: 'case-5', title: 'Кейс №5', year: '2024', type: 'Веб-сайт', stockPreview: 'browser' },
  { slug: 'case-6', title: 'Кейс №6', year: '2023', type: 'Мобильное приложение', stockPreview: 'phone' },
]
