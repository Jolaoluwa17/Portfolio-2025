// Type definitions for Google Analytics

interface Window {
  gtag: (
    command: "config" | "event" | "js",
    targetId: string | Date,
    config?: {
      page_path?: string;
      event_category?: string;
      event_label?: string;
      value?: number;
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}

