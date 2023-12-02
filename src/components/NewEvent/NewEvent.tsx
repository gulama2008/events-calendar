import { useContext, useEffect, useState } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import {
  convertDateToString,
  getEventsFromLocalStorage,
  saveEventsToLocalStorage,
} from "../../services/utils";
import styles from "./NewEvent.module.scss";
import { useForm } from "react-hook-form";
import EventDetails from "../EventDetails/EventDetails";
import EventForm from "../EventForm/EventForm";
import { EventService } from "../../services/events-service";

const NewEvent = () => {
  const {
    date,
    events,
    setEvents,
    setCurrentEventList,
    showNewEventModal,
    setShowNewEventModal,
    setShowEventListContainer,
    eventsChange,
    setEventsChange,
    defaultDateStr,
  } = useContext(CalendarContext);
  console.log(defaultDateStr);
  const test = "2023-12-10";
  console.log(test);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      eventName: "",
      startDate: defaultDateStr,
      startTime: "",
      endDate: test,
      endTime: "",
      location: "",
      label: "",
    },
    mode: "all",
  });
  const [modalClass, setModalClass] = useState<string>("2023-12-10");
  useEffect(() => {
    if (showNewEventModal) {
      setModalClass(styles.show_modal);
    } else {
      setModalClass(styles.modal);
    }
  }, [showNewEventModal]);

  const formSubmit = (data: Event) => {
    EventService.createEvent(data)
      .then(() => {
        setShowNewEventModal(false);
        setShowEventListContainer(true);
        setEventsChange(eventsChange + 1);
      })
      .catch((e) => console.log(e));
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    setShowEventListContainer(true);
    setShowNewEventModal(false);
  };

  return (
    <div className={modalClass}>
      <EventForm
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        formSubmit={formSubmit}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default NewEvent;
