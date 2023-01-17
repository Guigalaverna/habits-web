interface HabitProps {
  completed: Number;
}

export function Habit({completed}: HabitProps) {
  return <p className="bg-zinc-900">Habit {completed}</p>;
}
