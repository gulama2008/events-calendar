import { useContext, useEffect, useState } from "react";
import EventList from "../../components/EventList/EventList";
import add from "../../assets/add.png";
import styles from "./EventListContainer.module.scss";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { checkIfInDateRange } from "../../services/utils";
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const EventListContainer = () => {
  const {
    date,
    setShowModal,
    showEventListContainer,
    setShowEventListContainer,
    setShowNewEventModal,
    events,
    setCurrentEventList,
  } = useContext(CalendarContext);
  

  const handleCloseModal = (e: any) => {
    e.preventDefault();
    setShowModal(false);
    setShowEventListContainer(false);
  };

  const handleShowNewEventModal = () => {
    // setShowEventListContainer(false);
    setShowNewEventModal(true);
    setShowEventListContainer(false);
  };

  const getEventsOnCurrentDate = () => {
    const eventsOnCurrentDate = events?.filter((e: Event) => {
      const startDate = e.startDate;
      const endDate = e.endDate;
      // checkIfInDateRange(date, startDate, endDate);
      return checkIfInDateRange(date, startDate, endDate);
    });
    setCurrentEventList(eventsOnCurrentDate);
  };
  const [modalClass, setModalClass] = useState<string>("");
  useEffect(() => {
    if (showEventListContainer) {
      setModalClass(styles.show_modal);
    } else {
      setModalClass(styles.modal);
    }
  }, [showEventListContainer]);
  
  useEffect(() => {
    console.log('get new list for current date');
    
    getEventsOnCurrentDate();
  }, [events, showEventListContainer]);

  return (
    <div className={modalClass}>
      <div className={styles.date}>
        {date.toLocaleDateString("en-GB", options)}
      </div>

      <EventList />
      <img
        src={add}
        alt=""
        className={styles.add}
        onClick={handleShowNewEventModal}
      />
      <button onClick={handleCloseModal} className={styles.btn}>
        Close
      </button>
    </div>
  );
};

export default EventListContainer;
