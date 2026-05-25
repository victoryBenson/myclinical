import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../../features/auth/authApi";
import { useAuthStore } from "../../store/auth.store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const inputCls = `
  w-full bg-zinc-900/60 border border-white/[0.06] rounded-xl px-4 py-3.5
  text-[15px] font-normal text-zinc-100 placeholder:text-zinc-600 outline-none
  focus:border-primary/60 focus:bg-zinc-900/90 focus:ring-4 focus:ring-primary/10
  transition-all duration-300 backdrop-blur-md shadow-inner
`;

export default function Login() {
  const setAuth = useAuthStore((s) => s.setAuth);
  const [shake, setShake] = useState(false);
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginUser,

    onSuccess: (res) => {
      const user = res.data.user;
      const token = res.data.access_token;

      setAuth(user, token);
      toast.success("Logged in successfully!");
      navigate("/");
    },

    onError: () => {
      setShake(true);
      toast.error("Invalid credentials");
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
    <div className="min-h-screen bg-zinc-950 flex flex-col md:flex-row font-sans selection:bg-primary/30 selection:text-white">
      
      <div className="relative hidden md:flex md:w-1/2 lg:w-[58%] flex-col justify-between p-12 overflow-hidden border-r border-white/[0.05]">
        
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-102 hover:scale-100"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80')` 
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20" />
        <div className="absolute inset-0 bg-zinc-950/30 mix-blend-multiply" />

        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex items-center gap-2.5">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/20 border border-white/10">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <span className="text-base font-semibold tracking-tight text-white">
            My<span className="font-light text-zinc-400">Clinic</span>
          </span>
          <span className="text-[10px] uppercase tracking-wider bg-white/[0.08] border border-white/[0.05] text-zinc-300 px-2.5 py-0.5 rounded-full font-medium backdrop-blur-sm">
            EMR System
          </span>
        </div>

        <div className="relative z-10 max-w-lg mb-4">
          <h2 className="text-4xl lg:text-5xl font-light tracking-tight text-white leading-[1.15] mb-5">
            Precision care, <br />
            connected in real <span className="font-serif italic text-primary font-normal">time</span>.
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-sm">
            Access secure electronic health records, streamline patient encounters, and manage clinical workflows effortlessly.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-xs font-normal text-zinc-500">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-emerald-500/80" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 4.925-3.075 9.136-7.466 10.801a1.241 1.241 0 01-.868 0C5.075 16.136 2 11.925 2 7.001c0-.68.056-1.35.166-2.001zm11.548 4.28a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            End-to-End HIPAA Encryption Secure
          </span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 md:w-1/2 lg:w-[42%] bg-zinc-950 relative overflow-hidden">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

        <div
          className={`w-full max-w-[360px] transition-all duration-300 ${
            shake ? "animate-shake" : ""
          }`}
        >
          <div className="flex md:hidden items-center gap-2 mb-8">
            <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tight text-zinc-100">MyClinic <span className="font-light text-zinc-500">EMR</span></span>
          </div>

          <header className="mb-8">
            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-primary/80 mb-1.5">
              Clinical Authentication
            </p>
            <h1 className="text-2xl font-light text-zinc-100 tracking-tight">
              Staff <span className="font-serif italic text-primary font-normal">Sign</span> In
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-500 mb-2">
                Username
              </label>
              <input
                name="username"
                type="text"
                placeholder="e.g., dr.johndoe"
                required
                className={inputCls}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-500">
                  Password
                </label>
                {/* <a href="#reset" className="text-[10px] tracking-wide text-zinc-500 hover:text-primary transition-colors">
                  Reset PIN?
                </a> */}
              </div>
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
              className="w-full mt-4 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-dark hover:brightness-110 text-white text-sm font-medium tracking-wide shadow-lg shadow-primary/10 active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none transition-all flex items-center justify-center gap-2.5 border border-white/5"
            >
              {mutation.isPending && (
                <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
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

              {mutation.isPending ? "Verifying Credentials..." : "Authorize & Enter"}
            </button>

            {/* Error Handlers */}
            {mutation.isError && (
              <div className="mt-3 p-3 bg-red-500/5 border border-red-500/10 rounded-xl">
                <p className="text-center text-xs text-red-400 font-light tracking-wide">
                  {(mutation.error as any)?.message ?? "Invalid staff credentials. System access denied."}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}