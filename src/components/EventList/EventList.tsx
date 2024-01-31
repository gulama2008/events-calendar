import { useContext, useEffect } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import styles from "./EventList.module.scss";
import EventDetail from "../EventDetail/EventDetail";

const EventList = () => {
  
  const { currentEventList } = useContext(CalendarContext);
  useEffect(() => {
    console.log('event list update');
    console.log(currentEventList);
    

  }, [currentEventList]);

  return (
    <div className={styles.container}>
      {currentEventList &&
        currentEventList.map((e:Event, index: number) => {
          // return <EventDetails e={e} key={index} index={index } />;
          return (
            <EventDetail e={e} index={index}/>
          )
        })}
    </div>
  );
};

export default EventList;
