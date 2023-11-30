import { createContext } from "react";
import "./App.css";
import MonthAndYear from "./components/MonthAndYear/MonthAndYear";
import DaysContainer from "./containers/DaysContainer/DaysContainer";
import CalendarContextProvider from "./context/CalendarContextProvider";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import EventModal from "./components/EventModal/EventModal";
export const DateContext = createContext<any>(null);

function App() {
  return (
    <CalendarContextProvider>
      {/* <BrowserRouter> */}
      <MonthAndYear />
      <DaysContainer />
      {/* <Routes> */}
      {/* <Route path="/events" element={<EventModal />} /> */}
      {/* <Route path="/events/:id" />
          <Route path="/events/:id" /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
    </CalendarContextProvider>
  );
}

export default App;
