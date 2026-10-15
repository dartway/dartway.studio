export default {
  lang: 'en',
  title: 'DartWay Studio — a ready-made AI software factory',
  description:
    'A platform where AI agents run development from requirements to staging. You decide where a mistake is expensive. Closed beta.',
  switchLabel: 'RU',
  switchHref: '/ru/',
  nav: { how: 'How it works', agents: 'Agents', who: 'Who it’s for', beta: 'Beta', cta: 'Get in touch' },
  hero: {
    eyebrow: 'DartWay Studio',
    title: 'A ready-made AI software factory',
    kicker: 'AI agents run development from requirements to staging.',
    lead: 'You describe what the product should be and decide where a mistake is expensive. The rest follows the process.',
    meta: ['Closed beta', 'Free', 'Your agents, our process'],
    primary: 'Join the beta',
    secondary: '3-minute demo',
  },
  stats: [
    { value: '5', label: 'projects on the platform' },
    { value: '200+', label: 'issues passed code review in a week' },
    { value: '18 h', label: 'from spec to testing' },
  ],
  problem: {
    title: 'You can build your own factory. It just takes a lot of doing.',
    text: 'Wiring a tracker, CI, agents, review and deploys into a process that doesn’t fall apart in week three is a project of its own. It rarely gets finished: the process lives in heads and chats, and nobody can see where the time went.',
  },
  how: {
    title: 'How it works',
    steps: [
      {
        name: 'Epic',
        text: 'A description of how things should be. An agent breaks it into issues with specs; you keep the ones you want. Everything done later links back here, so requirements don’t get lost in chats.',
      },
      {
        name: 'Issue card',
        text: 'Its whole life: the brief, stages, who did what, questions and answers. The agent that picks it up tomorrow knows everything discussed today.',
      },
      {
        name: 'Process preset',
        text: 'Which agent writes the code, which one reviews, where your approval is needed. An issue launches by preset and moves on its own.',
      },
      {
        name: 'Board to staging',
        text: 'Development, review, deploy to staging. You look at whole blocks instead of poking every issue. Production goes out on your word.',
      },
    ],
  },
  agents: {
    title: 'The agents are yours. The process is ours.',
    text: 'A stage is run by Claude Code, Codex or the platform’s own agent — on your tokens or your own machine via MCP. We don’t replace these tools: we give them a process and the project’s memory.',
    chips: ['Claude Code', 'Codex', 'MCP', 'GitHub', 'your tokens'],
    humanTitle: 'Not fully dark',
    humanText: 'People decide where a mistake is expensive: what gets built, what gets accepted, what ships.',
  },
  who: {
    title: 'Who it’s for',
    items: [
      { name: 'Product teams', text: 'One or two people run a project; agents do the volume.' },
      { name: 'Small studios', text: 'Client projects on one process — and you can see where the time goes.' },
      { name: 'Freelancers', text: 'A team’s output without a team.' },
      { name: 'Founders', text: 'A product without an agency: you hold the requirements, the platform holds the process.' },
    ],
  },
  beta: {
    title: 'Where it stands — honestly',
    items: [
      'Closed beta. Free, with support from the founder.',
      'Best on Dart and Flutter, where our DartWay framework helps. Other stacks are being connected now.',
    ],
  },
  final: {
    title: 'I’ll show it on your project in 30 minutes',
    text: 'Write to me — we’ll look at how your process works and see whether Studio fits.',
    cta: 'Message on Telegram',
  },
  footer: {
    framework: 'Framework — dartway.dev',
    channel: 'Telegram channel',
  },
};
