import styles from "./EventDetail.module.scss";
import bin from "../../assets/delete.png";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { useContext } from "react";
import { saveEventsToLocalStorage } from "../../services/utils";

export interface EventDetailProps {
  e: Event;
  index: number;
}

const EventDetail = ({ e, index }: EventDetailProps) => {
  const {
    events,
    setEvents,
    currentEventList,
    setCurrentEventList,
    setShowEventDetailsModal,
    setShowEventListContainer,
    setCurrentEvent,
  } = useContext(CalendarContext);

  const handleShowEventDetailsModal = () => {
    console.log(e);
    
    setCurrentEvent(e);
    setShowEventDetailsModal(true);
    setShowEventListContainer(false);
  };
  // const handleDelete = () => {
  //   const list: string[] = currentEventList.event;
  //   list.splice(index, 1);
  //   const newCurrentEventList = {
  //     ...currentEventList,
  //     event: list,
  //   };
  //   setCurrentEventList(newCurrentEventList);
  //   const newEvents = events.map((e: Event) => {
  //     if (e.date == newCurrentEventList.date) {
  //       e.event = newCurrentEventList.event;
  //       return e;
  //     } else {
  //       return e;
  //     }
  //   });
  //   setEvents(newEvents);
  //   saveEventsToLocalStorage(newEvents);
  // };
  return (
    <div className={styles.event} key={index}>
      <div className={styles.color_block}></div>
      <div className={styles.text} onClick={handleShowEventDetailsModal}>
        {e.eventName}
      </div>
      <img src={bin} alt="" className={styles.delete} />
    </div>
  );
};

export default EventDetail;
