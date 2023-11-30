import { useContext } from "react";
import EventList from "../../components/EventList/EventList";
import add from "../../assets/add.png";
import styles from "./EventListContainer.module.scss";
import { CalendarContext } from "../../context/CalendarContextProvider";
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const EventListContainer = () => {
    const { date, setShowModal, setShowNewEventModal } =
        useContext(CalendarContext);
    
    const handleCloseModal = (e: any) => {
      e.preventDefault();
      setShowModal(false);
    };

  return (
    <div>
      <div>{date.toLocaleDateString("en-GB", options)}</div>

      <EventList />
      <img src={add} alt="" className={styles.add} onClick={handleCloseModal} />
      <button onClick={handleCloseModal} className={styles.btn}>
        Close
      </button>
    </div>
  );
}

export default EventListContainer