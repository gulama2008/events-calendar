import { createContext } from "react";
import "./App.css";
import MonthAndYear from "./components/MonthAndYear/MonthAndYear";
import DaysContainer from "./containers/DaysContainer/DaysContainer";
import CalendarContextProvider from "./context/CalendarContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Filter from "./components/Filter/Filter";
import FilterContainer from "./containers/FilterContainer/FilterContainer";
export const DateContext = createContext<any>(null);
const queryClient = new QueryClient();
function App() {
  const test = ["a", "b", "c"];
  return (
    <QueryClientProvider client={queryClient}>
      <CalendarContextProvider>
        <div id="headerContainer">
          <MonthAndYear />
          <FilterContainer />
        </div>
        <DaysContainer />
      </CalendarContextProvider>
    </QueryClientProvider>
  );
}

export default App;
