export type Locale = 'en' | 'ru';

export interface CaseVisual {
  /** a real image */
  src?: string;
  /** an app screen recreated in HTML in the page's language: "<app>-<screen>", see Replica.astro */
  screen?: string;
  alt: string;
  /** desktop screen: the work card shows it alone */
  wide?: boolean;
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
  /** one line under the recreated screens */
  screensNote?: string;
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
          { screen: 'u90-today', alt: 'U90 Today screen: day score, calories eaten and burned, quick logging, meals waiting for a check', caption: 'Today: the day score, what was eaten and burned, meals waiting for a check.' },
          { screen: 'u90-meal', alt: 'U90 meal recognised from a photo, with its items and a portion slider', caption: 'A meal recognised from a photo: items, calories and protein, one slider for the portion.' },
          { screen: 'u90-progress', alt: 'U90 Progress screen: summary, the 90-day line and a weight forecast', caption: 'Progress over the 90-day cycle: summary, plan line, weight forecast.' },
        ],
        screensNote: 'Screens taken from the app design as live HTML. Meal photo: January Food Benchmark, CC BY 4.0.',
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
          { screen: 'u90-today', alt: 'Экран «Сегодня» в U90: оценка дня, съеденное и сожжённое, быстрая запись, блюда на проверку', caption: 'Сегодня: оценка дня, съедено и потрачено, блюда ждут проверки.' },
          { screen: 'u90-meal', alt: 'Блюдо, распознанное по фото, с составом и ползунком порции', caption: 'Блюдо по фото: состав, калории и белок, порция одним ползунком.' },
          { screen: 'u90-progress', alt: 'Экран «Прогресс» в U90: итоги, линия 90 дней, прогноз веса', caption: 'Прогресс за цикл 90 дней: итоги, линия плана, прогноз веса.' },
        ],
        screensNote: 'Экраны — из макетов приложения, переведены на русский; само приложение — на английском. Фото блюда: January Food Benchmark, CC BY 4.0.',
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
        category: 'Financial literacy · iOS, Android and web',
        status: 'Published',
        statusDetail: 'Live on the App Store, Google Play and the web, with paying users. We develop and support it.',
        summary: 'Development and releases of a live financial-literacy app: a step-by-step programme, a financial rating, lessons with video and a community by track.',
        challenge: [
          'A live app has a different delivery context from a new prototype. People already pay for it, go through the programme and come back to their track’s community every day. Changes must be assessed against those existing journeys.',
          'For the product team, support means turning concrete user problems into checked changes and releases. Access, video, progress and account recovery all touch the basic expectation that a user can return to what they paid for.',
        ],
        clientTeam: [
          'The client has its own product team and project management. Priorities and reported issues are coordinated through the client’s workflow, with acceptance on their side.',
          'DartWay’s role in the project covers application development and production support. The client continues to own the programme, content and product priorities.',
        ],
        ourWork: [
          'The app teaches people to keep their finances under control on iOS, Android and the web. Its core is a step-by-step programme in modules: budget, debts, a safety cushion, financial resilience. A test gives a financial rating and a level, the home screen keeps the current lesson and a personal financial goal in view, and each track has its own community feed with topics, posts and reactions. Around them sit lessons with video, offline viewing and paid access to courses.',
          'Our work has included implementing changes, investigating reported application problems and preparing fixes for release. Video playback, access to paid content and account recovery are examples of the areas addressed in the support workflow.',
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
        features: ['iOS, Android and web', 'Step-by-step finance programme', 'Financial rating test', 'Lessons with video, offline too', 'Community feed by track', 'Releases to both stores'],
        visuals: [
          { screen: 'tvaity-home', alt: 'Home: streak, current lesson, financial goal and partner offers', caption: 'Home: the current lesson and the financial goal.' },
          { screen: 'tvaity-programme', alt: 'Step-by-step finance programme by modules', caption: 'The step-by-step programme.' },
          { screen: 'tvaity-rating', alt: 'Financial rating and level after the test', caption: 'The financial rating after the test.' },
        ],
        screensNote: 'Screens rebuilt from the code of the version we develop, translated from Russian; the app itself is in Russian. Names and figures are demo data.',
        cta: 'Need a technical partner for an existing application? Share the product and the changes your team needs to deliver.',
      },
      ru: {
        title: 'Tvaity',
        category: 'Финансовая грамотность · iOS, Android и веб',
        status: 'В магазинах',
        statusDetail: 'Работает в App Store, Google Play и в вебе, с платящими пользователями. Развиваем и сопровождаем.',
        summary: 'Развитие и релизы действующего приложения по финансовой грамотности: пошаговый тренажёр, финансовый рейтинг, уроки с видео и сообщество по трекам.',
        challenge: [
          'У действующего приложения другой контекст, чем у нового прототипа. Люди уже платят, проходят тренажёр и каждый день возвращаются в сообщество своего трека. Изменения нужно оценивать с учётом этих существующих сценариев.',
          'Для продуктовой команды сопровождение означает превращение конкретных обращений пользователей в проверенные исправления и релизы. Доступ, видео, прогресс и восстановление аккаунта связаны с базовым ожиданием пользователя: вернуться к тому, за что он заплатил.',
        ],
        clientTeam: [
          'У заказчика есть собственная продуктовая команда и управление проектом. Приоритеты и обращения проходят через её рабочий процесс, приёмка также остаётся на стороне клиента.',
          'Роль DartWay включает развитие приложения и техническое сопровождение. Заказчик продолжает отвечать за программу, содержание и порядок продуктовых изменений.',
        ],
        ourWork: [
          'Приложение учит держать финансы под контролем — на iOS, Android и в вебе. В основе пошаговый тренажёр по модулям: бюджет, долги, подушка безопасности, финансовая устойчивость. Тест даёт финансовый рейтинг и уровень, на главной — текущий урок и личная финансовая цель, у каждого трека своя лента сообщества с темами, постами и реакциями. Вокруг — уроки с видео, в том числе офлайн, и платный доступ к курсам.',
          'В нашу работу входят реализация изменений, разбор проблем в приложении и подготовка исправлений к выпуску. Среди направлений сопровождения — воспроизведение видео, доступ к платному и восстановление аккаунта.',
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
        features: ['iOS, Android и веб', 'Пошаговый тренажёр', 'Тест на финансовый рейтинг', 'Уроки с видео, в том числе офлайн', 'Лента сообщества по трекам', 'Релизы в оба магазина'],
        visuals: [
          { screen: 'tvaity-home', alt: 'Главная: серия, текущий урок, финансовая цель и предложения партнёров', caption: 'Главная: текущий урок и финансовая цель.' },
          { screen: 'tvaity-programme', alt: 'Пошаговый тренажёр по модулям', caption: 'Пошаговый тренажёр.' },
          { screen: 'tvaity-rating', alt: 'Финансовый рейтинг и уровень после теста', caption: 'Финансовый рейтинг после теста.' },
        ],
        screensNote: 'Экраны собраны по коду версии, которую развиваем мы; имена и цифры — демонстрационные.',
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
        status: 'Launching soon',
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
          { screen: 'courses-home', alt: 'Home: energy index, current course and club workout', caption: 'Home: the index, the course and the club workout.' },
          { screen: 'courses-club', alt: 'Club: plan for the day with practices', caption: 'Club: the plan for the day.' },
          { screen: 'courses-lesson', alt: 'Lesson with a video player and the next lessons', caption: 'A lesson with video and the course programme.' },
        ],
        screensNote: 'Screens rebuilt from the app code and design, translated from Russian; names and photos replaced under NDA.',
        cta: 'Your team owns design and product management? Send us the scope to discuss the implementation.',
      },
      ru: {
        title: 'NDA: приложение курсов и клуба',
        category: 'Обучение и wellness · Партнёрство с агентством',
        status: 'Скоро релиз',
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
          { screen: 'courses-home', alt: 'Главная: индекс энергии, текущий курс и тренировка клуба', caption: 'Главная: индекс, курс и тренировка клуба.' },
          { screen: 'courses-club', alt: 'Клуб: план на день с практиками', caption: 'Клуб: план на сегодня.' },
          { screen: 'courses-lesson', alt: 'Урок с видеоплеером и следующими уроками', caption: 'Урок с видео и программа курса.' },
        ],
        screensNote: 'Экраны собраны по коду и макетам приложения; названия и фото заменены по NDA.',
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
        status: 'Launching soon',
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
          { screen: 'comp-home', alt: 'Home: profile card, daily mood check-in and calendar', caption: 'Home: the daily check-in and the diary week.' },
          { screen: 'comp-chat', alt: 'Group chat of the programme', caption: 'The programme chat with a moderator.' },
          { screen: 'comp-notif', alt: 'Notifications: live sessions, hints and schedule', caption: 'Notifications by course, live sessions and offers.' },
        ],
        screensNote: 'Screens rebuilt from the app code and design, translated from Russian; names and photos replaced under NDA.',
        cta: 'Extending an existing course or membership business? Let’s map the app and the systems it needs to connect.',
      },
      ru: {
        title: 'NDA: приложение-компаньон к обучению',
        category: 'Приложение для обучения · Партнёрство с агентством',
        status: 'Скоро релиз',
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
          { screen: 'comp-home', alt: 'Главная: карточка профиля, отметка самочувствия и календарь', caption: 'Главная: отметка состояния и неделя дневника.' },
          { screen: 'comp-chat', alt: 'Общий чат программы', caption: 'Чат программы с модератором.' },
          { screen: 'comp-notif', alt: 'Уведомления: эфиры, подсказки и расписание', caption: 'Уведомления по курсу, эфирам и предложениям.' },
        ],
        screensNote: 'Экраны собраны по коду и макетам приложения; названия и фото заменены по NDA.',
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
        status: 'Launching soon',
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
          'The current focus is internal testing and refinement of the core experience. Public distribution and paid subscriptions follow that validation. The screens below are from the app design it is built to.',
        ],
        features: ['Daily questions', 'Guess and compare answers', 'Solo and couple scenarios', 'Relationship questionnaire', 'Detailed interaction prototype', 'Internal TestFlight distribution'],
        visuals: [
          { screen: 'para-today', alt: 'Love Paradogz Today screen: theme of the week, date plan and question of the day', caption: 'Today: the theme of the week, a date to plan and the question of the day.' },
          { screen: 'para-pair', alt: 'Love Paradogz Couple screen: a wheel of what the couple worked through, with a private rating inside', caption: 'Couple: what you worked through together, and your own rating only you see.' },
          { screen: 'para-ai', alt: 'Love Paradogz AI chat suggesting a gift from what the partner shared', caption: 'The couple’s AI knows the week’s theme and the survey, and keeps each partner’s private answers private.' },
        ],
        screensNote: 'Screens taken from the app design, translated from Russian; the app itself is in Russian.',
        cta: 'Have a detailed design and a product to validate? Let’s define the first build people can actually try.',
      },
      ru: {
        title: 'Love Paradogz',
        category: 'Отношения · Собственный продукт',
        status: 'Скоро релиз',
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
          'Сейчас команда проверяет и дорабатывает основные сценарии во внутреннем тестировании. Следом — публичный доступ и подписка. Ниже — экраны из макетов, по которым собрано приложение.',
        ],
        features: ['Ежедневные вопросы', 'Угадывание и сравнение ответов', 'Сценарии для одного и для пары', 'Анкета об отношениях', 'Подробный интерактивный прототип', 'Внутренние сборки TestFlight'],
        visuals: [
          { screen: 'para-today', alt: 'Экран «Сегодня» в Love Paradogz: тема недели, план свидания и вопрос дня', caption: 'Сегодня: тема недели, свидание, которое пора спланировать, и вопрос дня.' },
          { screen: 'para-pair', alt: 'Экран «Пара»: кольцо того, что пара проработала, и личная оценка внутри', caption: 'Пара: что проработали вместе и твоя оценка, которую видишь только ты.' },
          { screen: 'para-ai', alt: 'ИИ пары подбирает подарок по тому, что рассказал партнёр', caption: 'ИИ пары знает тему недели и анкету, но личное каждого не раскрывает.' },
        ],
        screensNote: 'Экраны — из макетов приложения.',
        cta: 'Есть подробный дизайн и идея для проверки? Определим первую сборку, которую смогут попробовать люди.',
      },
    },
  },
];
