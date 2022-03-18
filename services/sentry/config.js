import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

export const sentryConfig = Sentry.init({
  dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});
