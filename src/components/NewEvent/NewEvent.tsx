import { useContext, useState } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { saveEventsToLocalStorage } from "../../services/utils";

const NewEvent = () => {
  const { date, events, setEvents } = useContext(CalendarContext);
  const [eventTitle, setEventTitle] = useState<string>("");
  const handleEventTitleChange = (e: any) => {
    setEventTitle(e.target.value);
  };
  const handleSaveEvent = (e: any) => {
    e.preventDefault();
    let newEvents = [];
    const event = events.find((e: Event) => e.date == date);
    if (!event) {
      newEvents = [...events, { date: date.toString(), event: [eventTitle] }];
    } else {
      newEvents = events.map((e: Event) => {
        if (e.date == date) {
          e.event.push(eventTitle);
          return e;
        } else {
          return e;
        }
      });
    }
      console.log(newEvents);
      
    setEvents(newEvents);
    saveEventsToLocalStorage(newEvents);
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Event title"
          value={eventTitle}
          onChange={handleEventTitleChange}
        />
        <button onClick={handleSaveEvent}>Save</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default NewEvent;
