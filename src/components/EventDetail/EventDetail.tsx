import styles from "./EventDetail.module.scss";
import bin from "../../assets/delete.png";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { useContext } from "react";
import { saveEventsToLocalStorage } from "../../services/utils";

export interface EventDetailProps {
    e: string;
    index:number
}

const EventDetail = ({ e,index }: EventDetailProps) => {
  const { events, setEvents, currentEventList, setCurrentEventList } =
    useContext(CalendarContext);

  const handleDelete = () => {
    const list: string[] = currentEventList.event;
    list.splice(index, 1);
    const newCurrentEventList = {
      ...currentEventList,
      event: list,
    };
    setCurrentEventList(newCurrentEventList);
    const newEvents = events.map((e: Event) => {
      if (e.date == newCurrentEventList.date) {
        e.event = newCurrentEventList.event;
        return e;
      } else {
        return e;
      }
    });
    setEvents(newEvents);
    saveEventsToLocalStorage(newEvents);
  };
  return (
    <div className={styles.event} key={index}>
      <div className={styles.color_block}></div>
      <div className={styles.text}>{e}</div>
      <img src={bin} alt="" className={styles.delete} onClick={handleDelete} />
    </div>
  );
};

export default EventDetail;
