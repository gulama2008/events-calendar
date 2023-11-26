import { useContext } from "react";
import styles from "./Day.module.scss";
import { CalendarContext } from "../../context/CalendarContextProvider";
import { getDate, getIndexOfWeek } from "../../services/utils";
export interface DayProps {
  day: number;
}

const Day = ({ day }: DayProps) => {
  const { date,setDate,setShowModal } = useContext(CalendarContext);
  let containerClasses = styles.container;
  if (getIndexOfWeek(date, day) === 0 || getIndexOfWeek(date, day) === 6) {
    containerClasses += ` ${styles.weekend}`;
  }

  const handleClick = () => {
    const newDate = getDate(date, day);
    console.log(newDate);
    
    setDate(newDate);
    setShowModal(true);
  };

  return (
    <div onClick={handleClick}>
      <div className={containerClasses}>{day}</div>
    </div>
  );
};

export default Day;
