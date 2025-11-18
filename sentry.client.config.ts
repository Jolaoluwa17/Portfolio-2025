/// <reference types="node" />
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enabled:
    process.env.SENTRY_ENABLED === "true" &&
    !!process.env.SENTRY_DSN &&
    process.env.NODE_ENV === "production",
  sampleRate: 0.1,
  tracesSampleRate: 0.05,
  beforeSend(event: Sentry.ErrorEvent): Sentry.ErrorEvent | null {
    const typ = event.exception?.values?.[0]?.type ?? "";
    if (typ.includes("AbortError") || typ.includes("NetworkError")) return null;
    return event;
  },
});
