import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../context/CalendarContextProvider";
import styles from "./MonthAndYear.module.scss";
import previous from "../../assets/arrow-left-icon.png";
import next from "../../assets/arrow-right-icon.png";
const MonthAndYear = () => {
  const { date, setDate, monthAndYear, setMonthAndYear, showModal } =
    useContext(CalendarContext);
  const [containerClass, setContainerClass] = useState<string>();
  useEffect(() => {
    if (showModal) {
      setContainerClass(styles.container_opacity);
    } else {
      setContainerClass(styles.container);
    }
  }, [showModal]);
  const handlePrevious = () => {
    const newDate = new Date(date.setMonth(date.getMonth() - 1));
    setDate(new Date(newDate));
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.getFullYear();
    setMonthAndYear(`${month} ${year} `);
  };

  const handleNext = () => {
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    setDate(new Date(newDate));
    const month = newDate.toLocaleString("default", { month: "long" });
    const year = newDate.getFullYear();
    setMonthAndYear(`${month} ${year} `);
  };

  return (
    <div className={containerClass}>
      <img src={previous} onClick={handlePrevious} className={styles.arrow} />
      <div className={styles.text}>{monthAndYear}</div>
      <img src={next} onClick={handleNext} className={styles.arrow} />
    </div>
  );
};

export default MonthAndYear;
