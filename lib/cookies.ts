// Cookie consent utility functions

const CONSENT_COOKIE_NAME = "cookie_consent";
const CONSENT_EXPIRY_DAYS = 365;

export type ConsentValue = "accepted" | "rejected" | null;

// Get consent status from cookies
export const getConsent = (): ConsentValue => {
  if (typeof window === "undefined") return null;
  
  const consent = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${CONSENT_COOKIE_NAME}=`))
    ?.split("=")[1];

  if (consent === "accepted" || consent === "rejected") {
    return consent as ConsentValue;
  }
  
  return null;
};

// Set consent status in cookies
export const setConsent = (value: "accepted" | "rejected") => {
  if (typeof window === "undefined") return;
  
  const date = new Date();
  date.setTime(date.getTime() + CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  
  document.cookie = `${CONSENT_COOKIE_NAME}=${value};${expires};path=/;SameSite=Lax`;
};

// Check if consent is given
export const hasConsent = (): boolean => {
  return getConsent() === "accepted";
};

