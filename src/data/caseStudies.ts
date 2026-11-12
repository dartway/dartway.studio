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
  /** 3–4 short points: what made the project hard or strong (one platform launch, tight timeline, integrations) */
  highlights?: string[];
  /** one feature that was a real product problem, told as problem → solution */
  hardPart?: { title: string; text: string[] };
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
        statusDetail: 'Available on the App Store and Google Play.',
        summary: 'An app for losing weight on a 90-day programme: meals recognised from a photo, an AI coach, activity and water tracking, and a weight forecast.',
        challenge: ['The user loses weight on a 90-day programme: every day they log food, water and activity and see whether their weight follows the plan. The main way to log food is a photo.'],
        clientTeam: ['U90 is a joint product with an entrepreneur: the idea, promotion and acceptance are theirs. All of development is ours: architecture, the iOS and Android app, the backend with food recognition, integrations, the content editor and store publishing.'],
        ourWork: ['The Today screen: the day score, calories eaten and burned, quick logging of food, water and activity, and meals waiting to be confirmed.', 'The app breaks a meal photo into items with calories and protein, and a slider corrects the portion. A meal can also be described in text to the AI coach, and the chat goes on from there.', 'The Progress screen: the cycle summary, the plan line and a weight forecast. The app also has onboarding, workouts, a support circle and subscriptions, and the product team has an editor for texts and translations.'],
        collaboration: ['Every task went through the line: specification, agent code, review, automated tests, a build on staging. The partner accepted the work on test builds.'],
        result: ['The app is published on the App Store and Google Play, and we are building the next versions.'],
        features: ['Daily overview', 'Meal from a photo', 'AI coach', 'Activity and water', 'Progress and weight forecast', 'Support circle', 'Subscriptions'],
        highlights: ['Food from a photo: the model finds items and grams, calories and macros come from a USDA-based reference', 'Apple Health, Apple and Google sign-in, subscriptions, push notifications', 'Its own design system and a 32-screen onboarding quiz', 'AI coach: log a meal in text and chat about the day'],
        hardPart: { title: 'Calories from a photo', text: ['When a model estimates calories from the whole photo, public benchmarks put the error at 35–43%: the portion weight isn’t visible in a photo.', 'So our model only lists the items on the plate and their grams, and the server counts calories, protein, fat and carbs from a 410-item reference built on USDA data. We compared five models on an open set of phone photos and picked the best: the median calorie error is 17–18%. If the grams are off, the user moves a slider and the numbers update.'] },
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
        statusDetail: 'Опубликовано в App Store и Google Play.',
        summary: 'Приложение для снижения веса по программе на 90 дней: блюдо по фото, AI-коуч, учёт активности и воды, прогноз веса.',
        challenge: ['Пользователь худеет по программе на 90 дней: каждый день записывает еду, воду и активность и видит, идёт ли вес по плану. Основной способ записать еду — фото.'],
        clientTeam: ['U90 — совместный продукт с предпринимателем: идея, продвижение и приёмка на нём. На нас — вся разработка: архитектура, приложение для iOS и Android, бэкенд с распознаванием еды, интеграции, редактор контента и публикация в магазины.'],
        ourWork: ['Экран «Сегодня»: оценка дня, съеденные и потраченные калории, быстрая запись еды, воды и активности, блюда, которые ждут подтверждения.', 'Фото блюда приложение раскладывает на продукты с калориями и белком, порцию поправляют ползунком. Приём пищи можно описать текстом AI-коучу и дальше переписываться с ним.', 'Экран «Прогресс»: итоги цикла, линия плана и прогноз веса. Ещё в приложении онбординг, тренировки, круг поддержки и подписка, а у команды продукта — редактор текстов и переводов.'],
        collaboration: ['Каждая задача проходила линию: спецификация, код агентов, ревью, автотесты, сборка на стенде. Партнёр принимал работу на тестовых сборках.'],
        result: ['Приложение опубликовано в App Store и Google Play, мы делаем следующие версии.'],
        features: ['Обзор дня', 'Блюдо по фото', 'AI-коуч', 'Активность и вода', 'Прогресс и прогноз веса', 'Круг поддержки', 'Подписка'],
        highlights: ['Еда по фото: продукты и граммы определяет модель, калории и БЖУ считаются по справочнику USDA', 'Apple Health, вход через Apple и Google, подписки, push-уведомления', 'Своя дизайн-система, онбординг-квиз из 32 экранов', 'AI-коуч: запись еды текстом и переписка по дню'],
        hardPart: { title: 'Калории по фото', text: ['Если модель оценивает калории по фото целиком, ошибка по открытым замерам — 35–43 %: вес порции на фото не виден.', 'Поэтому модель у нас только перечисляет продукты на тарелке и их граммы, а калории, белки, жиры и углеводы считает сервер по справочнику на 410 продуктов из базы USDA. Мы сравнили пять моделей на открытом наборе фото с телефона и выбрали лучшую: медиана ошибки по калориям — 17–18 %. Если граммы неточные, пользователь двигает ползунок, и цифры пересчитываются.'] },
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
    slug: 'nda-courses',
    accent: '#e4b3ff',
    locales: {
      en: {
        title: 'NDA',
        category: 'Wellness education · Agency partnership',
        status: 'Launching soon',
        statusDetail: 'The test version is in client acceptance; the launch is ahead.',
        summary: 'An app for a daily self-care practice: courses and a club, an energy index, a daily practice plan, and lessons with video and audio.',
        challenge: ['The client runs an online school with courses and a club. Courses are sold on an external platform, but learners take them in the app, together with the club’s daily practices.'],
        clientTeam: ['The project came through an agency: the client, design and acceptance are theirs. All of development is ours: the mobile app, backend, admin panel, and integrations with the course platform, CRM and SMS service.'],
        ourWork: ['Home: the energy index, the current course and the club workout. The club has a daily practice plan, live sessions and articles.', 'Lessons with video and audio: a player with playback speed, the course programme with the next lessons, progress for each course.', 'The school’s team manages courses, lessons and club materials in the admin panel. Learner data goes to the client’s CRM.'],
        collaboration: ['The agency checks every build against its Figma designs, and remarks come to us as tasks. The client accepted stage one without remarks.'],
        result: ['The test version is ready and in client acceptance. Device checks and the launch come next.'],
        features: ['Courses and lessons', 'Video and audio player', 'Energy index', 'Club and practice plan', 'Content admin', 'Course platform and CRM integration'],
        highlights: ['Stage one accepted by the client without remarks', 'Course access from a payment event on an external platform, refunds included', 'Integrations: course platform, CRM, SMS; sign-in with Telegram, SMS or email', 'Every screen checked against the Figma designs'],
        hardPart: { title: 'Access after a purchase on an external platform', text: ['A course is bought on the course platform, and the buyer may not have an app account yet. A refund has to close access.', 'The platform sends a purchase event. If the learner isn’t in the app yet, the access is stored and opens at their first sign-in. A refund closes the course, and a repeated event duplicates nothing. Purchase, repeat, deferred access and refund were tested on staging.'] },
        visuals: [
          { screen: 'courses-home', alt: 'Home: energy index, current course and club workout', caption: 'Home: the index, the course and the club workout.' },
          { screen: 'courses-club', alt: 'Club: plan for the day with practices', caption: 'Club: the plan for the day.' },
          { screen: 'courses-lesson', alt: 'Lesson with a video player and the next lessons', caption: 'A lesson with video and the course programme.' },
        ],
        screensNote: 'Screens rebuilt from the app code and design, translated from Russian; names and photos replaced under NDA.',
        cta: 'Your team owns design and product management? Send us the scope to discuss the implementation.',
      },
      ru: {
        title: 'NDA',
        category: 'Обучение и wellness · Партнёрство с агентством',
        status: 'Скоро релиз',
        statusDetail: 'Тестовая версия на приёмке у заказчика, запуск впереди.',
        summary: 'Приложение для ежедневной практики заботы о себе: курсы и клуб, индекс энергии, план практик на день, уроки с видео и аудио.',
        challenge: ['У заказчика онлайн-школа с курсами и клубом. Курсы продаются на внешней платформе, а проходить их ученики должны в приложении — вместе с ежедневными практиками клуба.'],
        clientTeam: ['Проект пришёл через агентство: заказчик, дизайн и приёмка — на нём. На нас — вся разработка: мобильное приложение, бэкенд, админка, интеграции с платформой курсов, CRM и SMS-сервисом.'],
        ourWork: ['Главная: индекс энергии, текущий курс и тренировка клуба. В клубе — план практик на день, эфиры и статьи.', 'Уроки с видео и аудио: плеер с выбором скорости, программа курса со следующими уроками, прогресс по каждому курсу.', 'Курсы, уроки и материалы клуба команда школы ведёт в админке. Данные учеников уходят в CRM заказчика.'],
        collaboration: ['Агентство сверяет каждую сборку с макетами Figma, замечания приходят к нам задачами. Первый этап заказчик принял без замечаний.'],
        result: ['Тестовая версия готова и на приёмке у заказчика. Дальше — проверки на устройствах и запуск.'],
        features: ['Курсы и уроки', 'Видео- и аудиоплеер', 'Индекс энергии', 'Клуб и план практик', 'Админка контента', 'Интеграция с платформой курсов и CRM'],
        highlights: ['Первый этап принят заказчиком без замечаний', 'Доступ к курсу по событию оплаты на внешней платформе, с возвратами', 'Интеграции: платформа курсов, CRM, SMS; вход через Telegram, SMS или почту', 'Каждый экран сверен с макетами Figma'],
        hardPart: { title: 'Доступ после покупки на внешней платформе', text: ['Курс покупают на платформе курсов, а аккаунта в приложении у покупателя может ещё не быть. При возврате денег доступ нужно закрыть.', 'Платформа присылает событие о покупке. Если такого ученика в приложении ещё нет, доступ сохраняется и открывается при первом входе. Возврат закрывает курс, повторное событие ничего не дублирует. Покупку, повтор, отложенный доступ и возврат проверили на стенде.'] },
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
        title: 'NDA',
        category: 'Education companion · Agency partnership',
        status: 'Launching soon',
        statusDetail: 'Web versions are deployed; integrations are being configured before the launch.',
        summary: 'An app for going through an author’s self-development programme: mood check-ins with a diary, personalised materials, a moderated chat.',
        challenge: ['The author has a self-development programme and a learning platform. Participants need the app between sessions: to record how they feel, open personal materials and talk to the group.'],
        clientTeam: ['The project came through an agency: design and coordination are theirs, the method and texts are the client’s. All of development is ours: the Flutter app, backend, the profile calculation, the learning-platform integration and deployment in two jurisdictions.'],
        ourWork: ['Every day the participant records a check-in, and check-ins build a diary with a weekly calendar.', 'The personal profile holds materials based on the author’s method, laid out in sections. There is a programme chat with a moderator and notifications about the course, live sessions and offers.', 'Sign-in and access are linked to the client’s learning platform. The team manages content and chat in the admin panel. An AI assistant is connected separately.'],
        collaboration: ['The agency and the client accept the work in deployed web versions. Every task closes together with its automated tests.'],
        result: ['The web versions are deployed and the client has access. What remains is configuring the integrations, the assistant included, and checking everything before opening to participants.'],
        features: ['Participant sign-in', 'Check-ins and diary', 'Personal materials', 'Moderated chat', 'Notifications', 'Course platform integration'],
        highlights: ['A 19-section personal profile computed by the author’s method', 'Two production setups, Russia and the UAE; personal data kept in Russia as the law requires', '1,106 automated tests: 613 backend, 493 Flutter', '117 screens checked against the design'],
        hardPart: { title: 'Computing the personal profile', text: ['A participant’s profile has 19 sections across four themes. The author used to compile them by hand from the date of birth and name.', 'We moved the method into code, and the profile is computed automatically. On the author’s eight reference cases the result matched in full. Personal data is stored in Russia as Russian law requires, and the AI assistant runs through a separate setup abroad.'] },
        visuals: [
          { screen: 'comp-home', alt: 'Home: profile card, daily mood check-in and calendar', caption: 'Home: the daily check-in and the diary week.' },
          { screen: 'comp-chat', alt: 'Group chat of the programme', caption: 'The programme chat with a moderator.' },
          { screen: 'comp-notif', alt: 'Notifications: live sessions, hints and schedule', caption: 'Notifications by course, live sessions and offers.' },
        ],
        screensNote: 'Screens rebuilt from the app code and design, translated from Russian; names and photos replaced under NDA.',
        cta: 'Extending an existing course or membership business? Let’s map the app and the systems it needs to connect.',
      },
      ru: {
        title: 'NDA',
        category: 'Приложение для обучения · Партнёрство с агентством',
        status: 'Скоро релиз',
        statusDetail: 'Веб-версии развёрнуты, идёт настройка интеграций перед запуском.',
        summary: 'Приложение для прохождения авторской программы саморазвития: отметки состояния с дневником, персональные материалы, чат с модератором.',
        challenge: ['У автора есть программа саморазвития и учебная платформа. Приложение нужно участникам между занятиями: отмечать состояние, открывать личные материалы, общаться с группой.'],
        clientTeam: ['Проект пришёл через агентство: дизайн и координация на нём, методика и тексты — на заказчике. На нас — вся разработка: приложение на Flutter, бэкенд, расчёт профиля, интеграция с учебной платформой, развёртывание в двух юрисдикциях.'],
        ourWork: ['Каждый день участник отмечает состояние, отметки собираются в дневник с календарём по неделям.', 'Личный профиль — материалы по методике автора, разложенные по разделам. Чат программы с модератором, уведомления о курсе, эфирах и предложениях.', 'Вход и доступ связаны с учебной платформой заказчика. Контент и чат команда ведёт в админке. ИИ-ассистент подключается отдельно.'],
        collaboration: ['Агентство и заказчик принимают работу в развёрнутых веб-версиях. Каждая задача закрывается вместе с автотестами.'],
        result: ['Веб-версии развёрнуты, у заказчика есть доступ. Осталось настроить интеграции, включая ассистента, и проверить всё перед открытием для участников.'],
        features: ['Вход участника', 'Отметки состояния и дневник', 'Персональные материалы', 'Чат с модератором', 'Уведомления', 'Интеграция с платформой курсов'],
        highlights: ['Личный профиль из 19 разделов рассчитывается по методике автора', 'Два продакшена, Россия и ОАЭ; персональные данные — в России по 152-ФЗ', '1106 автотестов: 613 на бэкенде, 493 во Flutter', '117 экранов сверены с макетом'],
        hardPart: { title: 'Расчёт личного профиля', text: ['Профиль участника — 19 разделов в четырёх темах. Раньше автор составлял их вручную по дате рождения и имени.', 'Мы перенесли методику в код, и профиль считается автоматически. На восьми контрольных примерах автора результат совпал полностью. Персональные данные по 152-ФЗ хранятся в России, ИИ-ассистент работает через отдельный контур за рубежом.'] },
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
        statusDetail: 'Internal iOS testing is under way. Not publicly launched yet.',
        summary: 'An app for improving a couple’s relationship: a question of the day, guessing each other’s answers, dates to plan, and a couple’s AI that keeps each partner’s answers private.',
        challenge: ['A couple answers questions about themselves and each other every day. The app has to work for one person too, until the partner accepts the invitation.'],
        clientTeam: ['Our own product: the partner handles the questions and the audience; we handle product, design and development.'],
        ourWork: ['Question of the day: you answer, guess your partner’s answer, then compare. Each week has a theme, with activities and a date to plan.', 'The Couple screen: what you have worked through together, and your own rating that only you see. There is also a relationship questionnaire.', 'The couple’s AI knows the week’s theme and the questionnaire and helps with ideas, such as a gift. The partner joins by invitation.'],
        collaboration: ['We started with a 20-screen clickable prototype and tested the mechanic on it. Agents built the app from the prototype, and the build went to testers. Subscriptions and the public launch come after the mechanic is proven.'],
        result: ['Internal iOS testing through TestFlight is under way. The public launch and subscriptions come next.'],
        features: ['Question of the day', 'Guess and compare answers', 'Weekly themes and activities', 'Date planning', 'Couple’s AI', 'Solo and couple use'],
        highlights: ['8 days from idea to a TestFlight build', 'A partner’s answer opens only when both have answered', 'The couple’s AI knows the week’s theme and the questionnaire but keeps private answers private', 'Works solo too; the partner joins by invitation'],
        hardPart: { title: 'Privacy inside the couple', text: ['People answer honestly only when they are sure their partner won’t see too much. Yet the couple needs to see their shared progress.', 'A partner’s answer to the question of the day opens only when both have answered. The wheel on the Couple screen shows the topics you worked through, not the ratings: your rating is visible to you alone. The couple’s AI uses the shared theme and the questionnaire but never tells one partner the other’s private answers.'] },
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
        statusDetail: 'Идёт внутреннее тестирование на iOS. Публичного запуска ещё нет.',
        summary: 'Приложение для улучшения отношений в паре: вопрос дня, угадывание ответов друг друга, свидания и ИИ пары, который не раскрывает личное каждого.',
        challenge: ['Пара каждый день отвечает на вопросы о себе и друг о друге. Приложение должно работать и для одного человека, пока партнёр не принял приглашение.'],
        clientTeam: ['Собственный продукт: партнёр отвечает за вопросы и аудиторию, мы — за продукт, дизайн и разработку.'],
        ourWork: ['Вопрос дня: отвечаешь сам, угадываешь ответ партнёра, потом сравниваете. У каждой недели своя тема, к ней — задания и свидание, которое нужно спланировать.', 'Экран «Пара»: что вы уже проработали вместе и твоя оценка, которую видишь только ты. Есть анкета об отношениях.', 'ИИ пары знает тему недели и анкету и помогает с идеями — например, с подарком. Партнёр подключается по приглашению.'],
        collaboration: ['Сначала сделали кликабельный прототип на 20 экранов и проверили на нём механику. По прототипу агенты собрали приложение, сборка ушла тестировщикам. Подписка и публичный запуск — после проверки механики.'],
        result: ['Идёт внутреннее тестирование на iOS через TestFlight. Дальше — публичный запуск и подписка.'],
        features: ['Вопрос дня', 'Угадывание и сравнение ответов', 'Темы недели и задания', 'Планирование свиданий', 'ИИ пары', 'Для одного и для пары'],
        highlights: ['8 дней от идеи до сборки в TestFlight', 'Ответ партнёра открывается, только когда ответили оба', 'ИИ пары знает тему недели и анкету, но не раскрывает личные ответы', 'Работает и для одного, партнёр подключается по приглашению'],
        hardPart: { title: 'Приватность внутри пары', text: ['Люди отвечают честно, только если уверены, что партнёр не увидит лишнего. При этом паре нужно видеть общий прогресс.', 'Ответ партнёра на вопрос дня открывается, только когда ответили оба. Колесо на экране «Пара» показывает темы, которые вы проработали, а не оценки: свою оценку видишь только ты. ИИ пары использует общую тему и анкету, но не пересказывает одному партнёру личные ответы другого.'] },
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
  {
    slug: 'tvaity',
    accent: '#ffca8c',
    locales: {
      en: {
        title: 'Tvaity',
        category: 'Financial literacy · iOS, Android and web',
        status: 'Published',
        statusDetail: 'Live on the App Store, Google Play and the web, with paying users. Our part is complete; the app is handed over to the client’s in-house team.',
        summary: 'An app for learning financial literacy: a step-by-step programme, a financial rating test, lessons with video that work offline, and a community by track.',
        challenge: ['The app was already live: paying users, daily lessons, a community. We developed it and fixed bugs on the live product.'],
        clientTeam: ['The client has its own product team: priorities and acceptance are theirs. Ours was the app code for iOS, Android and the web, fixes from user reports, and shipping versions to every store.'],
        ourWork: ['The app teaches people to manage personal finances, on iOS, Android and the web. Its core is a step-by-step programme in modules: budget, debts, a safety cushion, financial resilience.', 'A test sets a financial rating and level. Home shows the current lesson and a personal financial goal. Each track has its own community feed with topics, posts and reactions. Video lessons can be downloaded and watched offline; courses are paid.', 'Our work: new features, investigating user reports, fixes to video, access to paid courses and account recovery, and protecting SMS sign-in from bots.'],
        collaboration: ['A user report reached us as a task: reproduce it, find the cause, fix it, check it, hand the version over for acceptance.'],
        result: ['The client’s bar: the service has to work steadily. The app ships regular releases to both stores and the web, and its community feed has 63,417 posts.'],
        features: ['iOS, Android and web', 'Step-by-step finance programme', 'Financial rating test', 'Lessons with video, offline too', 'Community feed by track', 'Paid access to courses'],
        highlights: ['iOS, Android, web and RuStore from one codebase', 'Offline lessons on the iPhone: 66 of 69, 244 files', 'SMS sign-in protection: cut off a bot farm — 13,915 requests from 3,881 numbers', 'A community feed of 63,417 posts'],
        hardPart: { title: 'Offline video on the iPhone', text: ['Downloaded lessons played on the simulator but not on real iPhones.', 'The cause was the iOS sandbox: the system media player won’t open a file through a symbolic link, and the simulator has no such limit. After the fix, 66 of 69 lessons are available offline — 244 files.'] },
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
        statusDetail: 'Работает в App Store, Google Play и в вебе, с платящими пользователями. Наша часть завершена, приложение передано внутренней команде заказчика.',
        summary: 'Приложение для обучения финансовой грамотности: пошаговый тренажёр, тест на финансовый рейтинг, уроки с видео и офлайн, сообщество по трекам.',
        challenge: ['Приложение уже работало: платящие пользователи, ежедневные уроки, сообщество. Мы развивали его и исправляли ошибки на живом продукте.'],
        clientTeam: ['У заказчика своя продуктовая команда: приоритеты и приёмка на ней. На нас — код приложения для iOS, Android и веба, исправления по обращениям пользователей и выпуск версий во все магазины.'],
        ourWork: ['Приложение учит управлять личными финансами, на iOS, Android и в вебе. Основа — пошаговый тренажёр по модулям: бюджет, долги, подушка безопасности, финансовая устойчивость.', 'Тест определяет финансовый рейтинг и уровень. На главной — текущий урок и личная финансовая цель. У каждого трека своя лента сообщества с темами, постами и реакциями. Уроки с видео можно скачать и смотреть офлайн, курсы платные.', 'Наша работа: новые функции, разбор обращений пользователей, исправления — видео, доступ к платным курсам, восстановление аккаунта, защита входа по SMS от ботов.'],
        collaboration: ['Обращение пользователя доходило до нас задачей: воспроизвести, найти причину, исправить, проверить, отдать версию на приёмку.'],
        result: ['Критерий заказчика: «главное — стабильность работы сервиса». Приложение регулярно выходит в оба магазина и в веб, в ленте сообщества 63 417 постов.'],
        features: ['iOS, Android и веб', 'Пошаговый тренажёр', 'Тест на финансовый рейтинг', 'Уроки с видео, в том числе офлайн', 'Лента сообщества по трекам', 'Платный доступ к курсам'],
        highlights: ['iOS, Android, веб и RuStore из одного кода', 'Офлайн-уроки на iPhone: 66 из 69, 244 файла', 'Защита входа по SMS: отсекли ботоферму — 13 915 запросов с 3 881 номера', 'Лента сообщества — 63 417 постов'],
        hardPart: { title: 'Офлайн-видео на iPhone', text: ['Скачанные уроки играли на симуляторе, но не играли на настоящих iPhone.', 'Причина — в песочнице iOS: системный медиаплеер не открывает файл по символической ссылке, а на симуляторе такого ограничения нет. После исправления офлайн доступны 66 из 69 уроков — 244 файла.'] },
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
];
