export type Locale = 'en' | 'ru';

export interface MockScreen {
  app: string;
  title: string;
  sub?: string;
  player?: string;
  progress?: number;
  chips?: string[];
  rows: { t: string; m?: string; v?: string; done?: boolean }[];
  cta?: string;
  tabs?: string[];
}

/** A real image (`src`) or a screen the site draws in the page's language (`screen`). */
export interface CaseVisual {
  src?: string;
  screen?: MockScreen;
  alt: string;
  caption?: string;
}

export interface CaseStudyContent {
  title: string;
  category: string;
  status: string;
  statusDetail: string;
  summary: string;
  challenge: string[];
  clientTeam: string[];
  ourWork: string[];
  collaboration: string[];
  result: string[];
  features: string[];
  visuals: CaseVisual[];
  links?: { label: string; href: string }[];
  cta: string;
}

export interface CaseStudy {
  slug: string;
  accent: string;
  cover?: string;
  locales: Record<Locale, CaseStudyContent>;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'u90',
    accent: '#b8f36a',
    cover: '/cases/u90-today.png',
    locales: {
      en: {
        title: 'U90',
        category: 'Nutrition & activity · iOS and Android',
        status: 'Published',
        statusDetail: 'Available on Google Play and the App Store. First store releases: November 2026.',
        summary: 'A daily companion for nutrition, movement and progress, taken from a product concept to published mobile apps.',
        challenge: [
          'The product needed to bring several everyday habits into one understandable experience. Logging meals, tracking water and activity, reviewing progress and speaking to an AI coach had to feel like parts of the same day, rather than separate tools.',
          'The scope also extended beyond the visible screens. The team needed onboarding, accounts, subscription integration and a way to maintain product content. Shipping on both major mobile platforms meant that development, testing and store preparation belonged in one delivery process.',
        ],
        clientTeam: [
          'U90 is a joint product with an entrepreneurial partner. The partner contributes the concept, commercial direction, promotion and product acceptance. DartWay is responsible for the technical implementation and works through product decisions alongside the partner.',
          'This arrangement keeps the product owner involved in what people will use, while giving the technical work a clear owner across the app and its supporting services.',
        ],
        ourWork: [
          'We implemented the mobile experience in Flutter and connected it to the backend. The main flows cover onboarding, the daily overview, nutrition, workouts, water tracking, progress and a support circle.',
          'The AI coach is part of the product experience: a user can describe a meal and continue the conversation inside the app. Subscription integration and editable product texts and translations support the surrounding commercial and content workflow.',
          'Delivery included preparing the store builds and listing materials, then working through publication for Android and iOS. A working application and its release process were both part of the result.',
        ],
        collaboration: [
          'Product feedback is reviewed against working builds. The partner can assess the complete daily journey, while DartWay connects interface changes with the underlying data and release requirements.',
          'The useful pattern for an agency is the same: someone owns the audience, product decisions and acceptance; a delivery partner owns implementation and the technical path to release.',
        ],
        result: [
          'U90 was published on Google Play on November 2, 2026, and on the App Store on November 5, 2026. The case demonstrates delivery to both stores, with a shared mobile codebase and supporting backend.',
          'The release brings the core daily experience into a product people can install. The next stage is to develop the application through use, feedback and further releases.',
        ],
        features: ['Daily overview', 'Nutrition and AI coach', 'Activity and water tracking', 'Progress and support circle', 'Subscription integration', 'iOS and Android releases'],
        visuals: [
          { src: '/cases/u90-today.png', alt: 'U90 store visual showing the daily overview', caption: 'Published store material: the daily overview.' },
          { src: '/cases/u90-coach.png', alt: 'U90 store visual showing the AI meal coach', caption: 'Published store material: logging a meal through the coach.' },
        ],
        links: [
          { label: 'App Store', href: 'https://apps.apple.com/th/app/u90-90-day-weight-loss/id6822748008' },
          { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=ai.u90.app&hl=en' },
        ],
        cta: 'Have an app concept and a product owner? Let’s review what it will take to reach the stores.',
      },
      ru: {
        title: 'U90',
        category: 'Питание и активность · iOS и Android',
        status: 'В магазинах',
        statusDetail: 'Опубликовано в Google Play и App Store. Первые релизы — ноябрь 2026 года.',
        summary: 'Приложение для питания, движения и отслеживания прогресса: от продуктовой идеи до публикации на двух мобильных платформах.',
        challenge: [
          'Нужно было собрать несколько ежедневных привычек в один понятный сценарий. Запись еды, учёт воды и активности, просмотр прогресса и общение с AI-коучем должны работать как части одного дня пользователя.',
          'Задача включала не только видимые экраны. Для продукта нужны онбординг, аккаунты, интеграция подписки и управление текстами. Выход на две мобильные платформы означал, что разработку, проверку и подготовку к магазинам необходимо вести как единый процесс.',
        ],
        clientTeam: [
          'U90 — совместный продукт с предпринимателем. Партнёр отвечает за идею, коммерческое направление, продвижение и приёмку. DartWay ведёт техническую реализацию и вместе с партнёром прорабатывает продуктовые решения.',
          'Такое разделение сохраняет участие владельца в развитии продукта и одновременно даёт единую ответственность за приложение и связанные с ним сервисы.',
        ],
        ourWork: [
          'Мы реализовали мобильное приложение на Flutter и связали его с серверной частью. Основные сценарии охватывают знакомство с продуктом, обзор дня, питание, тренировки, воду, прогресс и круг поддержки.',
          'AI-коуч встроен в пользовательский путь: можно описать приём пищи и продолжить разговор прямо в приложении. Интеграция подписки, редактирование продуктовых текстов и переводов поддерживают коммерческую и контентную часть продукта.',
          'В работу вошли сборки для магазинов, материалы для страниц приложения и публикация на Android и iOS. Результат включает как работающий продукт, так и процесс его выпуска.',
        ],
        collaboration: [
          'Обратную связь по продукту разбираем на рабочих сборках. Партнёр оценивает целостный сценарий дня, а DartWay связывает изменения интерфейса с данными и требованиями к выпуску.',
          'Для агентства здесь важна сама модель взаимодействия: одна сторона отвечает за аудиторию, продуктовые решения и приёмку, другая — за реализацию и технический путь до релиза.',
        ],
        result: [
          'U90 опубликован в Google Play 2 ноября 2026 года, в App Store — 5 ноября 2026 года. Подтверждённый результат — приложение в двух магазинах, общая мобильная кодовая база и серверная часть.',
          'Основной ежедневный сценарий собран в продукт, который можно установить. Следующий этап — развитие приложения на основе использования, обратной связи и новых релизов.',
        ],
        features: ['Обзор дня', 'Питание и AI-коуч', 'Активность и учёт воды', 'Прогресс и круг поддержки', 'Интеграция подписки', 'Публикация на iOS и Android'],
        visuals: [
          { screen: { app: 'U90', title: 'Сегодня · день 34 из 90', sub: 'Цикл 1 · снижение веса', progress: 60, rows: [{ t: 'Съедено', m: 'из 1610 ккал', v: '918' }, { t: 'Активность', m: 'шаги и тренировки', v: '188' }, { t: 'Вода', m: 'добавь стакан', v: '150 мл' }, { t: 'Белок', m: 'план на день', v: '61 г', done: true }], tabs: ['Сегодня', 'Круг', 'Прогресс', 'Чаты'] }, alt: 'Обзор дня в U90', caption: 'Экран обзора дня, перерисован на русском по опубликованному приложению.' },
          { screen: { app: 'AI-коуч', title: 'Что ты съел?', sub: 'Опиши словами или пришли фото', rows: [{ t: 'Овсянка с ягодами', m: '≈ 320 ккал · 12 г белка', done: true }, { t: 'Кофе с молоком', m: '≈ 60 ккал' }, { t: 'Коуч', m: 'До цели по белку ещё 49 г — добавь творог' }], cta: 'Записать приём пищи', tabs: ['Сегодня', 'Круг', 'Прогресс', 'Чаты'] }, alt: 'Запись еды через AI-коуча в U90', caption: 'Запись еды через коуча, перерисовано на русском.' },
        ],
        links: [
          { label: 'App Store', href: 'https://apps.apple.com/ru/app/u90-90-day-weight-loss/id6822748008' },
          { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=ai.u90.app&hl=en' },
        ],
        cta: 'Есть концепция приложения и владелец продукта? Разберём, что нужно для выхода в магазины.',
      },
    },
  },
  {
    slug: 'tvaity',
    accent: '#ffca8c',
    locales: {
      en: {
        title: 'Tvaity',
        category: 'Online programmes · iOS, Android and web',
        status: 'Published',
        statusDetail: 'Live on the App Store, Google Play and the web, with paying users. We develop and support it.',
        summary: 'Development and release work for an educational application where course access, playback and account behaviour affect real learners.',
        challenge: [
          'A live educational application has a different delivery context from a new prototype. People already use it to access purchased materials, return to lessons and continue learning. Changes must be assessed against those existing journeys.',
          'For the product team, support means turning concrete user problems into checked changes and releases. Course access, playback, progress and account recovery all touch the basic expectation that a learner can return to what they paid for.',
        ],
        clientTeam: [
          'The client has its own product team and project management. Priorities and reported issues are coordinated through the client’s workflow, with acceptance on their side.',
          'DartWay’s role in the project covers application development and production support. The client continues to own the educational offer, content and product priorities.',
        ],
        ourWork: [
          'The application serves educational content on iOS and Android. The relevant product flows include courses and lessons, content playback, personal accounts, learning progress and access connected to purchases. Around them sit personal goals, a community feed and a chat with the curators.',
          'Our work has included implementing changes, investigating reported application problems and preparing fixes for release. Playback, course availability and account-recovery behaviour are examples of the areas addressed in the support workflow.',
          'Delivery is organised around the existing product: understand the reported scenario, make the change, verify the behaviour and prepare a version the client can accept. Release work belongs to the same responsibility as the code change itself.',
        ],
        collaboration: [
          'The client’s product team provides priorities and the context behind a reported issue. DartWay works through the technical investigation and implementation, then returns a change that can be checked against the original scenario.',
          'This keeps support connected to the product owner. It is particularly relevant for agencies that want a technical partner for an existing app while retaining planning, client communication and acceptance within their own team.',
        ],
        result: [
          'The client named the quality bar himself: the service has to work steadily. The app ships regular releases to both stores and the web, and its community feed has grown past 63,000 posts.',
          'For a delivery partner, the practical result is the ability to work within an established product process: take a reported problem through investigation, verification and a client-reviewed release.',
        ],
        features: ['iOS and Android application', 'Courses and lesson access', 'Content playback', 'Accounts and progress', 'Community feed and curator chat', 'Fixes, verification and releases'],
        visuals: [
          { screen: { app: 'TVAITY', title: 'Day 12. Lesson: the first step', sub: 'Programme · 3 of 8 modules', player: 'Video · 18:05', progress: 38, rows: [{ t: 'My goal for the week', m: 'Set by you on Monday', done: true }, { t: 'Next lesson', m: 'Opens tomorrow' }, { t: 'Saved for offline', m: '2 videos' }], tabs: ['Learn', 'Feed', 'Chat', 'Profile'] }, alt: 'Lesson with a video player in an online programme app', caption: 'Recreated screen in English; the live app is in Russian.' },
          { screen: { app: 'TVAITY', title: 'Chat with the curator', rows: [{ t: 'You', m: 'The video won’t load on my phone' }, { t: 'Curator', m: 'Try “Saved for offline” — it plays without the network', done: true }, { t: 'You', m: 'Works, thank you!' }], cta: 'Write a message', tabs: ['Learn', 'Feed', 'Chat', 'Profile'] }, alt: 'Chat between a participant and a curator', caption: 'Curator chat, recreated.' },
        ],
        cta: 'Need a technical partner for an existing application? Share the product and the changes your team needs to deliver.',
      },
      ru: {
        title: 'Tvaity',
        category: 'Онлайн-программы · iOS, Android и веб',
        status: 'В магазинах',
        statusDetail: 'Работает в App Store, Google Play и в вебе, с платящими пользователями. Развиваем и сопровождаем.',
        summary: 'Разработка и выпуск изменений в образовательном приложении, где доступ к курсам, плеер и аккаунты ежедневно нужны ученикам.',
        challenge: [
          'У действующего образовательного приложения другой контекст, чем у нового прототипа. Люди уже открывают купленные материалы, возвращаются к урокам и продолжают обучение. Изменения нужно оценивать с учётом этих существующих сценариев.',
          'Для продуктовой команды сопровождение означает превращение конкретных обращений пользователей в проверенные исправления и релизы. Доступ к курсу, воспроизведение, прогресс и восстановление аккаунта связаны с базовым ожиданием ученика: вернуться к оплаченным материалам.',
        ],
        clientTeam: [
          'У заказчика есть собственная продуктовая команда и управление проектом. Приоритеты и обращения проходят через её рабочий процесс, приёмка также остаётся на стороне клиента.',
          'Роль DartWay включает развитие приложения и техническое сопровождение. Заказчик продолжает отвечать за образовательный продукт, содержание и порядок продуктовых изменений.',
        ],
        ourWork: [
          'Приложение предоставляет образовательные материалы на iOS и Android. Основные сценарии охватывают курсы и уроки, воспроизведение контента, личный кабинет, прогресс и доступ, связанный с покупками. Вокруг них — личные цели, лента сообщества и чат с кураторами.',
          'В нашу работу входят реализация изменений, разбор проблем в приложении и подготовка исправлений к выпуску. Среди направлений сопровождения — воспроизведение, доступность курсов и поведение при восстановлении аккаунта.',
          'Процесс строится вокруг действующего продукта: разобраться в описанном сценарии, внести изменение, проверить поведение и подготовить версию для приёмки. Выпуск версии относится к той же ответственности, что и изменение кода.',
        ],
        collaboration: [
          'Продуктовая команда заказчика передаёт приоритеты и контекст обращения. DartWay выполняет техническую диагностику и реализацию, после чего возвращает изменение, которое можно проверить по исходному сценарию.',
          'Так сопровождение остаётся связанным с владельцем продукта. Эта модель подходит агентствам, которым нужен технический партнёр для существующего приложения, при сохранении планирования, общения с клиентом и приёмки внутри своей команды.',
        ],
        result: [
          'Главный критерий заказчик назвал сам: «главное — стабильность работы сервиса». Приложение регулярно выходит в оба магазина и в веб, в ленте сообщества больше 63 000 постов.',
          'Практический результат такого партнёрства — работа внутри сложившегося продуктового процесса: от обращения и диагностики до проверки исправления и релиза, принятого командой заказчика.',
        ],
        features: ['Приложение для iOS и Android', 'Курсы и доступ к урокам', 'Воспроизведение контента', 'Аккаунты и прогресс', 'Лента сообщества и чат кураторов', 'Исправления, проверки и релизы'],
        visuals: [
          { screen: { app: 'TVAITY', title: 'День 12. Урок: первый шаг', sub: 'Программа · модуль 3 из 8', player: 'Видео · 18:05', progress: 38, rows: [{ t: 'Моя цель на неделю', m: 'Поставлена в понедельник', done: true }, { t: 'Следующий урок', m: 'Откроется завтра' }, { t: 'Скачано для офлайна', m: '2 видео' }], tabs: ['Учёба', 'Лента', 'Чат', 'Профиль'] }, alt: 'Урок с видеоплеером в приложении онлайн-программы', caption: 'Экран воссоздан по действующему приложению.' },
          { screen: { app: 'TVAITY', title: 'Чат с куратором', rows: [{ t: 'Вы', m: 'Видео не грузится на телефоне' }, { t: 'Куратор', m: 'Скачайте урок — он пойдёт без сети', done: true }, { t: 'Вы', m: 'Работает, спасибо!' }], cta: 'Написать сообщение', tabs: ['Учёба', 'Лента', 'Чат', 'Профиль'] }, alt: 'Чат участника с куратором', caption: 'Чат с куратором, воссоздан.' },
        ],
        cta: 'Нужен технический партнёр для действующего приложения? Покажите продукт и изменения, которые ваша команда хочет выпустить.',
      },
    },
  },
  {
    slug: 'nda-courses',
    accent: '#e4b3ff',
    locales: {
      en: {
        title: 'NDA: course and club app',
        category: 'Wellness education · Agency partnership',
        status: 'Client acceptance',
        statusDetail: 'A working staging version is undergoing client review before production launch.',
        summary: 'A course and membership experience built with an agency that retains product management, design and the client relationship.',
        challenge: [
          'The client’s educational content needed a coherent application: courses and lessons, video and audio, progress, personal accounts and club materials. The experience had to make sense to learners while respecting the access rules of the existing business.',
          'A screen-by-screen implementation alone would not solve that problem. Playback, navigation between lessons, progress and course access must work together. The content team also needs a practical way to manage the material behind the interface.',
        ],
        clientTeam: [
          'The agency brings the client, a product manager and a designer. They provide the designs, set priorities, clarify business rules and coordinate acceptance. The end client supplies domain knowledge, content and integration decisions.',
          'DartWay joins as the implementation partner. The agency continues to lead the project and the customer relationship, with an engaged product team on its side.',
        ],
        ourWork: [
          'Our scope covers the client application, backend, administration and integration work. The product includes a course and lesson catalogue, video and audio playback, progress, profile and membership areas.',
          'The club experience extends the content beyond a linear course through broadcasts, articles and practices. Administration supports the content that appears in these user journeys.',
          'Integration with the client’s course platform and CRM is part of the implementation scope. Their configuration and verification are coordinated with the client because a working connection depends on the client’s systems and rules as well as application code.',
        ],
        collaboration: [
          'The team reviews a working staging version against the supplied designs and agreed behaviour. Feedback becomes concrete delivery work: how a lesson opens, how playback behaves, what happens when a learner moves to the next lesson and how access is applied.',
          'Product decisions remain with the agency and client. DartWay connects those decisions to the app, backend and release work, so the designer and project manager have a technical counterpart throughout acceptance.',
        ],
        result: [
          'The project has a working staging application with its course, lesson, playback and membership flows. Recent verification includes completing video playback and checking playback speed and lesson navigation.',
          'Client acceptance and further device and browser checks are still in progress. This is an ongoing delivery case, showing the agency collaboration model and the implemented product scope before a production launch.',
        ],
        features: ['Courses and lessons', 'Video and audio playback', 'Learner progress', 'Membership and club content', 'Content administration', 'Course platform and CRM integration'],
        visuals: [
          { screen: { app: 'Course club', title: 'Lesson 4. Morning practice', sub: 'Course «Healthy back» · 6 of 12', player: 'Video · 12:40', progress: 64, rows: [{ t: 'Lesson 5. Breathing', m: 'Audio · 9 min' }, { t: 'Lesson 6. Evening routine', m: 'Video · 15 min' }, { t: 'Homework', m: 'Mark when done', done: true }], tabs: ['Courses', 'Club', 'Progress', 'Profile'] }, alt: 'Lesson with a video player in a course app', caption: 'Recreated screen. The real app is under NDA.' },
          { screen: { app: 'Course club', title: 'Club', chips: ['Broadcasts', 'Articles', 'Practices'], rows: [{ t: 'Live: questions and answers', m: 'Thursday, 19:00', v: 'Live' }, { t: 'How to keep the habit', m: 'Article · 6 min' }, { t: 'Ten-minute stretch', m: 'Practice · audio' }, { t: 'Last week’s broadcast', m: 'Recording · 54 min' }], tabs: ['Courses', 'Club', 'Progress', 'Profile'] }, alt: 'Club section with broadcasts, articles and practices', caption: 'Club section, recreated.' },
        ],
        cta: 'Your team owns design and product management? Send us the scope to discuss the implementation.',
      },
      ru: {
        title: 'NDA: приложение курсов и клуба',
        category: 'Обучение и wellness · Партнёрство с агентством',
        status: 'В приёмке',
        statusDetail: 'Рабочая тестовая версия проходит проверку заказчика перед промышленным запуском.',
        summary: 'Приложение с курсами и клубом: агентство ведёт продукт, дизайн и клиента, DartWay отвечает за реализацию.',
        challenge: [
          'Образовательные материалы заказчика нужно было собрать в цельное приложение: курсы и уроки, видео и аудио, прогресс, личный кабинет и клуб. Пользовательский путь должен быть понятен ученику и учитывать правила доступа действующего бизнеса.',
          'Для этого недостаточно отдельно сверстать каждый экран. Воспроизведение, переходы между уроками, прогресс и доступ к курсам должны работать вместе. Команде контента нужен удобный способ управлять материалами, которые стоят за интерфейсом.',
        ],
        clientTeam: [
          'На стороне агентства — клиент, проджект-менеджер и дизайнер. Они передают макеты, расставляют приоритеты, уточняют бизнес-логику и организуют приёмку. Конечный заказчик отвечает за предметную область, контент и решения по интеграциям.',
          'DartWay подключается как партнёр по реализации. Агентство продолжает управлять проектом и отношениями с клиентом, полноценно участвуя в продуктовых решениях.',
        ],
        ourWork: [
          'В наш объём входят клиентское приложение, серверная часть, администрирование и интеграции. Реализуем каталог курсов и уроков, воспроизведение видео и аудио, прогресс обучения, профиль и клубные разделы.',
          'Клуб дополняет последовательное обучение эфирами, статьями и практиками. Административная часть обеспечивает управление материалами, которые пользователь видит в этих сценариях.',
          'В работе также интеграция доступа с платформой курсов заказчика и связь с CRM. Настройку и проверку проводим вместе с заказчиком: результат зависит и от приложения, и от конфигурации внешних систем, и от правил продажи доступа.',
        ],
        collaboration: [
          'Команда проверяет рабочую тестовую версию по макетам и согласованным сценариям. Замечания превращаются в конкретные задачи: как открывается урок, как ведёт себя плеер, что происходит при переходе к следующему материалу и как проверяется доступ.',
          'Продуктовые решения остаются у агентства и заказчика. DartWay связывает их с приложением, серверной частью и выпуском сборок. У дизайнера и менеджера есть технический партнёр на протяжении всей приёмки.',
        ],
        result: [
          'Подготовлена рабочая тестовая версия с курсами, уроками, воспроизведением и клубными сценариями. Среди последних проверок — просмотр видео до конца, изменение скорости воспроизведения и навигация между уроками.',
          'Приёмка заказчика и дополнительные проверки на устройствах и в браузерах продолжаются. Кейс показывает выполненную реализацию и модель сотрудничества до промышленного запуска.',
        ],
        features: ['Курсы и уроки', 'Видео- и аудиоплеер', 'Прогресс обучения', 'Клубные материалы', 'Управление контентом', 'Интеграция с платформой курсов и CRM'],
        visuals: [
          { screen: { app: 'Клуб курсов', title: 'Урок 4. Утренняя практика', sub: 'Курс «Здоровая спина» · 6 из 12', player: 'Видео · 12:40', progress: 64, rows: [{ t: 'Урок 5. Дыхание', m: 'Аудио · 9 мин' }, { t: 'Урок 6. Вечерний ритуал', m: 'Видео · 15 мин' }, { t: 'Домашнее задание', m: 'Отметить выполнение', done: true }], tabs: ['Курсы', 'Клуб', 'Прогресс', 'Профиль'] }, alt: 'Урок с видеоплеером в приложении курсов', caption: 'Экран воссоздан. Само приложение — под NDA.' },
          { screen: { app: 'Клуб курсов', title: 'Клуб', chips: ['Эфиры', 'Статьи', 'Практики'], rows: [{ t: 'Эфир: вопросы и ответы', m: 'Четверг, 19:00', v: 'Live' }, { t: 'Как удержать привычку', m: 'Статья · 6 мин' }, { t: 'Растяжка за 10 минут', m: 'Практика · аудио' }, { t: 'Эфир прошлой недели', m: 'Запись · 54 мин' }], tabs: ['Курсы', 'Клуб', 'Прогресс', 'Профиль'] }, alt: 'Клуб: эфиры, статьи и практики', caption: 'Раздел клуба, воссоздан.' },
        ],
        cta: 'У вас есть дизайн и управление продуктом? Обсудим техническую реализацию проекта.',
      },
    },
  },
  {
    slug: 'nda-companion',
    accent: '#d5e9b5',
    locales: {
      en: {
        title: 'NDA: companion app for an education product',
        category: 'Education companion · Agency partnership',
        status: 'Preparing launch',
        statusDetail: 'Web environments are deployed. Integration configuration and client launch checks continue.',
        summary: 'A companion experience for an established educational product, connecting personalised content, daily check-ins and a community.',
        challenge: [
          'The client already had an educational product and its own content methodology. The next step was an application where participants could return to personal materials, record how they feel and stay connected to the community between lessons.',
          'The application had to coexist with the existing course platform. Access rules, participant identity, personalised content and an assistant integration crossed several systems and several people’s responsibilities.',
        ],
        clientTeam: [
          'The agency owns product coordination and design. The client supplies the methodology and content, while a specialist on the client side supplies the assistant-related inputs and configuration.',
          'DartWay is the implementation partner for the application and backend. Clear boundaries matter here: the delivery team implements the experience, while the content owner decides what the personalised material means and how it should be presented.',
        ],
        ourWork: [
          'We built the Flutter web application and its backend around the main participant journey: sign-in, a personal profile, structured personalised materials and a daily mood check-in.',
          'The product scope also includes check-in history, community chat with moderation, notifications and administration. The personalised profile organises the client’s content rules into sections that a participant can navigate inside the product.',
          'Integration work connects the companion experience to course access on the client’s learning platform. The assistant is treated as a separate integration with inputs and settings owned jointly with the client’s specialist, so its readiness can be checked explicitly.',
        ],
        collaboration: [
          'The agency and client review the product through deployed web versions. Design and content decisions remain with their team; DartWay implements the agreed behaviour and handles the application and server changes behind it.',
          'Because several systems meet in the participant journey, launch preparation includes checking access and configuration with the people who own those systems. Deployment is a technical milestone within that process.',
        ],
        result: [
          'The web environments have been deployed, and the client has confirmed access to the application. The implemented experience brings the core participant flows into one product.',
          'The next step is to complete client launch checks and integration configuration, including the assistant, before opening the product to its audience.',
        ],
        features: ['Participant sign-in', 'Personalised content profile', 'Mood check-ins and history', 'Community and moderation', 'Course access integration', 'Web deployment and launch preparation'],
        visuals: [
          { screen: { app: 'Companion', title: 'How do you feel today?', chips: ['Calm', 'Tired', 'Inspired', 'Anxious'], rows: [{ t: 'Yesterday', m: 'Calm · a short note', done: true }, { t: 'Monday', m: 'Inspired' }, { t: 'Sunday', m: 'Tired · slept badly' }], cta: 'Save check-in', tabs: ['Today', 'Profile', 'Community', 'Me'] }, alt: 'Daily mood check-in with history', caption: 'Recreated screen. The real app is under NDA.' },
          { screen: { app: 'Companion', title: 'Your personal profile', sub: 'Built from your materials, section by section', rows: [{ t: 'Strengths', m: '4 notes' }, { t: 'What drains energy', m: '3 notes' }, { t: 'Practices for you', m: '5 practices', v: 'New' }, { t: 'Ask the assistant', m: 'About your profile' }], tabs: ['Today', 'Profile', 'Community', 'Me'] }, alt: 'Personalised profile split into sections', caption: 'Personal profile, recreated.' },
        ],
        cta: 'Extending an existing course or membership business? Let’s map the app and the systems it needs to connect.',
      },
      ru: {
        title: 'NDA: приложение-компаньон к обучению',
        category: 'Приложение для обучения · Партнёрство с агентством',
        status: 'Подготовка к запуску',
        statusDetail: 'Веб-версии развёрнуты. Продолжаются настройка интеграций и проверки перед запуском.',
        summary: 'Приложение для участников образовательного продукта: персональные материалы, ежедневные отметки состояния и сообщество.',
        challenge: [
          'У заказчика уже были образовательный продукт и собственная методика работы с контентом. Следующим шагом стало приложение, где участник возвращается к личным материалам, отмечает своё состояние и поддерживает связь с сообществом между занятиями.',
          'Продукт должен работать рядом с действующей учебной платформой. Доступ, идентификация участника, персональные материалы и интеграция ассистента затрагивают несколько систем и зоны ответственности разных специалистов.',
        ],
        clientTeam: [
          'Агентство ведёт продуктовую координацию и дизайн. Заказчик предоставляет методику и содержание материалов. Специалист на стороне заказчика отвечает за исходные данные и настройки ассистента.',
          'DartWay реализует приложение и серверную часть. В таком проекте особенно важно разделение ролей: техническая команда отвечает за работу сценария, а владелец контента определяет содержание персональных материалов и способ их подачи.',
        ],
        ourWork: [
          'Мы создали веб-приложение на Flutter и серверную часть вокруг основных действий участника: входа, личного профиля, структурированных персональных материалов и ежедневной отметки настроения.',
          'В объём продукта также входят история отметок, чат сообщества с модерацией, уведомления и администрирование. Персональный профиль собирает материалы по правилам заказчика в разделы, с которыми можно работать внутри приложения.',
          'Интеграции связывают приложение с доступом к обучению на платформе заказчика. Ассистент подключается как отдельный компонент; его входные данные и настройки уточняются со специалистом заказчика, чтобы готовность этой части можно было проверить отдельно.',
        ],
        collaboration: [
          'Агентство и заказчик проверяют результат в развёрнутых веб-версиях. Решения по дизайну и содержанию остаются на их стороне. DartWay реализует согласованное поведение и связанные изменения приложения и сервера.',
          'В пользовательском пути встречаются несколько систем, поэтому подготовка к запуску включает совместную проверку доступа и конфигурации с их владельцами. Развёртывание приложения — один из технических этапов этого процесса.',
        ],
        result: [
          'Веб-версии развёрнуты, заказчик подтвердил доступ к приложению. Основные сценарии участника собраны в работающий продукт, который можно проверять перед запуском.',
          'Следующий этап — завершить приёмку и настройку интеграций, включая ассистента, перед открытием продукта для аудитории.',
        ],
        features: ['Вход участника', 'Персональные материалы', 'Настроение и история отметок', 'Сообщество и модерация', 'Интеграция доступа к курсам', 'Подготовка веб-продукта к запуску'],
        visuals: [
          { screen: { app: 'Компаньон', title: 'Как ты сегодня?', chips: ['Спокойно', 'Устала', 'Вдохновение', 'Тревожно'], rows: [{ t: 'Вчера', m: 'Спокойно · короткая заметка', done: true }, { t: 'Понедельник', m: 'Вдохновение' }, { t: 'Воскресенье', m: 'Устала · плохо спала' }], cta: 'Сохранить отметку', tabs: ['Сегодня', 'Профиль', 'Сообщество', 'Я'] }, alt: 'Ежедневная отметка настроения с историей', caption: 'Экран воссоздан. Само приложение — под NDA.' },
          { screen: { app: 'Компаньон', title: 'Твой личный профиль', sub: 'Собран из твоих материалов по разделам', rows: [{ t: 'Сильные стороны', m: '4 заметки' }, { t: 'Что забирает силы', m: '3 заметки' }, { t: 'Практики для тебя', m: '5 практик', v: 'Новое' }, { t: 'Спросить ассистента', m: 'О своём профиле' }], tabs: ['Сегодня', 'Профиль', 'Сообщество', 'Я'] }, alt: 'Персональный профиль по разделам', caption: 'Личный профиль, воссоздан.' },
        ],
        cta: 'Развиваете образовательный продукт или клуб? Разберём приложение и необходимые связи с вашими системами.',
      },
    },
  },
  {
    slug: 'paradogz',
    accent: '#f8accc',
    locales: {
      en: {
        title: 'Love Paradogz',
        category: 'Relationships · Our own product',
        status: 'In TestFlight',
        statusDetail: 'Internal iOS testing began in November 2026. The product is not yet publicly launched.',
        summary: 'Our own relationship app: turning a designed prototype into a testable product built around small daily moments of understanding.',
        challenge: [
          'The idea is to help partners learn more about each other through short, approachable interactions. The central mechanic is simple: answer a question, guess the partner’s answer and compare. Making that feel natural requires care with sequence, wording and the moments between screens.',
          'The product also needs to be useful before a partner joins. Solo use and couple use have to fit the same experience, so an invitation does not become a barrier to getting started.',
        ],
        clientTeam: [
          'Love Paradogz is our own product, developed together with a content and promotion partner. It is included as a product-development case, rather than as a commissioned client project.',
          'The partner contributes the content direction and communication with the audience. DartWay owns the technical implementation and participates in shaping the product and interaction design.',
        ],
        ourWork: [
          'We developed the concept and a detailed interactive prototype, then began translating its interface and interaction rules into the mobile application. The implementation follows the product’s existing visual language and daily-use structure.',
          'The product scope includes daily questions, guessing and comparing answers, a relationship questionnaire, weekly themes and activities. Date planning and an AI conversation experience are also part of the broader concept.',
          'The first implementation phase prioritises getting a real build into testers’ hands. Store subscriptions and commercial launch work are separate later steps, so the early test can focus on whether the core interaction feels clear and worthwhile.',
        ],
        collaboration: [
          'Content and implementation develop together. A small change in a question or the order of an interaction can change the experience, so the prototype is a shared reference for both the content partner and the technical work.',
          'TestFlight makes the next review concrete: the product can be opened on a phone and assessed as a sequence of actions. Internal testing helps distinguish a convincing concept from an interaction that actually works in use.',
        ],
        result: [
          'The first internal TestFlight build became available on November 9, 2026, followed by an updated build on November 10. This is a verified distribution milestone for testing, with further implementation and validation continuing.',
          'The current focus is internal testing and refinement of the core experience. Public distribution and paid subscriptions follow that validation. The visual below is the design prototype used as a reference during development.',
        ],
        features: ['Daily questions', 'Guess and compare answers', 'Solo and couple scenarios', 'Relationship questionnaire', 'Detailed interaction prototype', 'Internal TestFlight distribution'],
        visuals: [
          { screen: { app: 'paradogs', title: 'Five minutes a day — for the two of you', sub: 'Weekly topics, dates and questions about each other. The heart moon hints where to start.', rows: [{ t: 'Question of the day', m: 'What would make this week easier for you?' }, { t: 'Guess the answer', m: 'Then compare' }], cta: 'Start' }, alt: 'Love Paradogz welcome screen', caption: 'Recreated in English from the design prototype; the app is in internal testing.' },
          { screen: { app: 'paradogs', title: 'Today’s question', chips: ['Us', 'Dates', 'Memories'], rows: [{ t: 'Your answer', m: 'A walk by the sea', done: true }, { t: 'Your guess about them', m: 'A quiet evening at home' }, { t: 'Their answer', m: 'Opens when both have answered', v: '🔒' }], cta: 'Compare answers' }, alt: 'Daily question: answer, guess and compare', caption: 'Daily question, recreated from the prototype.' },
        ],
        cta: 'Have a detailed design and a product to validate? Let’s define the first build people can actually try.',
      },
      ru: {
        title: 'Love Paradogz',
        category: 'Отношения · Собственный продукт',
        status: 'В TestFlight',
        statusDetail: 'Внутреннее тестирование на iOS началось в ноябре 2026 года. Публичного запуска ещё нет.',
        summary: 'Наше приложение об отношениях: превращаем подробный прототип в продукт, который помогает узнавать друг друга через небольшие ежедневные действия.',
        challenge: [
          'Идея продукта — помогать партнёрам лучше узнавать друг друга через короткие и понятные взаимодействия. Центральная механика: ответить на вопрос, угадать ответ партнёра и сравнить. Чтобы она ощущалась естественно, важны порядок действий, формулировки и переходы между экранами.',
          'Приложение должно быть полезным ещё до приглашения партнёра. Сценарии для одного человека и для пары нужно объединить так, чтобы ожидание приглашённого не мешало начать пользоваться продуктом.',
        ],
        clientTeam: [
          'Love Paradogz — наш собственный продукт, который мы развиваем вместе с партнёром по контенту и продвижению. Он представлен как опыт продуктовой разработки, а не как заказ отдельного клиента.',
          'Партнёр участвует в создании содержания и общении с аудиторией. DartWay отвечает за техническую реализацию и вместе с партнёром прорабатывает продукт и пользовательские сценарии.',
        ],
        ourWork: [
          'Мы проработали концепцию и подробный интерактивный прототип, затем начали переносить его интерфейс и правила взаимодействия в мобильное приложение. Реализация опирается на визуальный язык и ежедневные сценарии, сформированные в прототипе.',
          'В объём продукта входят ежедневные вопросы, угадывание и сравнение ответов, анкета об отношениях, недельные темы и задания. Планирование свиданий и разговор с AI также относятся к более широкой концепции.',
          'На первом этапе приоритет — дать тестировщикам настоящую сборку. Подписка и коммерческий запуск вынесены в последующие этапы, чтобы ранняя проверка позволила оценить понятность и ценность основной механики.',
        ],
        collaboration: [
          'Контент и реализация развиваются вместе. Изменение одного вопроса или порядка действий может повлиять на весь сценарий, поэтому прототип служит общей точкой сверки для содержания и технической работы.',
          'TestFlight переводит обсуждение в практическую плоскость: приложение можно открыть на телефоне и пройти цепочку действий. Внутренние проверки помогают оценить, как задуманный опыт работает в использовании.',
        ],
        result: [
          'Первая внутренняя сборка стала доступна в TestFlight 9 ноября 2026 года, обновлённая — 10 ноября. Это подтверждённый этап доставки продукта тестировщикам; реализация и проверка функций продолжаются.',
          'Сейчас команда проверяет и дорабатывает основные сценарии во внутреннем тестировании. Следом — публичный доступ и подписка. Ниже показан дизайн-прототип, который служит ориентиром для разработки.',
        ],
        features: ['Ежедневные вопросы', 'Угадывание и сравнение ответов', 'Сценарии для одного и для пары', 'Анкета об отношениях', 'Подробный интерактивный прототип', 'Внутренние сборки TestFlight'],
        visuals: [
          { src: '/cases/paradogz-prototype.png', alt: 'Приветственный экран прототипа Love Paradogz', caption: 'Дизайн-прототип, использованный как ориентир для разработки. Это не скриншот опубликованного приложения.' },
        ],
        cta: 'Есть подробный дизайн и идея для проверки? Определим первую сборку, которую смогут попробовать люди.',
      },
    },
  },
  {
    slug: 'portal',
    accent: '#9dc7ff',
    locales: {
      en: {
        title: 'Portal',
        category: 'Expert platform · Product redevelopment',
        status: 'In development',
        statusDetail: 'Core entry and profile flows are available in a test version. Further product work continues.',
        summary: 'Reworking an existing expert-led product around a clearer entry journey, personal content and a web-first application.',
        challenge: [
          'Portal started from an existing product and an expert community. The redevelopment needed a clear path from first interest to a useful experience: arrive through an expert’s recommendation, answer a questionnaire and receive a personalised starting point.',
          'The project also required decisions about how daily content, expert materials and consultation requests should fit together. Rebuilding the interface was only one part of defining a product that the client could continue to develop.',
        ],
        clientTeam: [
          'The client owns the expert network, the underlying content and the commercial operation. DartWay participates in shaping the product concept as well as delivering the application.',
          'This is a commissioned product redevelopment with a broader product role for DartWay. The client’s answers about content, access and operations remain necessary inputs to implementation.',
        ],
        ourWork: [
          'We started with the entry journey and built a web-first Flutter application. The test version covers the landing experience, questionnaire, guest session and personalised profile generated from the client’s rules.',
          'The implementation also includes the phone-entry flow and the technical foundation for continuing into the daily product experience. The existing product and its data were preserved while work moved to the new implementation.',
          'The wider product scope connects personal guidance with expert profiles, materials and consultation inquiries. Daily tasks and the supporting integrations are being developed as the product decisions are clarified with the client.',
        ],
        collaboration: [
          'The working test version gives the client a concrete way to assess the concept. Instead of reviewing only a list of features, the team can follow the same path as a new participant and decide what should happen next.',
          'DartWay translates those decisions into interface behaviour and backend work. The client provides the content rules and operational answers that make the experience specific to its expert business.',
        ],
        result: [
          'The core entry journey has been implemented and checked in a test environment: landing, questionnaire, guest session, client-defined calculations, profile display and phone entry.',
          'The project remains in development. The next work connects the entry journey to daily use. Subscription and referral capabilities are part of the wider product scope for subsequent delivery.',
        ],
        features: ['Web-first Flutter application', 'Landing and questionnaire', 'Guest session', 'Personalised profile', 'Phone-entry flow', 'Existing product redevelopment'],
        visuals: [],
        cta: 'Have an existing product that needs a clearer next version? Let’s review the current experience and the first journey to rebuild.',
      },
      ru: {
        title: 'Портал',
        category: 'Платформа экспертов · Перезапуск продукта',
        status: 'В разработке',
        statusDetail: 'Основной путь входа и персональный профиль доступны в тестовой версии. Работа над продуктом продолжается.',
        summary: 'Перезапуск существующего продукта экспертов: понятный вход, персональные материалы и приложение с приоритетом веб-версии.',
        challenge: [
          'Портал развивался на основе существующего продукта и сообщества экспертов. Для новой версии требовался ясный путь от первого интереса к полезному действию: прийти по рекомендации эксперта, пройти анкету и получить персональную отправную точку.',
          'Нужно было также определить, как связать ежедневные материалы, экспертный контент и запросы на консультации. Обновление интерфейса стало частью более широкой задачи — сформировать продукт, который заказчик сможет последовательно развивать.',
        ],
        clientTeam: [
          'Заказчик отвечает за сеть экспертов, содержание материалов и коммерческую работу. DartWay участвует в проработке продуктовой концепции и реализует приложение.',
          'Это заказная переработка продукта с расширенной продуктовой ролью DartWay. Ответы клиента о контенте, доступе и операционных процессах остаются необходимой частью работы.',
        ],
        ourWork: [
          'Начали с пути нового пользователя и создали приложение на Flutter с приоритетом веб-версии. В тестовой реализации доступны посадочная страница, анкета, гостевая сессия и персональный профиль, формируемый по правилам заказчика.',
          'Реализован сценарий ввода телефона и техническая основа перехода к ежедневному использованию продукта. Прежний продукт и его данные сохранены на время перехода к новой реализации.',
          'Более широкий объём проекта связывает персональные рекомендации с профилями экспертов, материалами и заявками на консультации. Ежедневные задания и необходимые интеграции развиваются по мере уточнения продуктовых решений вместе с заказчиком.',
        ],
        collaboration: [
          'Рабочая тестовая версия позволяет предметно оценить концепцию. Команда проходит тот же путь, что и новый участник, и на конкретных экранах обсуждает следующий шаг, содержание и необходимые действия.',
          'DartWay переводит эти решения в поведение интерфейса и серверную логику. Заказчик предоставляет правила работы с контентом и ответы о процессах, которые связывают приложение с его экспертным бизнесом.',
        ],
        result: [
          'В тестовой среде реализован и проверен основной путь входа: посадочная страница, анкета, гостевая сессия, расчёты по правилам клиента, отображение профиля и ввод телефона.',
          'Проект остаётся в разработке. Следующая работа связывает путь входа с ежедневным использованием. Подписка и реферальные механики входят в более широкий объём последующего развития продукта.',
        ],
        features: ['Веб-приложение на Flutter', 'Посадочная страница и анкета', 'Гостевая сессия', 'Персональный профиль', 'Сценарий ввода телефона', 'Переработка действующего продукта'],
        visuals: [],
        cta: 'Есть действующий продукт, которому нужна следующая версия? Разберём текущий опыт и первый сценарий для переработки.',
      },
    },
  },
];
