import NewEvent from '../NewEvent/NewEvent'
import EventList from '../EventList/EventList'
import { useContext } from 'react'
import { CalendarContext } from '../../context/CalendarContextProvider'
import styles from "./EventModal.module.scss"
const EventModal = () => {
  const { setShowModal}=useContext(CalendarContext)
  const handleCloseModal = (e:any) => {
    e.preventDefault();
    setShowModal(false);
  }
  return (
    <div className={styles.container}>
      <NewEvent  />
      <EventList />
      <button onClick={handleCloseModal} className={styles.btn}>Close</button>
    </div>
  )
}

export default EventModal