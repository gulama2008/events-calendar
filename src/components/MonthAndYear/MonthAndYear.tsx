import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContextProvider";

const MonthAndYear = () => {
  const { date, setDate, monthAndYear, setMonthAndYear } =
    useContext(CalendarContext);
  const handlePrevious = () => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(new Date(newDate));
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.getFullYear();
    setMonthAndYear(`${month} ${year} `);
  };

  const handleNext = () => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(new Date(newDate));
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.getFullYear();
    setMonthAndYear(`${month} ${year} `);
  };

  return (
    <div>
      <button onClick={handlePrevious}>previous</button>
      <div>{monthAndYear}</div>
      <button onClick={handleNext}>next</button>
    </div>
  );
};

export default MonthAndYear;
