import { useContext } from "react";
import styles from "./Day.module.scss";
import { CalendarContext } from "../../context/CalendarContextProvider";
import { getIndexOfWeek } from "../../services/utils";
import EventListModal from "../EventListModal/EventListModal";
export interface DayProps {
  day: number;
  setShowModal: (data: boolean) => unknown;
}

const Day = ({ day, setShowModal }: DayProps) => {
  const { date } = useContext(CalendarContext);
  let containerClasses = styles.container;
  if (getIndexOfWeek(date, day) === 0 || getIndexOfWeek(date, day) === 6) {
    containerClasses += ` ${styles.weekend}`;
  }

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div onClick={handleShowModal}>
      <div className={containerClasses}>{day}</div>
    </div>
  );
};

export default Day;
