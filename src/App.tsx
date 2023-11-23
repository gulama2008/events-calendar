import { createContext } from "react";
import "./App.css";
import MonthAndYear from "./components/MonthAndYear/MonthAndYear";
import DaysContainer from "./containers/DaysContainer";
import CalendarContextProvider from "./context/CalendarContextProvider";
export const DateContext = createContext<any>(null);

function App() {
  return (
    <CalendarContextProvider>
      <MonthAndYear />
      <DaysContainer />
    </CalendarContextProvider>
  );
}

export default App;
