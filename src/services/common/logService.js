import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://c6b850ce2147409387a388fbe2174ee4@o1068235.ingest.sentry.io/6062868",
    integrations: [new Integrations.BrowserTracing()],

    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

const logger = {
  init,
  log,
};

export default logger;
