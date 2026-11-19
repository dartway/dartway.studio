// The agencies page: the dark factory as an agency's production line under its brand.
// Facts only: the same promises as the home page, no partner discounts (terms not set).
export const agencies = {
  en: {
    title: 'DartWay for agencies — a dark factory behind your brand',
    description: 'Sell app development under your brand. AI agents build to your designer’s mockup; you keep the client and the margin.',
    hero: {
      eyebrow: 'For agencies',
      title: 'A dark factory behind your agency',
      lead: 'You sell the app and keep the client and the margin. AI agents on our line build it to your designer’s mockup, under your brand.',
      guarantees: ['White label', 'Fixed price in one business day', 'Pixel Perfect to your mockup', 'Code in your repository'],
      primary: 'Price a client project',
      secondary: 'How the line works',
    },
    gains: {
      eyebrow: 'What changes for the agency',
      title: 'Development stops eating the margin',
      items: [
        { h: 'Answer the client while they are warm', p: 'Send the design and get the scope, a fixed price and the timeline by the next business day. No week of estimates before you can quote.' },
        { h: 'Know your cost before you quote', p: 'Our price is fixed for the agreed scope. You add your margin. Anything beyond the scope is priced before work starts.' },
        { h: 'Changes don’t become a new budget', p: 'Client feedback turns into a change the same day, not a ticket for the next sprint.' },
        { h: 'The client stays yours', p: 'White label. We don’t contact your client. You show the test builds and the release as your own work.' },
      ],
    },
    compare: {
      eyebrow: 'Why a factory, not another contractor',
      title: 'The same line on every project, not the habits of whoever is free',
      intro: 'A contractor’s quality depends on the people on your project. On the line, every task goes through the same checks.',
      cols: { vibe: 'Typical contractor', ours: 'DartWay line' },
      rows: [
        { topic: 'Estimate', vibe: 'Calls and a range', ours: 'Scope, fixed price and timeline in one business day' },
        { topic: 'Design', vibe: 'Close enough, your designer files the bugs', ours: 'Every screen compared with the mockup before you see it' },
        { topic: 'Client changes', vibe: 'Next sprint and a new estimate', ours: 'Same day; anything beyond the scope priced before work' },
        { topic: 'Progress', vibe: 'Status calls', ours: 'A test build to show your client from the first week' },
        { topic: 'Quality', vibe: 'Depends on who is on the team', ours: 'Code review and tests on every task, a senior signs off every release' },
        { topic: 'Handover', vibe: 'Their code, their habits', ours: 'An open framework in your repository: any Flutter developer can continue' },
      ],
      check: {
        label: 'Check it yourself',
        links: [
          { text: 'The framework on GitHub', href: 'https://github.com/dartway/dartway' },
          { text: 'Projects built for an agency', href: '#agency-work' },
        ],
      },
    },
    roles: {
      eyebrow: 'Who does what',
      title: 'Three sides, one line',
      cols: [
        { who: 'Your client', items: ['Gets the app from you', 'Approves the design and accepts releases through you', 'Owns the store accounts'] },
        { who: 'Your agency', items: ['Owns the client, the design and the price', 'Sends the mockup, answers product questions', 'Accepts every stage before the client sees it'] },
        { who: 'DartWay', items: ['Scope and fixed price in a day', 'Build, review and design check on every task', 'Release to the stores in the client’s accounts, support after'] },
      ],
    },
    work: {
      eyebrow: 'Built for an agency',
      title: 'Two of our projects are an agency’s, under NDA',
      intro: 'A producer sells development to experts and authors; we build the apps under the producer’s name.',
    },
    start: {
      eyebrow: 'How to start',
      title: 'One client project is enough to judge',
      steps: [
        { h: 'Send a project', p: 'A Figma mockup, a prototype or a brief from your client.' },
        { h: 'Get the price', p: 'By the next business day: scope, fixed price and timeline. You quote your client.' },
        { h: 'First paid stage', p: 'One flow or a few screens. You judge the result, not a pitch.' },
        { h: 'The next projects', p: 'Go down the same line, at the same kind of fixed price.' },
      ],
    },
    faq: {
      eyebrow: 'Questions agencies ask',
      title: 'Before you send a client project',
      items: [
        { q: 'Will you talk to our client?', a: 'Only if you ask, and then as part of your team. By default everything goes through you.' },
        { q: 'Will our client know about you?', a: 'No, unless you tell them. We are not named in the app, the builds or the store listing.' },
        { q: 'How do we price it for the client?', a: 'You get our fixed price for the agreed scope and set your own on top. We never quote your client.' },
        { q: 'The client changed the design mid-project.', a: 'Send the new mockup. Small changes go in the same day; anything beyond the scope is priced before work starts.' },
        { q: 'Our designer works in Figma. Is that enough?', a: 'Yes. A Figma mockup is the usual start. Your designer accepts the screens against it.' },
        { q: 'We already have a contractor.', a: 'Keep them. Give us one stage of the next project and compare the result, the time and the price.' },
        { q: 'What do you build on?', a: 'Flutter for iOS, Android and web, with a Dart backend on our open-source DartWay framework. One codebase any Flutter developer can pick up.' },
      ],
    },
  },
  ru: {
    title: 'DartWay для агентств — тёмная фабрика под вашим брендом',
    description: 'Продавайте разработку приложений под своим брендом. ИИ-агенты собирают по макету вашего дизайнера; клиент и маржа остаются у вас.',
    hero: {
      eyebrow: 'Для агентств',
      title: 'Тёмная фабрика за вашим агентством',
      lead: 'Вы продаёте приложение, клиент и маржа остаются у вас. ИИ-агенты на нашей линии собирают его по макету вашего дизайнера — под вашим брендом.',
      guarantees: ['White label', 'Фиксированная цена за рабочий день', 'Pixel Perfect по вашему макету', 'Код в вашем репозитории'],
      primary: 'Посчитать проект клиента',
      secondary: 'Как устроена линия',
    },
    gains: {
      eyebrow: 'Что меняется для агентства',
      title: 'Разработка перестаёт съедать маржу',
      items: [
        { h: 'Отвечаете клиенту, пока он тёплый', p: 'Присылаете макет — на следующий рабочий день объём, фиксированная цена и срок. Без недели оценок до первого предложения.' },
        { h: 'Знаете себестоимость до предложения', p: 'Наша цена фиксирована на согласованный объём. Свою маржу ставите сверху. Всё сверх объёма считаем до начала работы.' },
        { h: 'Правки не становятся новым бюджетом', p: 'Замечание клиента становится правкой в тот же день, а не задачей на следующий спринт.' },
        { h: 'Клиент остаётся вашим', p: 'White label. Мы не выходим на вашего клиента. Тестовые сборки и релиз вы показываете как свою работу.' },
      ],
    },
    compare: {
      eyebrow: 'Почему фабрика, а не ещё один подрядчик',
      title: 'Одна линия на каждом проекте, а не привычки того, кто свободен',
      intro: 'У подрядчика качество зависит от людей на вашем проекте. На линии каждая задача проходит одни и те же проверки.',
      cols: { vibe: 'Обычный подрядчик', ours: 'Линия DartWay' },
      rows: [
        { topic: 'Оценка', vibe: 'Созвоны и вилка', ours: 'Объём, фиксированная цена и срок за рабочий день' },
        { topic: 'Дизайн', vibe: 'Примерно похоже, баги заводит ваш дизайнер', ours: 'Каждый экран сверен с макетом до того, как вы его увидите' },
        { topic: 'Правки клиента', vibe: 'В следующий спринт и с новой оценкой', ours: 'В тот же день; сверх объёма — с ценой до начала работы' },
        { topic: 'Ход работы', vibe: 'Созвоны по статусу', ours: 'Тестовая сборка для клиента с первой недели' },
        { topic: 'Качество', vibe: 'Зависит от того, кто в команде', ours: 'Ревью кода и тесты на каждой задаче, каждый релиз подписывает сеньор' },
        { topic: 'Передача', vibe: 'Их код, их привычки', ours: 'Открытый фреймворк в вашем репозитории: продолжит любой Flutter-разработчик' },
      ],
      check: {
        label: 'Проверьте сами',
        links: [
          { text: 'Фреймворк на GitHub', href: 'https://github.com/dartway/dartway' },
          { text: 'Проекты для агентства', href: '#agency-work' },
        ],
      },
    },
    roles: {
      eyebrow: 'Кто что делает',
      title: 'Три стороны, одна линия',
      cols: [
        { who: 'Ваш клиент', items: ['Получает приложение от вас', 'Утверждает дизайн и принимает релизы через вас', 'Владеет аккаунтами магазинов'] },
        { who: 'Ваше агентство', items: ['Владеет клиентом, дизайном и ценой', 'Присылает макет, отвечает на вопросы по продукту', 'Принимает каждый этап до того, как его увидит клиент'] },
        { who: 'DartWay', items: ['Объём и фиксированная цена за день', 'Сборка, ревью и сверка с макетом на каждой задаче', 'Релиз в магазины в аккаунтах клиента, поддержка после'] },
      ],
    },
    work: {
      eyebrow: 'Сделано для агентства',
      title: 'Два наших проекта — агентские, под NDA',
      intro: 'Продюсер продаёт разработку экспертам и авторам, мы собираем приложения под его именем.',
    },
    start: {
      eyebrow: 'Как начать',
      title: 'Чтобы оценить, хватит одного проекта клиента',
      steps: [
        { h: 'Пришлите проект', p: 'Макет в Figma, прототип или описание от вашего клиента.' },
        { h: 'Получите цену', p: 'На следующий рабочий день: объём, фиксированная цена и срок. Вы делаете предложение клиенту.' },
        { h: 'Первый платный этап', p: 'Один сценарий или несколько экранов. Судите по результату, а не по презентации.' },
        { h: 'Следующие проекты', p: 'Идут по той же линии и так же по фиксированной цене.' },
      ],
    },
    faq: {
      eyebrow: 'Что спрашивают агентства',
      title: 'Прежде чем прислать проект клиента',
      items: [
        { q: 'Вы будете общаться с нашим клиентом?', a: 'Только если попросите, и тогда — как часть вашей команды. По умолчанию всё идёт через вас.' },
        { q: 'Клиент узнает о вас?', a: 'Нет, если вы сами не скажете. Нас нет ни в приложении, ни в сборках, ни в карточке магазина.' },
        { q: 'Как нам ставить цену клиенту?', a: 'Вы получаете нашу фиксированную цену на согласованный объём и ставите свою сверху. Вашему клиенту мы цену не называем.' },
        { q: 'Клиент поменял дизайн посреди проекта.', a: 'Пришлите новый макет. Небольшие правки — в тот же день, всё сверх объёма считаем до начала работы.' },
        { q: 'Наш дизайнер работает в Figma. Этого достаточно?', a: 'Да. Макет в Figma — обычный старт. Ваш дизайнер принимает экраны по нему.' },
        { q: 'У нас уже есть подрядчик.', a: 'Оставьте его. Дайте нам один этап следующего проекта и сравните результат, срок и цену.' },
        { q: 'На чём вы собираете?', a: 'Flutter для iOS, Android и веба, сервер на Dart на нашем открытом фреймворке DartWay. Одна кодовая база, которую подхватит любой Flutter-разработчик.' },
      ],
    },
  },
};
