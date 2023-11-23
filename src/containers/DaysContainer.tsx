import { useContext } from "react";
import Day from "../components/Day/Day";
import styles from "./DaysContainer.module.scss";
import { CalendarContext } from "../context/CalendarContextProvider";

const DaysContainer = () => {
  const { daysArray, daysArrayForPreviousMonth, daysArrayForNextMonth } =
    useContext(CalendarContext);
  
  return (
    <div className={styles.container}>
      {daysArrayForPreviousMonth.map((e: number) => {
        return <Day day={e} key={e} />;
      })}
      {daysArray.map((e: number) => {
        return <Day day={e} key={e} />;
      })}
      {daysArrayForNextMonth.map((e: number) => {
        return <Day day={e} key={e} />;
      })}
    </div>
  );
};

export default DaysContainer;
