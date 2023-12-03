import { useContext, useEffect, useState } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import styles from "./NewEvent.module.scss";
import { useForm } from "react-hook-form";
import EventForm from "../EventForm/EventForm";
import { EventService } from "../../services/events-service";
import { convertDateToString } from "../../services/utils";

const NewEvent = () => {
  const {
    date,
    showNewEventModal,
    setShowNewEventModal,
    setShowEventListContainer,
    eventsChange,
    setEventsChange,
    defaultDateStr,
    // setDefaultDateStr,
    setCurrentTags
  } = useContext(CalendarContext);
  console.log(defaultDateStr);
  const test = defaultDateStr;
  console.log(test);
  
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
  // useEffect(() => { 
  //   const defaultDateStr = convertDateToString(date);
  //   setDefaultDateStr(defaultDateStr);
  // },[date])
  useEffect(() => {
    if (showNewEventModal) {
      setModalClass(styles.show_modal);
    } else {
      setModalClass(styles.modal);
    }
  }, [showNewEventModal]);

  const formSubmit = (data: Event) => {
    console.log(data);
    
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
