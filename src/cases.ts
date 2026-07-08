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
import hacksSite from './assets/hacks-site.png'
import hacksDemo from './assets/hacks-demo.mp4'
import hacksPoster from './assets/hacks-poster.jpg'
import vmesteHome from './assets/vmeste-home.png'
import vmesteEvent from './assets/vmeste-event.png'
import vmesteCreate from './assets/vmeste-create.png'
import vmesteSearch from './assets/vmeste-search.png'
import vmesteBooking from './assets/vmeste-booking.png'
import vmesteFriends from './assets/vmeste-friends.png'
import vmesteProfile from './assets/vmeste-profile.png'
import vmesteStar from './assets/vmeste-star.png'

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
  /** Веб-кейс с одним экраном: скрин сайта в браузере для карточки */
  cardScreen?: CaseScreen
  /** Видео-демо на странице кейса — в мониторе под описанием; таймкоды
      вида «0:32» в описании становятся ссылками-перемотками */
  video?: { src: string; poster: string }
  /** Блоки страницы кейса: экраны и текст чередуются по сторонам */
  sections?: CaseSection[]
  /** Иконки проекта, выскакивающие из-под плашки карточки при наведении */
  hoverIcons?: string[]
  /** Своя крупная звезда конфетти карточки (вместо стандартной фиолетовой) */
  starIcon?: string
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
    starIcon: effectiveStar,
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
  {
    slug: 'hackathons',
    title: 'Сайты для хакатонов',
    year: '2024–2025',
    type: 'Веб-сайт',
    description:
      'На кафедре, на которой я училась, проводились хакатоны. Моя задача была сделать сайт для каждого из хакатонов. Здесь 3 сайта с разницей где-то в полгода. Можно посмотреть прогресс :)\n\n0:00 — 1 сайт, 0:32 — 2 сайт, 0:56 — 3 сайт',
    timeframe: '2024 · 2025',
    format: 'ПМиФИ, ОмГТУ',
    cardScreen: { src: hacksSite, caption: 'Сайт хакатона' },
    video: { src: hacksDemo, poster: hacksPoster },
  },
  { slug: 'case-5', title: 'Кейс №5', year: '2024', type: 'Веб-сайт', stockPreview: 'browser' },
  {
    slug: 'vmeste',
    title: 'Вместе',
    year: '2024',
    type: 'Мобильное приложение',
    description:
      'Моё первое масштабное приложение — итоговая работа с курсов по направлению «Дизайн» 7bits, IT-LIFT. Нам дали проблему — предприниматель открыл в городе коворкинг, но у него нет посетителей, и никто не знает про мероприятия, которые там проходят, и мы с нуля придумывали концепт приложения, проводили исследования, составляли дизайн-систему. В общем, прошли по полному сценарию создания дизайна продукта, за исключением передачи в разработку. Но об этом мы тоже думали и старались соблюдать гайдлайны и делать все компоненты реализуемыми',
    timeframe: 'Февраль–апрель 2024',
    format: 'Учебный проект',
    screens: [
      { src: vmesteHome, caption: 'Главная' },
      { src: vmesteEvent, caption: 'Страница события' },
      { src: vmesteCreate, caption: 'Создание события' },
    ],
    sections: [
      {
        text: 'На главной в приложении отображается список событий, рекомендуемых юзеру. События могут быть как в коворкинге, так и где-то в другом месте или вообще в онлайн-формате. По событиям можно проводить поиск с фильтрацией. У события можно просмотреть организаторов, участников, ведущих и спикеров, а также непосредственно зарегистрироваться на это событие',
        screens: [
          { src: vmesteHome, caption: 'Рекомендации на главной' },
          { src: vmesteSearch, caption: 'Поиск с фильтрами' },
        ],
      },
      {
        text: 'Также можно создавать своё событие и гибко настраивать его под себя. Также можно просто забронировать коворкинг как место для работы, причём можно забронировать как и только на себя, так и на компанию друзей',
        screens: [
          { src: vmesteCreate, caption: 'Создание события' },
          { src: vmesteBooking, caption: 'Бронирование коворкинга' },
        ],
      },
      {
        text: 'Пользователей можно добавлять в друзья и смотреть, на какие события он идёт, какие он организует. Пользователь также может выставлять информацию о себе: сколько ему лет, где работает и как с ним можно связаться. Это не полноценная социальная сеть, где можно общаться, но в таком приложении, где люди выбирают, на какое событие им пойти, хорошо иметь функцию самопредставления, особенно спикерам и организаторам',
        screens: [
          { src: vmesteFriends, caption: 'Список друзей' },
          { src: vmesteProfile, caption: 'Профиль пользователя' },
        ],
      },
    ],
    starIcon: vmesteStar,
  },
]
