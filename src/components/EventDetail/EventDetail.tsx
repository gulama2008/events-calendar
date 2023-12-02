import styles from "./EventDetail.module.scss";
import bin from "../../assets/delete.png";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { useContext } from "react";
import { EventService } from "../../services/events-service";
import { getDateAndMonth } from "../../services/utils";

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
    eventsChange,
    setEventsChange,
  } = useContext(CalendarContext);
  // const isEventForOneDay = e.startDate == e.endDate;
  const startDateStr = getDateAndMonth(e.startDate);
  const endDateStr = getDateAndMonth(e.endDate);
  const handleShowEventDetailsModal = () => {
    setCurrentEvent(e);
    setShowEventDetailsModal(true);
    setShowEventListContainer(false);
  };

  const handleDelete = () => {
    EventService.deleteEmployeeById(e.id)
      .then(() => {
        setEventsChange(eventsChange - 1);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div key={index} className={styles.container}>
      <div className={styles.event}>
        <div className={styles.start_time}>{ e.startTime}</div>
        <div className={styles.color_block}></div>
        <div className={styles.text} onClick={handleShowEventDetailsModal}>
          {e.eventName}
        </div>
        <img
          src={bin}
          alt=""
          className={styles.delete}
          onClick={handleDelete}
        />
      </div>
      <div className={styles.time}>
        
        {startDateStr} {e.startTime} - { endDateStr} {e.endTime}
        
      </div>
    </div>
  );
};

export default EventDetail;
