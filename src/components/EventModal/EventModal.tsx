import styles from "./EventModal.module.scss"
import EventListContainer from '../../containers/EventListContainer/EventListContainer'
import NewEvent from '../NewEvent/NewEvent'
import EventDetails from '../EventDetails/EventDetails'

const EventModal = () => {
  
  return (
    
    <div className={styles.container}>
      <EventListContainer />
      <NewEvent />
      <EventDetails/>
    </div>
  )
}

export default EventModal