import habitsLogo from "./assets/Logo.svg";

import {Header} from "./components/Header";
import {SummaryTable} from "./components/SummaryTable";

export function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Header />
      <SummaryTable />
    </div>
  );
}
