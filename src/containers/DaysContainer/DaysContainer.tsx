import { useContext, useEffect, useState } from "react";
import Day from "../../components/Day/Day";
import styles from "./DaysContainer.module.scss";
import { CalendarContext } from "../../context/CalendarContextProvider";
import DayFromOtherMonth from "../../components/DayFromOtherMonth/DayFromOtherMonth";
import EventModal from "../../components/EventModal/EventModal";


const DaysContainer = () => {
  const {
    date,
    events,
    daysArray,
    daysArrayForPreviousMonth,
    daysArrayForNextMonth,
    dayNames,
    showModal,
    currentEventList,
    setShowEventListContainer,
    // setShowModal,
  } = useContext(CalendarContext);
  const [calendarContainerClass, setCalendarContainerClass] =
    useState<string>();
  const [modalClass, setModalClass] = useState<string>();
  

  useEffect(() => {
    if (showModal) {
      console.log(currentEventList);
      setShowEventListContainer(true);
      setModalClass(styles.show_modal);
      setCalendarContainerClass(styles.calendar_container_opacity);
    } else {
      setModalClass(styles.modal);
      setCalendarContainerClass(styles.calendar_container);
    }
  }, [showModal]);

  return (
    <div className={styles.container}>
      <div className={calendarContainerClass}>
        {dayNames.map((name: string) => {
          return <div className={styles.days}>{name}</div>;
        })}
        {daysArrayForPreviousMonth.map((e: number) => {
          return <DayFromOtherMonth day={e} key={e} />;
        })}
        {daysArray.map((e: number) => {
          return <Day day={e} key={e} />;
        })}
        {daysArrayForNextMonth.map((e: number) => {
          return <DayFromOtherMonth day={e} key={e} />;
        })}
      </div>
      <div className={modalClass}>
        <EventModal />
      </div>
    </div>
  );
};

export default DaysContainer;
