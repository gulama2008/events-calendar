import { useContext, useEffect, useState } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import styles from "./NewEvent.module.scss";
import { useForm } from "react-hook-form";
import EventForm from "../EventForm/EventForm";
import { EventService } from "../../services/events-service";

const NewEvent = () => {
  const {
    showNewEventModal,
    setShowNewEventModal,
    setShowEventListContainer,
    eventsChange,
    setEventsChange,
    defaultDateStr,
    setCurrentTags
  } = useContext(CalendarContext);
  
  const {
    register,
    handleSubmit,
    setValue,
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
  const [modalClass, setModalClass] = useState<string>("");
  useEffect(() => { },[defaultDateStr])
  useEffect(() => { setCurrentTags([]) }, [])
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
        setEventsChange(eventsChange + 1);
        setShowEventListContainer(true);
        
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
        setValue={setValue}
        dateValue={defaultDateStr}
      />
    </div>
  );
};

export default NewEvent;
