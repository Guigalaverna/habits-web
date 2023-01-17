interface HabitProps {
  completed: Number;
}

export function Habit({completed}: HabitProps) {
  return <p className="bg-zinc-400">{completed}</p>;
}
