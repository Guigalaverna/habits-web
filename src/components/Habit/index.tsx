interface HabitProps {
  completed: Number;
}

export function Habit({completed}: HabitProps) {
  return <p>Habit {completed}</p>;
}
