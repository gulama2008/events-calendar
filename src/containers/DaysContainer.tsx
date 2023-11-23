import React, { useContext, useEffect, useState } from "react";
import { DateContext } from "../App";
import { calculateNumOfDays, generateDaysArray } from "../services/utils";
import Day from "../components/Day/Day";
import styles from "./DaysContainer.module.scss"


const DaysContainer = () => {
  const { date, monthAndYear } = useContext(DateContext);
  // const currentNumOfDays = calculateNumOfDays(date);
  const [numOfDays, setNumOfDays] = useState<number>(0);
  const [daysArray, setDaysArray] = useState<number[]>([]);
  console.log(monthAndYear);
  useEffect(() => {
    const currentNumOfDays = calculateNumOfDays(date)
    setNumOfDays(currentNumOfDays);
    const daysArray = generateDaysArray(currentNumOfDays);
    setDaysArray(daysArray);
  }, [date]);

  return <div className={styles.container}>
    {daysArray.map(e => { 
      return <Day day={ e} key={e} />
    })}
  </div>;
};

export default DaysContainer;
