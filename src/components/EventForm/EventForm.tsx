import styles from "./EventForm.module.scss";
import arrow from "../../assets/arrow.png";
import Tags from "../Tags/Tags";
import tag from "../../assets/tag.png"
import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContextProvider";
export interface EventFormProps {
  register: any;
  errors: any;
  formSubmit: (data: any) => any;
  handleSubmit: (formSubmit: any) => any;
  handleCancel: (e: any) => any;
  setValue?: (e1: any, e2: any, e3: any) => any;
  dateValue?: string;
}
const EventForm = ({
  register,
  errors,
  handleSubmit,
  formSubmit,
  handleCancel,
  setValue,
  dateValue
}: EventFormProps) => {
  const { currentTags } = useContext(CalendarContext);
  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <div>
        {/* <label htmlFor="eventName" className={styles.label}>
          Event Name:
        </label> */}
        <input
          type="text"
          placeholder="Event title"
          {...register("eventName")}
          className={styles.name}
        />
        {errors.eventName && <span>This field is required</span>}
      </div>
      <div className={styles.date_time_container}>
        <div className={styles.date_time}>
          <div className={styles.date}>
            <label htmlFor="startDate" className={styles.label}>
              Start Date:
            </label>
            <input
              type="date"
              {...register("startDate")}
              value={dateValue}
              // className={styles.input}
              // defaultValue={defaultDateStr}
              className={styles.date_picker}
            />
            {errors.startDate && <span>This field is required</span>}
          </div>
          <div className={styles.time}>
            <label htmlFor="startTime" className={styles.label}>
              Start Time:
            </label>
            <input
              type="time"
              {...register("startTime")}
              className={styles.time_input}
            />
            {errors.startDate && <span>This field is required</span>}
          </div>
        </div>
        <div>
          <img src={arrow} alt="" className={styles.arrow} />
        </div>
        <div className={styles.date_time}>
          <div className={styles.date}>
            <label htmlFor="endDate" className={styles.label}>
              End Date:
            </label>
            <input
              type="date"
              {...register("endDate")}
              value={dateValue}
              className={styles.date_picker}
            />
            {errors.endDate && <span>This field is required</span>}
          </div>
          <div className={styles.time}>
            <label htmlFor="endTime" className={styles.label}>
              End Time:
            </label>
            <input
              type="time"
              {...register("endTime")}
              className={styles.time_input}
            />
            {errors.startDate && <span>This field is required</span>}
          </div>
        </div>
      </div>

      <div className={styles.location_container}>
        <label htmlFor="location" className={styles.label}>
          Location:
        </label>
        <input type="text" {...register("location")} className={styles.input} />
        {errors.location && <span>This field is required</span>}
      </div>
      {/* <div className={styles.label_container}>
        <label htmlFor="label" className={styles.label}>
          Label:
        </label>
        <input type="text" {...register("label")} className={styles.input} />
        {errors.label && <span>This field is required</span>}
      </div> */}
      <div className={styles.label_container}>
        <img src={tag} alt="" className={styles.tag_icon} />
        <Tags />
      </div>
      <input type="hidden" value={currentTags} {...register("label")} />
      <div className={styles.btn_container}>
        <button
          className={styles.btn_save}
          onClick={() => {
            setValue &&
              setValue("label", currentTags, {
                shouldValidate: true,
                shouldDirty: true,
              });
          }}
        >
          Save
        </button>
        <button onClick={handleCancel} className={styles.btn_cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EventForm;
