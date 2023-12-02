import { useForm } from "react-hook-form";
import EventForm from "../EventForm/EventForm";
import styles from "./EventDetails.module.scss";
import { useContext, useEffect, useState } from "react";
import { CalendarContext, Event } from "../../context/CalendarContextProvider";
import { EventService } from "../../services/events-service";
import { countDown } from "../../services/utils";
import Timer from "../Timer/Timer";

const EventDetails = () => {
  const {
    date,
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
  const [countDownDays, setCountDownDays] = useState<string>("");
  const [countDownHours, setCountDownHours] = useState<string>("");
  const [countDownMinutes, setCountDownMinutes] = useState<string>("");
  const [countDownSeconds, setCountDownSeconds] = useState<string>("");
  const [showCountDown, setShowCountDown] = useState<boolean>(true);
  useEffect(() => {
    if (showEventDetailsModal) {
      setModalClass(styles.show_modal);
    } else {
      setModalClass(styles.modal);
    }
  }, [showEventDetailsModal]);
  const formSubmit = (data: Event) => {
    EventService.updateEventById(currentEvent.id, data)
      .then((res) => console.log(res))
      .catch((e) => {
        console.log(e);
      });
    setShowEventDetailsModal(false);
    setShowEventListContainer(true);
  };

  const handleCancel = (e: any) => {
    e.preventDefault();
    setShowEventDetailsModal(false);
    setShowEventListContainer(true);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const countDownTime = countDown(date);
      setCountDownDays(countDownTime[0]);
      setCountDownHours(countDownTime[1]);
      setCountDownMinutes(countDownTime[2]);
      setCountDownSeconds(countDownTime[3]);
    }, 1000);
    return () => clearInterval(interval);
  }, [date, countDownSeconds]);
  
  useEffect(() => {
    if (parseInt(countDownSeconds) >= 0) {
      setShowCountDown(true);
    } else {
      setShowCountDown(false);
    }
  }, [countDownSeconds]);
  return (
    <div className={modalClass}>
      <div className={styles.form}>
        <EventForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          formSubmit={formSubmit}
          handleCancel={handleCancel}
        />
      </div>
      {showCountDown ? <Timer countDownDays={ countDownDays} countDownHours={countDownHours} countDownMinutes={countDownMinutes} countDownSeconds={countDownSeconds} />: (
        <div>Event Ends</div>
      )}
    </div>
  );
};

export default EventDetails;
