import { useContext, useState } from "react";
import { DateContext } from "../App";


const MonthAndYear = () => {
    const { date, setDate,monthAndYear, setMonthAndYear } =useContext(DateContext)
    // const currentDate = new Date();
    // const month = currentDate.toLocaleString("default", { month: "long" });
    // const year = currentDate.getFullYear();
    // const [date, setDate] = useState(currentDate);
    // const [monthAndYear, setMonthAndYear] = useState(`${month} ${year} `);
    const handlePrevious = () => { 
        const newDate=new Date(date.setMonth(date.getMonth() - 1));
        setDate(new Date(newDate))
        const month = newDate.toLocaleString("default", { month: "long" });
        const year = newDate.getFullYear();
        setMonthAndYear(`${month} ${year} `);
    }

    const handleNext = () => { 
        const newDate = new Date(date.setMonth(date.getMonth() + 1));
        setDate(new Date(newDate));
        const month = newDate.toLocaleString("default", { month: "long" });
        const year = newDate.getFullYear();
        setMonthAndYear(`${month} ${year} `);
    }

    

  return (
    <div>
      <button onClick={handlePrevious}>previous</button>
      <div>{monthAndYear}</div>
      <button onClick={handleNext}>next</button>
    </div>
  );
}

export default MonthAndYear