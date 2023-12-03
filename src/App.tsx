import { createContext } from "react";
import "./App.css";
import MonthAndYear from "./components/MonthAndYear/MonthAndYear";
import DaysContainer from "./containers/DaysContainer/DaysContainer";
import CalendarContextProvider from "./context/CalendarContextProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Tag } from "antd";
import Tags from "./components/Tags/Tags";
export const DateContext = createContext<any>(null);
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CalendarContextProvider>
        <MonthAndYear />
        <DaysContainer />
        <Tags/>
      </CalendarContextProvider>
    </QueryClientProvider>
  );
}

export default App;
