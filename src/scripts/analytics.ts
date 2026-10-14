// Pageviews and CTA clicks to the shared DartWay counter (dartway.dev/analytics).
// Inert unless PUBLIC_ANALYTICS_ENDPOINT was set at build time. No cookies, no identifiers.

const endpoint = document.body.dataset.endpoint ?? '';

function send(kind: string): void {
  if (!endpoint) return;
  const body = JSON.stringify({
    kind,
    path: window.location.pathname,
    referrer: document.referrer || undefined,
  });
  const blob = new Blob([body], { type: 'text/plain;charset=UTF-8' });
  if (!navigator.sendBeacon?.(`${endpoint}/e`, blob)) {
    void fetch(`${endpoint}/e`, {
      method: 'POST',
      body,
      keepalive: true,
      headers: { 'Content-Type': 'text/plain;charset=UTF-8' },
    }).catch(() => {});
  }
}

send('pageview');

document.addEventListener(
  'click',
  (event) => {
    const name = (event.target as HTMLElement | null)?.closest?.('[data-cta]')?.getAttribute('data-cta');
    if (name) send(`cta:${name}`);
  },
  { capture: true },
);
