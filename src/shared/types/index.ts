export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: "package" | "users" | "bar-chart-2";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FrameLoaderState {
  isLoading: boolean;
  progress: number;
  loadedFrames: number;
  totalFrames: number;
}
