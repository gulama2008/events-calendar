import { useContext, useEffect, useState } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { getEventsFromLocalStorage, saveEventsToLocalStorage } from "../../services/utils";
import styles from "./NewEvent.module.scss";
import { useForm } from "react-hook-form";
import EventDetails from "../EventDetails/EventDetails";
import EventForm from "../EventForm/EventForm";

const NewEvent = () => {
  const {
    date,
    events,
    setEvents,
    setCurrentEventList,
    showNewEventModal,
    setShowNewEventModal,
    setShowEventListContainer,
  } = useContext(CalendarContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      eventName: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      location: "",
      label: "",
    },
    mode: "all",
  });
  const [modalClass, setModalClass] = useState<string>();
  useEffect(() => {
    if (showNewEventModal) {
      setModalClass(styles.show_modal);
    } else {
      setModalClass(styles.modal);
    }
  }, [showNewEventModal]);
  // const [eventTitle, setEventTitle] = useState<string>("");
  // const handleEventTitleChange = (e: any) => {
  //   setEventTitle(e.target.value);
  // };
  const handleSaveEvent = (data: Event) => {
    // let newEvents = [];
    // const event = events.find((e: Event) => e.date == data.date);
    // if (!event) {
    //   newEvents = [...events, { date: date.toString(), event: [eventTitle] }];
    //   setCurrentEventList({ date: date.toString(), event: [eventTitle] });
    // } else {
    //   newEvents = events.map((e: Event) => {
    //     if (e.date == date) {
    //       e.event.push(eventTitle);
    //       setCurrentEventList(e);
    //       return e;
    //     } else {
    //       return e;
    //     }
    //   });
    // }
    console.log(data);
    const events = getEventsFromLocalStorage();
    events.push(data);
    setEvents(events);
    saveEventsToLocalStorage(events);
  }
  //   setEvents(newEvents);
  //   saveEventsToLocalStorage(newEvents);
  //   setEventTitle("");
  // };

  // return (
  //   <div className={styles.container}>
  //     <form action="" className={styles.form}>
  //       <input
  //         type="text"
  //         placeholder="Event title"
  //         value={eventTitle}
  //         onChange={handleEventTitleChange}
  //         className={styles.input}
  //       />
  //       <div>
  //         <button onClick={handleSaveEvent} className={styles.btn}>
  //           Save
  //         </button>
  //       </div>
  //     </form>
  //   </div>
  // );
  const formSubmit = (data: any) => {
    console.log("new event form submitted");
    handleSaveEvent(data);
    setShowNewEventModal(false);
    setShowEventListContainer(true);
  };
  return (
    <div className={modalClass}>
      <EventForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        formSubmit={formSubmit}
      />
    </div>
  );
};

export default NewEvent;
