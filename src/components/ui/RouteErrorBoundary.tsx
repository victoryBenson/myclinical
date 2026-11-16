import { Component, type ErrorInfo, type ReactNode } from "react";
import { AlertCircle, RefreshCw, Home, ShieldAlert } from "lucide-react";

interface RouteErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface RouteErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  isChunkLoadError: boolean;
  retryCount: number;
}

export class RouteErrorBoundary extends Component<
  RouteErrorBoundaryProps,
  RouteErrorBoundaryState
> {
  constructor(props: RouteErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      isChunkLoadError: false,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): RouteErrorBoundaryState {
    const errorMessage = error?.message || "";
    // Detect dynamic import or chunk loading failures (network offline, new build deployment)
    const isChunkLoadError =
      /Failed to fetch dynamically imported module/i.test(errorMessage) ||
      /Loading chunk .* failed/i.test(errorMessage) ||
      /error loading dynamically imported module/i.test(errorMessage) ||
      /Unable to preload CSS/i.test(errorMessage);

    return {
      hasError: true,
      error,
      isChunkLoadError,
      retryCount: 0,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("RouteErrorBoundary caught an error:", error, errorInfo);
  }

  handleRetry = () => {
    // If it's a chunk loading error from a new deployment, force a reload to get new manifest
    if (this.state.isChunkLoadError && this.state.retryCount >= 1) {
      window.location.reload();
      return;
    }

    this.setState((prev) => ({
      hasError: false,
      error: null,
      retryCount: prev.retryCount + 1,
    }));
  };

  handleNavigateHome = () => {
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      const { isChunkLoadError, error } = this.state;

      return (
        <div className="flex min-h-[400px] w-full flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full rounded-2xl border border-rose-200/80 dark:border-rose-900/40 bg-white dark:bg-gray-800 p-8 shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200/60 dark:border-rose-900/60 text-rose-600 dark:text-rose-400">
              {isChunkLoadError ? (
                <ShieldAlert className="h-7 w-7" />
              ) : (
                <AlertCircle className="h-7 w-7" />
              )}
            </div>

            <h2 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              {isChunkLoadError
                ? "Module Load Interrupted"
                : "Unable to Render Clinical View"}
            </h2>

            <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {isChunkLoadError
                ? "A network interruption or updated deployment prevented this operational module from downloading. Your authentication session remains secure."
                : "An unexpected error occurred while rendering this interface. Please try again or return to the hospital command overview."}
            </p>

            {error?.message && !isChunkLoadError && (
              <div className="mt-4 rounded-xl bg-slate-50 dark:bg-gray-900 p-3 text-left font-mono text-[11px] text-slate-600 dark:text-slate-400 max-h-24 overflow-y-auto border border-slate-200/60 dark:border-gray-800">
                {error.message}
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={this.handleRetry}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                Retry Module
              </button>

              <button
                type="button"
                onClick={this.handleNavigateHome}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Home className="h-4 w-4" />
                Command Dashboard
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RouteErrorBoundary;
