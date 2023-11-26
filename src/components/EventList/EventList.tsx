import { useContext, useEffect } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import styles from "./EventList.module.scss";
import EventDetail from "../EventDetail/EventDetail";

const EventList = () => {
  const { currentEventList } = useContext(CalendarContext);
  useEffect(() => {
    console.log(currentEventList);
  }, [currentEventList]);

  return (
    <div className={styles.container}>
      {currentEventList &&
        currentEventList.event.map((e: string, index: number) => {
          return <EventDetail e={e} key={index} index={index } />;
        })}
    </div>
  );
};

export default EventList;
