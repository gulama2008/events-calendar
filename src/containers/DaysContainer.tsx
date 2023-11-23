import { useContext } from "react";
import Day from "../components/Day/Day";
import styles from "./DaysContainer.module.scss";
import { CalendarContext } from "../context/CalendarContextProvider";

const DaysContainer = () => {
  const { daysArray } = useContext(CalendarContext);
  return (
    <div className={styles.container}>
      {daysArray.map((e: number) => {
        return <Day day={e} key={e} />;
      })}
    </div>
  );
};

export default DaysContainer;
