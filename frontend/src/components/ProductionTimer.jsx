import { useEffect, useState } from "react";
import { TimerReset } from "lucide-react";

const pad = (n) => String(n).padStart(2, "0");

function getProductionState(now) {
  const day = now.getDay();
  const h = now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
  const isLive = day >= 1 && day <= 5 && h >= 9 && h < 13;
  if (isLive) {
    const end = new Date(now);
    end.setHours(13, 0, 0, 0);
    return { live: true, target: end };
  }
  for (let i = 0; i < 8; i++) {
    const cand = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i, 9, 0, 0, 0);
    const d = cand.getDay();
    if (d >= 1 && d <= 5 && cand > now) return { live: false, target: cand };
  }
  return { live: false, target: now };
}

const Digit = ({ value, label }) => (
  <div className="text-center">
    <p className="font-mono text-3xl sm:text-4xl font-medium text-amber-400 tabular-nums">{value}</p>
    <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.2em] text-stone-500">{label}</p>
  </div>
);

export const ProductionTimer = () => {
  const [state, setState] = useState(() => getProductionState(new Date()));
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      const n = new Date();
      setNow(n);
      setState(getProductionState(n));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, state.target - now);
  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  const dateLabel = state.target.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div
      className="mt-9 rounded-2xl backdrop-blur-xl bg-black/40 border border-amber-500/25 p-6 sm:p-7"
      data-testid="production-countdown"
    >
      <div className="flex items-center gap-3">
        <span className={`w-2.5 h-2.5 rounded-full ${state.live ? "bg-amber-500 animate-ember" : "bg-stone-500"}`} />
        <p className="text-xs font-mono uppercase tracking-[0.22em] text-stone-400">
          {state.live ? "Produção acontecendo agora" : "Próxima produção ao vivo"}
        </p>
        <TimerReset className="w-4 h-4 text-amber-500/70 ml-auto" />
      </div>

      <div className="mt-5 flex items-start justify-center gap-4 sm:gap-6">
        {days > 0 && <Digit value={pad(days)} label={days === 1 ? "dia" : "dias"} />}
        <Digit value={pad(hours)} label="horas" />
        <span className="font-mono text-3xl sm:text-4xl text-amber-500/50 -mt-0.5">:</span>
        <Digit value={pad(mins)} label="min" />
        <span className="font-mono text-3xl sm:text-4xl text-amber-500/50 -mt-0.5">:</span>
        <Digit value={pad(secs)} label="seg" />
      </div>

      <p className="mt-5 text-center text-sm text-stone-400">
        {state.live ? (
          <>
            Termina hoje às <span className="text-amber-300">13h</span> — corre que dá tempo de assistir
          </>
        ) : (
          <>
            Começa <span className="text-amber-300 capitalize">{dateLabel}</span>, às{" "}
            <span className="text-amber-300">9h</span>
          </>
        )}
      </p>
    </div>
  );
};
