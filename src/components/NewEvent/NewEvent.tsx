import { useContext, useState } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { saveEventsToLocalStorage } from "../../services/utils";
import styles from "./NewEvent.module.scss";
import { useForm } from "react-hook-form";
import EventDetails from "../EventDetails/EventDetails";
import EventForm from "../EventForm/EventForm";

const NewEvent = () => {
  // const { date, events, setEvents, setCurrentEventList } =
  //   useContext(CalendarContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      type: "",
      startDateDay: "",
      startDateMonth: "",
      startDateYear: "",
      finishDateDay: "",
      finishDateMonth: "",
      finishDateYear: "",
      onGoing: "",
      basis: "",
      hoursPerWeek: "",
    },
    mode: "all",
  });

  // const [eventTitle, setEventTitle] = useState<string>("");
  // const handleEventTitleChange = (e: any) => {
  //   setEventTitle(e.target.value);
  // };
  // const handleSaveEvent = (e: any) => {
  //   e.preventDefault();
  //   let newEvents = [];
  //   const event = events.find((e: Event) => e.date == date);
  //   if (!event) {
  //     newEvents = [...events, { date: date.toString(), event: [eventTitle] }];
  //     setCurrentEventList({ date: date.toString(), event: [eventTitle] });
  //   } else {
  //     newEvents = events.map((e: Event) => {
  //       if (e.date == date) {
  //         e.event.push(eventTitle);
  //         setCurrentEventList(e);
  //         return e;
  //       } else {
  //         return e;
  //       }
  //     });
  //   }
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
  return (
    <div>
      <EventForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default NewEvent;
