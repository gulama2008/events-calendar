import NewEvent from '../NewEvent/NewEvent'
import EventList from '../EventList/EventList'
import { useContext } from 'react'
import { CalendarContext } from '../../context/CalendarContextProvider'

const EventModal = () => {
  const { setShowModal}=useContext(CalendarContext)
  const handleCloseModal = (e:any) => {
    e.preventDefault();
    setShowModal(false);
  }
  return (
    <div>
      <NewEvent  />
      <EventList />
      <button onClick={handleCloseModal}>Close</button>
    </div>
  )
}

export default EventModal