import type { FC } from "react";
import { Loader2, Activity } from "lucide-react";

interface PageLoaderProps {
  fullScreen?: boolean;
  message?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({
  fullScreen = false,
  message = "Loading operational module...",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center transition-colors duration-200 ${
        fullScreen
          ? "min-h-screen w-full bg-slate-50 dark:bg-[#0f0f0f]"
          : "min-h-[360px] h-full w-full py-16 px-6"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute h-16 w-16 rounded-full bg-primary/15 dark:bg-primary/20 animate-ping" />

        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-slate-200/80 dark:border-gray-700 shadow-sm">
          <Activity className="h-6 w-6 text-primary animate-pulse" />
        </div>

        <Loader2 className="absolute -inset-1 h-16 w-16 animate-spin text-primary/40 dark:text-primary/30" />
      </div>

      <div className="mt-5 flex flex-col items-center gap-1.5 text-center">
        <span className="text-xs font-semibold tracking-wider uppercase text-primary-600 dark:text-primary-400">
          Ithere Care HMIS
        </span>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
          {message}
        </p>
        <span className="text-[11px] text-slate-400 dark:text-slate-500">
          Preparing secure clinical interface
        </span>
      </div>
    </div>
  );
};

export default PageLoader;
