import styles from "./Day.module.scss"
export interface DayProps { 
    day: number
}
const Day = ({ day}:DayProps) => {
  return (
      <div className={styles.container}>{ day}</div>
  )
}

export default Day