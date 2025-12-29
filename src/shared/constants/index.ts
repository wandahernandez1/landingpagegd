export const SUPABASE_STORAGE_BASE_URL =
  "https://vhxrhgfseykmeeuqghir.supabase.co/storage/v1/object/public/GDstorage/";

export const FRAME_CONFIG = {
  totalFrames: 120,
  framePrefix: "frame_",
  frameSuffix: "_delay-0.04s.webp",
  priorityFrames: 20,
} as const;

export function getFrameUrl(index: number): string {
  const paddedIndex = String(index).padStart(3, "0");
  return `${SUPABASE_STORAGE_BASE_URL}${FRAME_CONFIG.framePrefix}${paddedIndex}${FRAME_CONFIG.frameSuffix}`;
}

export const COMPANY = {
  name: "Gestión Digital",
  tagline: "Software Comercial",
  year: 2025,
} as const;

export const FOOTER_LINKS = [
  { label: "Terminos", href: "/terms" },
  { label: "Privacidad", href: "/privacy" },
  { label: "Soporte", href: "/support" },
] as const;
