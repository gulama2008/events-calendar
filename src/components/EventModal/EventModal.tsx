// import EventList from '../EventList/EventList'
import { useContext } from 'react'
import { CalendarContext } from '../../context/CalendarContextProvider'
import styles from "./EventModal.module.scss"
// import add from "../../assets/add.png"
import EventListContainer from '../../containers/EventListContainer/EventListContainer'
import NewEvent from '../NewEvent/NewEvent'
import EventDetails from '../EventDetails/EventDetails'
// const options = {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// };
const EventModal = () => {
  // const { date,setShowModal,setShowNewEventModal}=useContext(CalendarContext)
  // const handleCloseModal = (e:any) => {
  //   e.preventDefault();
  //   setShowModal(false);
  // }

  // const handleAddNewEvent = () => { 
  //   setShowModal(false);
  //   setShowNewEventModal(true);
  // }
  return (
    
    <div className={styles.container}>
      {/* <div>{date.toLocaleDateString("en-GB",options)}</div> */}
      
      <EventListContainer />
      <NewEvent />
      <EventDetails/>
      {/* <img src={add} alt="" className={ styles.add} onClick={handleCloseModal}/>
      <button onClick={handleCloseModal} className={styles.btn}>Close</button> */}
    </div>
  )
}

export default EventModal