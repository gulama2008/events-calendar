import { useContext, useEffect, useState } from "react";
import styles from "./Day.module.scss";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { getDate, getIndexOfWeek } from "../../services/utils";
export interface DayProps {
  day: number;
}

const Day = ({ day }: DayProps) => {
  const { date, setDate, setShowModal, events,setCurrentEventList } = useContext(CalendarContext);
  // const currentDate = getDate(date, day);
  // const [currentDate, setCurrentDate] = useState();
  const [eventsForCurrentDate, setEventForCurrentDate] = useState<any>();
  let containerClasses = styles.container;
  if (getIndexOfWeek(date, day) === 0 || getIndexOfWeek(date, day) === 6) {
    containerClasses += ` ${styles.weekend}`;
  }
  useEffect(() => {
    const currentDate = getDate(date, day);
    setEventForCurrentDate(null);
    const eventsForCurrentDate = events.find((event: Event) => {
      return event.date === currentDate.toString();
    });
    
    if (eventsForCurrentDate) {
      setEventForCurrentDate(eventsForCurrentDate);
    }
  }, [events,date]);

  const handleClick = () => {
    const newDate = getDate(date, day);
    setDate(newDate);
    setShowModal(true);
    setCurrentEventList(eventsForCurrentDate);
  };

  return (
    <div onClick={handleClick} className={containerClasses}>
      <div className={styles.day}>{day}</div>
      <div className={styles.event_container}>
        {eventsForCurrentDate &&
          eventsForCurrentDate.event.map((e: string) => {
            return <div className={styles.event}>{e}</div>;
          })}
      </div>
    </div>
  );
};

export default Day;
