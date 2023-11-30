import { useForm } from "react-hook-form";
import EventForm from "../EventForm/EventForm";
import styles from "./EventDetails.module.scss";


const EventDetails = () => {
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
  return (
    <EventForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
    />
  );
};

export default EventDetails;
