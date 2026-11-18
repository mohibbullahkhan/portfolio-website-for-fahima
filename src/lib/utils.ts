import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractVideoId(url: string, type: "youtube" | "vimeo" | "mp4"): string {
  if (type === "youtube") {
    // If raw 11-char ID
    if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|[?&]v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url;
  }
  if (type === "vimeo") {
    const regExp = /vimeo.*(?:\/|clip_id=)([0-9a-z]*)/i;
    const match = url.match(regExp);
    return match ? match[1] : url;
  }
  return url;
}
