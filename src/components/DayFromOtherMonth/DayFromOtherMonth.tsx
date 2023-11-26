import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContextProvider";
import { DayProps } from "../Day/Day";
import styles from "./DayFromOtherMonth.module.scss";
import { getIndexOfWeekForOtherMonth } from "../../services/utils";

const DayFromOtherMonth = ({ day }: DayProps) => {
  const { date } = useContext(CalendarContext);
  let containerClasses = styles.container;
  if (
    getIndexOfWeekForOtherMonth(date, day) === 0 ||
    getIndexOfWeekForOtherMonth(date, day) === 6
  ) {
    containerClasses += ` ${styles.weekend}`;
  }

  return (
    <div className={containerClasses}>
      <div className={styles.day}>{day}</div>
      {/* {eventsForCurrentDate &&
        eventsForCurrentDate.event.map((e: string) => {
          return <div className={styles.event}>{e}</div>;
        })} */}
    </div>
  );
};

export default DayFromOtherMonth;
