import { createContext, useState } from "react";

// export interface DateContextValueProps { 
    
// }
export const DateContext = createContext<any>(null);


const DateContextProvider = ({ children}) => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    const [date, setDate] = useState(currentDate);
    const [monthAndYear, setMonthAndYear] = useState(`${month} ${year} `);
  return (
    <DateContext.Provider
      value={{ date, monthAndYear, setDate, setMonthAndYear}}
    >
      {children}
    </DateContext.Provider>
  );
}

export default DateContextProvider