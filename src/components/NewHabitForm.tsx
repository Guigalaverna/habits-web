import * as Checkbox from "@radix-ui/react-checkbox";
import {Check} from "phosphor-react";
import {FormEvent, useState} from "react";
import {api} from "../lib/api";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function NewHabitForm() {
  const [title, setTitle] = useState<string>();
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays(prevState => [
        ...prevState.filter(weekDay => weekDay !== weekDayIndex),
      ]);
    } else {
      setWeekDays(prevState => [...prevState, weekDayIndex]);
    }
  }

  async function createNewHabit(e: FormEvent) {
    e.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    console.log(title, weekDays);

    await api.post("habits/create", {
      title,
      weekDays,
    });

    setTitle("");
    setWeekDays([]);

    alert("Hábito criado");
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight mb-4">
        Qual é o seu comprometimento?
      </label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="p-4 rounded-lg mt3 bg-zinc-800 text-white placeholder:text-zinc-400"
        placeholder="Ex: Dormir bem, exercícios, etc.."
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual é a recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay, i) => (
          <Checkbox.Root
            key={`${weekDay}-${i}`}
            className="flex items-center gap-3 group"
            checked={weekDays.includes(i)}
            onCheckedChange={() => handleToggleWeekDay(i)}
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 transition-all border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-600">
              <Checkbox.Indicator>
                <Check size={20} className="fill-white" />
              </Checkbox.Indicator>
            </div>

            <span className="font-medium text-white leading-tight">
              {weekDay}
            </span>
          </Checkbox.Root>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500 transition-colors"
      >
        <Check size={20} weight="bold" /> Confirmar
      </button>
    </form>
  );
}
