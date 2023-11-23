
import { createContext, useState } from "react";
import './App.css'
import MonthAndYear from './components/MonthAndYear';
import DaysContainer from './containers/DaysContainer';
export const DateContext = createContext<any>(null);

function App() {
  const currentDate = new Date();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const [date, setDate] = useState(currentDate);
  const [monthAndYear, setMonthAndYear] = useState(`${month} ${year} `);
  
  return (
    <DateContext.Provider
      value={{ date, monthAndYear, setDate, setMonthAndYear }}
    >
      <MonthAndYear />
      <DaysContainer />
    </DateContext.Provider>
  );
  
}

export default App
