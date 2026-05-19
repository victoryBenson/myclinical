import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../features/auth/authApi";
import { useAuthStore } from "../../store/authStore";
import { useState } from "react";

const inputCls = `
  w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5
  text-[15px] font-light text-zinc-100 placeholder:text-zinc-600 outline-none
  focus:border-primary/50 focus:bg-primary/[0.05] focus:ring-2 focus:ring-primary/10
  transition-all duration-200
`;

export default function Login() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const [shake, setShake] = useState(false);

  const mutation = useMutation({
    mutationFn: loginUser,

    onSuccess: (res) => {
      const user = res.data.user;
      const token = res.data.access_token;

      setAuth(user, token);
    },

    onError: () => {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const get = (name: string) =>
      (form.elements.namedItem(name) as HTMLInputElement).value;

    mutation.mutate({
      username: get("username"),
      password: get("password"),
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      {/* background glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-24 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -bottom-24 -left-20 w-[400px] h-[400px] rounded-full bg-primary-darker/10 blur-[100px]" />
      </div>

      {/* card */}
      <div
        className={`relative z-10 w-full max-w-[420px] bg-zinc-900/90 border border-white/[0.07] rounded-2xl px-10 py-12 backdrop-blur-xl ${
          shake ? "animate-shake" : ""
        }`}
      >
        <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-primary/80 mb-2">
          Welcome back
        </p>

        <h1 className="text-[32px] font-light text-zinc-100 tracking-tight mb-9">
          Sign <em className="text-primary not-italic">in</em>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.1em] text-zinc-500 mb-2">
              Username
            </label>
            <input
              name="username"
              type="text"
              placeholder="your_username"
              required
              className={inputCls}
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.1em] text-zinc-500 mb-2">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className={inputCls}
            />
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className="w-full mt-2 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white text-sm font-medium tracking-wide disabled:opacity-50 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            {mutation.isPending && (
              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                />
              </svg>
            )}

            {mutation.isPending ? "Signing in..." : "Sign in"}
          </button>

          {mutation.isError && (
            <p className="text-center text-sm text-red-400">
              {(mutation.error as any)?.message ?? "Invalid credentials"}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}