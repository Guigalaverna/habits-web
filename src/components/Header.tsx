import {Plus} from "phosphor-react";
import habitsLogo from "../assets/Logo.svg";

export function Header() {
  return (
    <div className="w-full max-w-5xl mb-16 px-6 flex flex-col gap-16">
      <header className="w-full max-w-3xl mx-auto flex items-center justify-between">
        <img src={habitsLogo} alt="Habits" />

        <button
          type="button"
          className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:bg-violet-800 transition-colors duration-300"
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </button>
      </header>
    </div>
  );
}
