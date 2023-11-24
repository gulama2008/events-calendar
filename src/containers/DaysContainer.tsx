import { useContext } from "react";
import Day from "../components/Day/Day";
import styles from "./DaysContainer.module.scss";
import { CalendarContext } from "../context/CalendarContextProvider";
import DayFromOtherMonth from "../components/DayFromOtherMonth/DayFromOtherMonth";
import EventListModal from "../components/EventListModal/EventListModal";

const DaysContainer = () => {
  const {
    daysArray,
    daysArrayForPreviousMonth,
    daysArrayForNextMonth,
    dayNames,
  } = useContext(CalendarContext);

  return (
    <div>
      <div className={styles.container}>
        {dayNames.map((name: string) => {
          return <div className={styles.days}>{name}</div>;
        })}
        {daysArrayForPreviousMonth.map((e: number) => {
          return <DayFromOtherMonth day={e} key={e} />;
        })}
        {daysArray.map((e: number) => {
          return <Day day={e} key={e} />;
        })}
        {daysArrayForNextMonth.map((e: number) => {
          return <DayFromOtherMonth day={e} key={e} />;
        })}
      </div>
      <div >
        <EventListModal />
      </div>
    </div>
  );
};

export default DaysContainer;
