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
        challenge: ['Losing weight rests on daily habits: log the food, drink the water, move, and see the weight follow the plan. The job was to fit all of that into one day of the user, not five separate trackers, and to spare them typing in every calorie by hand.'],
        clientTeam: ['U90 is a joint product with an entrepreneur: the idea, promotion and acceptance are theirs; the app and the server are ours, end to end.'],
        ourWork: ['The main screen is Today: the day score, what was eaten and burned, quick logging of food, water and activity, and meals waiting for a check.', 'Food is logged with a photo: the app recognises the meal, breaks it into items with calories and protein, and one slider sets the portion. A meal can also be described in words to the AI coach, and the conversation goes on inside the app.', 'Progress follows the 90-day cycle: a summary, the plan line and a weight forecast. Around it sit onboarding, workouts, a support circle, subscriptions and an editor of texts and translations for the product team.'],
        collaboration: ['Tasks went through our line: agents built, review and tests checked, the partner accepted on test builds. We also prepared the store builds and listings.'],
        result: ['The app is on the App Store and Google Play: one Flutter codebase for iOS and Android, with its own server. Next come new versions driven by user feedback.'],
        features: ['Daily overview', 'Meal from a photo', 'AI coach', 'Activity and water', 'Progress and weight forecast', 'Support circle', 'Subscriptions'],
        highlights: ['About three months from idea to the App Store and Google Play', 'iOS and Android from one codebase, released to both stores', 'Apple and Google sign-in, subscriptions, push notifications', 'A design system from scratch: about 60 components and a 32-screen quiz'],
        hardPart: { title: 'Calories from a photo you can trust', text: ['A model that guesses calories from the whole photo is off by 35–43%: it doesn’t know the portion weight and counts fat twice. For a weight-loss app that fails, because users stop trusting their diary.', 'We split the job. The model only names the items on the plate and their grams; the server counts calories, protein, fat and carbs from a 410-item reference built on USDA data. We compared five models on an open set of phone photos: the calorie error fell to about 20% and the double-counted fat disappeared. The user adjusts the portion with one slider and the numbers update at once.'] },
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
        challenge: ['Похудение держится на ежедневных привычках: записать еду, выпить воду, подвигаться и видеть, что вес идёт по плану. Нужно было собрать всё это в один день пользователя, а не в пять отдельных трекеров, и не заставлять его вбивать каждую калорию руками.'],
        clientTeam: ['U90 — совместный продукт с предпринимателем: у него идея, продвижение и приёмка, у нас — приложение и сервер целиком.'],
        ourWork: ['Главный экран — «Сегодня»: оценка дня, съеденное и потраченное, быстрая запись еды, воды и активности, блюда, которые ждут проверки.', 'Еду записывают фотографией: приложение распознаёт блюдо, раскладывает его на продукты с калориями и белком, порцию правят одним ползунком. Приём пищи можно и описать словами AI-коучу — разговор продолжается прямо в приложении.', 'Прогресс идёт по циклу 90 дней: итоги, линия плана и прогноз веса. Вокруг — онбординг, тренировки, круг поддержки, подписка и редактор текстов и переводов для команды продукта.'],
        collaboration: ['Задачи шли через нашу линию: агенты собирали, ревью и тесты проверяли, партнёр принимал на тестовых сборках. Сборки и страницы приложения в магазинах тоже готовили мы.'],
        result: ['Приложение в App Store и Google Play: один код на Flutter для iOS и Android и свой сервер. Дальше — новые версии по отзывам пользователей.'],
        features: ['Обзор дня', 'Блюдо по фото', 'AI-коуч', 'Активность и вода', 'Прогресс и прогноз веса', 'Круг поддержки', 'Подписка'],
        highlights: ['Около трёх месяцев от идеи до App Store и Google Play', 'iOS и Android из одного кода, релиз в оба магазина', 'Вход через Apple и Google, подписки, push-уведомления', 'Дизайн-система с нуля: около 60 компонентов и квиз из 32 экранов'],
        hardPart: { title: 'Калории по фото, которым можно верить', text: ['Модель, которая угадывает калории по фото целиком, ошибается на 35–43 %: она не знает вес порции и считает жир дважды. Для приложения похудения это не работает — пользователь перестаёт доверять дневнику.', 'Мы разделили работу. Модель только называет продукты на тарелке и их граммы, а калории, белки, жиры и углеводы считает сервер по справочнику на 410 позиций из базы USDA. Пять моделей сравнили на открытом наборе фото с телефона: ошибка по калориям упала примерно до 20 %, «двойной жир» исчез. Порцию пользователь правит одним ползунком, и цифры пересчитываются сразу.'] },
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
        statusDetail: 'A working staging version is undergoing client review before production launch.',
        summary: 'An app for a daily self-care practice: courses and a club, an energy index, a daily practice plan, and lessons with video and audio.',
        challenge: ['The client runs a school with courses and a club. Learners need one app for both the course with its lessons and the daily practice, and access has to open according to what each person bought on the course platform.'],
        clientTeam: ['The project came through an agency: the client, design, priorities and acceptance are theirs. The app, server, admin panel and integrations are ours.'],
        ourWork: ['Home shows the energy index, the current course and the club workout. The club holds a daily practice plan, live sessions, articles and practices beyond the course.', 'Lessons come with video and audio: a player with playback speed, the next lesson opened right from the course programme, progress per course and a learner profile.', 'Course access comes from the client’s platform, and learners are linked to their CRM. The school’s team manages courses, lessons and club materials in the admin panel.'],
        collaboration: ['The agency checks the test version against its designs, and each remark becomes a task on the line: how a lesson opens, how the player behaves, how access is checked.'],
        result: ['The test version with all the main flows is ready and in client acceptance. Device checks and the launch come next.'],
        features: ['Courses and lessons', 'Video and audio player', 'Energy index', 'Club and practice plan', 'Content admin', 'Course platform and CRM integration'],
        highlights: ['Stage one accepted by the client without remarks', 'Integrations with the course platform, CRM and an SMS service', 'Sign-in with Telegram, SMS or email', 'Screens checked against the Figma designs — about 200 points'],
        hardPart: { title: 'Access that opens by itself after a purchase', text: ['A learner buys a course on an external platform and watches it in the app. The buyer may not have an account yet, the purchase data arrives incomplete, and a refund has to close access at once.', 'The purchase reaches the app as an event from the platform. If the buyer doesn’t exist yet, the access is parked and applied at their first sign-in. A refund closes the course, and a repeated event duplicates nothing. Each case is tested on staging: purchase, repeat, parking, refund. Hundreds of video lessons sit in object storage, so a growing library never runs into the server’s disk.'] },
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
        statusDetail: 'Рабочая тестовая версия проходит проверку заказчика перед промышленным запуском.',
        summary: 'Приложение для ежедневной практики заботы о себе: курсы и клуб, индекс энергии, план практик на день, уроки с видео и аудио.',
        challenge: ['У заказчика — школа с курсами и клубом. Ученикам нужно одно приложение и для курса с уроками, и для ежедневной практики, а доступ должен открываться по тому, что человек купил на платформе курсов.'],
        clientTeam: ['Проект пришёл через агентство: у него заказчик, дизайн, приоритеты и приёмка. У нас — приложение, сервер, админка и интеграции.'],
        ourWork: ['На главной — индекс энергии, текущий курс и тренировка клуба. В клубе — план практик на день, эфиры, статьи и практики помимо курса.', 'Уроки — с видео и аудио: плеер со скоростью воспроизведения, переход к следующему уроку прямо из программы курса, прогресс по каждому курсу, профиль ученика.', 'Доступ к курсам приходит с платформы заказчика, ученики связаны с его CRM. Курсы, уроки и материалы клуба команда школы ведёт в админке.'],
        collaboration: ['Агентство проверяет тестовую версию по своим макетам, каждое замечание становится задачей на линии: как открывается урок, как ведёт себя плеер, как проверяется доступ.'],
        result: ['Тестовая версия со всеми основными сценариями готова и проходит приёмку заказчика. Впереди — проверки на устройствах и запуск.'],
        features: ['Курсы и уроки', 'Видео- и аудиоплеер', 'Индекс энергии', 'Клуб и план практик', 'Админка контента', 'Интеграция с платформой курсов и CRM'],
        highlights: ['Первый этап принят заказчиком без замечаний', 'Интеграции с платформой курсов, CRM и SMS-сервисом', 'Вход через Telegram, SMS или почту', 'Экраны сверены с макетами Figma — около 200 пунктов'],
        hardPart: { title: 'Доступ, который открывается сам после покупки', text: ['Ученик покупает курс на внешней платформе, а смотрит его в приложении. Покупатель может ещё не иметь аккаунта, данные о нём приходят неполными, а возврат денег должен сразу закрывать доступ.', 'Покупка приходит в приложение событием от платформы. Если покупателя ещё нет, доступ «паркуется» и открывается при первом входе. Возврат закрывает курс, повторное событие ничего не дублирует. Всё это проверено на стенде сценариями: покупка, повтор, парковка, возврат. Сотни видеоуроков лежат в объектном хранилище, чтобы рост библиотеки не упирался в диск сервера.'] },
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
        statusDetail: 'Web environments are deployed. Integration configuration and client launch checks continue.',
        summary: 'An app for going through an author’s self-development programme: mood check-ins with a diary, personalised materials, a moderated chat.',
        challenge: ['The author already has a self-development programme and a learning platform. Between sessions, a participant needs a place to record how they feel, return to personal materials and stay in touch with the group.'],
        clientTeam: ['This project also came through an agency: design and coordination are theirs, the method and content are the client’s. The Flutter web app and the server are ours.'],
        ourWork: ['Every day the participant records a check-in, and check-ins add up to a diary with a weekly calendar.', 'Personal materials are assembled into a profile by the rules of the author’s method and laid out in sections. There is a programme chat with a moderator and notifications about the course, live sessions and offers.', 'Sign-in and access are linked to the client’s learning platform; the team manages content and chat in the admin panel. An AI assistant is connected as a separate part.'],
        collaboration: ['The agency and the client accept the work in deployed web versions. Access and the settings of external systems are checked together with their owners.'],
        result: ['The web versions are deployed and the client has access to the app. What remains is configuring the integrations, the assistant included, and the checks before opening it to participants.'],
        features: ['Participant sign-in', 'Check-ins and diary', 'Personal materials', 'Moderated chat', 'Notifications', 'Course platform integration'],
        highlights: ['About four weeks from the start of development to production', 'Two production setups, Russia and the UAE, with personal data kept in Russia', 'One Flutter codebase for web, iOS and Android', 'Over 1,100 automated tests, 117 screens checked against the design'],
        hardPart: { title: 'A personal profile built on the author’s method', text: ['The heart of the programme is the participant’s personal profile: 19 sections across four themes, which the author used to compile by hand from the date of birth and name.', 'We moved the method into code: the server computes the profile itself, with no external services, and the result matched the author’s reference calculations in all eight test cases. Personal data stays in Russia, as the law requires, while the AI assistant runs through a separate setup abroad.'] },
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
        statusDetail: 'Веб-версии развёрнуты. Продолжаются настройка интеграций и проверки перед запуском.',
        summary: 'Приложение для прохождения авторской программы саморазвития: отметки состояния с дневником, персональные материалы, чат с модератором.',
        challenge: ['У автора уже есть программа саморазвития и учебная платформа. Между занятиями участнику нужно место, где он отмечает своё состояние, возвращается к личным материалам и остаётся на связи с группой.'],
        clientTeam: ['Этот проект тоже пришёл через агентство: у него дизайн и координация, у заказчика — методика и содержание. У нас — веб-приложение на Flutter и сервер.'],
        ourWork: ['Каждый день участник отмечает состояние, отметки складываются в дневник с календарём по неделям.', 'Персональные материалы собираются в профиль по правилам методики автора и разложены по разделам. Есть чат программы с модератором и уведомления о курсе, эфирах и предложениях.', 'Вход и доступ связаны с учебной платформой заказчика, контент и чат команда ведёт в админке. Отдельной частью подключается ИИ-ассистент.'],
        collaboration: ['Агентство и заказчик принимают работу в развёрнутых веб-версиях. Доступы и настройки внешних систем проверяем вместе с их владельцами.'],
        result: ['Веб-версии развёрнуты, у заказчика есть доступ к приложению. Осталось настроить интеграции, включая ассистента, и пройти проверки перед открытием для участников.'],
        features: ['Вход участника', 'Отметки состояния и дневник', 'Персональные материалы', 'Чат с модератором', 'Уведомления', 'Интеграция с платформой курсов'],
        highlights: ['Около четырёх недель от старта разработки до продакшена', 'Два продакшена: Россия и ОАЭ, персональные данные — в России', 'Один код на Flutter для веба, iOS и Android', 'Больше 1100 автотестов, 117 экранов сверены с макетом'],
        hardPart: { title: 'Персональный профиль по авторской методике', text: ['Главная ценность программы — личный профиль участника: 19 разделов в четырёх темах, которые автор раньше составлял вручную по дате рождения и имени.', 'Мы перенесли методику в код: сервер считает профиль сам, без внешних сервисов, и результат совпал с эталонными расчётами автора во всех восьми проверочных случаях. Персональные данные хранятся в России, как требует закон, а ИИ-ассистент работает через отдельный контур за рубежом.'] },
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
        challenge: ['A couple rarely finds a daily reason to talk about what matters. The product needed a short daily mechanic that also works solo, before the partner has joined.'],
        clientTeam: ['This is our own product, made with a content and promotion partner: the questions and the audience are theirs; the product and the app are ours.'],
        ourWork: ['Every day there is a question of the day: you answer, guess your partner’s answer, then compare. Each week has one theme, with activities and a date to plan.', 'The Couple screen shows what you have already worked through together, with your own rating inside that only you see. A relationship questionnaire completes the picture.', 'The couple’s AI knows the week’s theme and the questionnaire and helps with ideas, such as a gift based on what the partner shared, while keeping each partner’s private answers private. You can start alone; the partner joins by invitation.'],
        collaboration: ['We started with a detailed interactive prototype, and agents carry its screens into the app. Subscriptions and the public launch wait, so the core mechanic is tested on people first.'],
        result: ['Internal iOS testing through TestFlight is under way, with builds updated as work goes on. The public launch and subscriptions come next.'],
        features: ['Question of the day', 'Guess and compare answers', 'Weekly themes and activities', 'Date planning', 'Couple’s AI', 'Solo and couple use'],
        highlights: ['Under two weeks from idea to the first iPhone build', 'A detailed interactive prototype before the first line of code', 'iOS and Android from one codebase', 'Partners link up with a six-digit code'],
        hardPart: { title: 'Closeness without exposing what’s private', text: ['The app runs on honest answers, and people answer honestly only when they are sure their partner won’t see too much. The couple had to see their shared path without anything private leaking.', 'A partner’s answer to the question of the day opens only after both have answered, so nobody can peek and adjust. On the Couple screen the wheel shows what you worked through together, not the ratings: your rating is seen by you alone. The couple’s AI builds on the shared theme and the questionnaire but never retells either partner’s private answers.'] },
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
        challenge: ['Паре трудно каждый день находить повод поговорить о важном. Нужна короткая ежедневная механика, которая работает и в одиночку, пока партнёр ещё не присоединился.'],
        clientTeam: ['Это наш собственный продукт с партнёром по контенту и продвижению: у него вопросы и аудитория, у нас — продукт и приложение.'],
        ourWork: ['Каждый день — вопрос дня: отвечаешь сам, угадываешь ответ партнёра, потом сравниваете. Неделя посвящена одной теме, к ней — задания и свидание, которое пора спланировать.', 'На экране «Пара» видно, что вы уже проработали вместе, а внутри — твоя оценка, которую видишь только ты. Анкета об отношениях дополняет картину.', 'ИИ пары знает тему недели и анкету и помогает с идеями — например, подобрать подарок по тому, что рассказал партнёр, — но личное каждого не раскрывает. Начать можно одному, партнёр приходит по приглашению.'],
        collaboration: ['Сначала собрали подробный интерактивный прототип, по нему агенты переносят экраны в приложение. Подписку и публичный запуск отложили, чтобы сначала проверить на людях основную механику.'],
        result: ['Идёт внутреннее тестирование на iOS через TestFlight, сборки обновляются по ходу. Дальше — публичный запуск и подписка.'],
        features: ['Вопрос дня', 'Угадывание и сравнение ответов', 'Темы недели и задания', 'Планирование свиданий', 'ИИ пары', 'Для одного и для пары'],
        highlights: ['Меньше двух недель от идеи до первой сборки на iPhone', 'Подробный интерактивный прототип до первой строки кода', 'iOS и Android из одного кода', 'Пара соединяется по шестизначному коду'],
        hardPart: { title: 'Близость без раскрытия личного', text: ['Приложение строится на честных ответах, а честно отвечают, только если уверены, что партнёр не увидит лишнего. Нужно было показать паре общий путь и не выдать ничего личного.', 'Ответ партнёра на вопрос дня открывается только после того, как ответили оба, — подсмотреть и подстроиться нельзя. На экране «Пара» колесо показывает, что вы проработали вместе, а не оценки: свою оценку видишь только ты. ИИ пары опирается на общую тему и анкету, но личные ответы каждого не пересказывает.'] },
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
        challenge: ['People already use the app and pay for it: they go through the programme and come back to their track’s community every day. No change may break what they paid for.'],
        clientTeam: ['The client has its own product team: priorities, the programme and acceptance are theirs. Our part was the app code and shipping versions.'],
        ourWork: ['The app teaches people to keep their finances under control on iOS, Android and the web. Its core is a step-by-step programme in modules: budget, debts, a safety cushion, financial resilience.', 'A test gives a financial rating and a level; the home screen keeps the current lesson and a personal financial goal in view. Each track has its own community feed with topics, posts and reactions. Around them sit lessons with video, offline too, and paid access to courses.', 'We developed the app and kept it running: new features, investigating user reports and fixes such as video playback, access to paid content and account recovery.'],
        collaboration: ['A user report became a task on the line: understand the scenario, fix it, check it and hand the version to the client’s team for acceptance.'],
        result: ['The client named the quality bar himself: the service has to work steadily. The app ships regular releases to both stores and the web, and its community feed has grown past 63,000 posts. Our part is complete; the app is handed over to the client’s in-house team.'],
        features: ['iOS, Android and web', 'Step-by-step finance programme', 'Financial rating test', 'Lessons with video, offline too', 'Community feed by track', 'Paid access to courses'],
        highlights: ['iOS, Android, web and RuStore', 'Over 63,000 posts in the community', '66 of 69 lessons available offline', 'Stopped an SMS-code bot farm: nearly 14,000 requests from 3,900 numbers'],
        hardPart: { title: 'Offline lessons on the iPhone', text: ['Learners watch lessons on the go, so video has to open without a network. Offline viewing worked on the simulator, but on real iPhones the downloaded lessons wouldn’t play.', 'The cause was in iOS itself: the app sandbox doesn’t let the system media player reach a file through a symbolic link, and the simulator has no such limit. We changed how downloaded files are stored, and now 66 of 69 lessons are available offline — 244 files.'] },
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
        challenge: ['Приложением уже пользуются и платят: люди проходят тренажёр и каждый день возвращаются в сообщество своего трека. Ни одно изменение не должно ломать то, за что они заплатили.'],
        clientTeam: ['У заказчика своя продуктовая команда: приоритеты, программа и приёмка — у неё. Наша часть — код приложения и выпуск версий.'],
        ourWork: ['Приложение учит держать финансы под контролем — на iOS, Android и в вебе. В основе пошаговый тренажёр по модулям: бюджет, долги, подушка безопасности, финансовая устойчивость.', 'Тест даёт финансовый рейтинг и уровень, на главной — текущий урок и личная финансовая цель. У каждого трека своя лента сообщества с темами, постами и реакциями. Вокруг — уроки с видео, в том числе офлайн, и платный доступ к курсам.', 'Мы развивали приложение и вели его в работе: новые функции, разбор обращений пользователей и исправления — воспроизведение видео, доступ к платному, восстановление аккаунта.'],
        collaboration: ['Обращение пользователя превращалось в задачу на линии: разобрать сценарий, исправить, проверить и отдать версию на приёмку команде заказчика.'],
        result: ['Главный критерий заказчик назвал сам: «главное — стабильность работы сервиса». Приложение регулярно выходит в оба магазина и в веб, в ленте сообщества больше 63 000 постов. Наша часть завершена, приложение передано внутренней команде заказчика.'],
        features: ['iOS, Android и веб', 'Пошаговый тренажёр', 'Тест на финансовый рейтинг', 'Уроки с видео, в том числе офлайн', 'Лента сообщества по трекам', 'Платный доступ к курсам'],
        highlights: ['iOS, Android, веб и RuStore', 'Больше 63 000 постов в сообществе', '66 из 69 уроков доступны офлайн', 'Остановили ботоферму на SMS-кодах: почти 14 000 запросов с 3 900 номеров'],
        hardPart: { title: 'Уроки офлайн на iPhone', text: ['Ученики смотрят уроки в дороге, поэтому видео должно открываться без сети. Офлайн-просмотр работал на симуляторе, но на настоящих iPhone скачанные уроки не играли.', 'Причина нашлась в устройстве iOS: песочница приложения не пускает системный медиаплеер к файлу по символической ссылке, а на симуляторе этого ограничения нет. Мы поменяли способ хранения скачанных файлов — теперь офлайн доступны 66 из 69 уроков, 244 файла.'] },
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
