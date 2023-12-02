import styles from "./Timer.module.scss";
export interface TimerProps {
  countDownDays: string;
  countDownHours: string;
  countDownMinutes: string;
  countDownSeconds: string;
}
const Timer = ({
  countDownDays,
  countDownHours,
  countDownMinutes,
  countDownSeconds,
}: TimerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>The event will start in: </div>
      <div className={styles.timer}>
        <div className={styles.timer_section}>
          <div className={styles.time}>{countDownDays}</div>
          <div className={styles.text}>Days</div>
        </div>
        <div className={styles.timer_section}>
          <div className={styles.time}>{countDownHours}</div>
          <div className={styles.text}>Hours</div>
        </div>
        <div className={styles.timer_section}>
          <div className={styles.time}>{countDownMinutes}</div>
          <div className={styles.text}>Minutes</div>
        </div>
        <div className={styles.timer_section}>
          <div className={styles.time}>{countDownSeconds}</div>
          <div className={styles.text}>Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
