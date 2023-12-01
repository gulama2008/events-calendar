import { useForm } from "react-hook-form";
import EventForm from "../EventForm/EventForm";
import styles from "./EventDetails.module.scss";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../context/CalendarContextProvider";

const EventDetails = () => {
  const {
    date,
    events,
    setEvents,
    setCurrentEventList,
    showNewEventModal,
    setShowNewEventModal,
    setShowEventListContainer,
    showEventDetailsModal,
    setShowEventDetailsModal,
    currentEvent,
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
    values: currentEvent,
    mode: "all",
  });
  const [modalClass, setModalClass] = useState<string>();
  useEffect(() => {
    if (showEventDetailsModal) {
      setModalClass(styles.show_modal);
    } else {
      setModalClass(styles.modal);
    }
  }, [showEventDetailsModal]);
  const formSubmit = () => {
    console.log("event details form submitted");
    setShowEventDetailsModal(false);
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

export default EventDetails;
