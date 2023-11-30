import styles from "./EventForm.module.scss";
export interface EventFormProps {
  register: any;
  errors: any;
  // formSubmit: (data: any) => any;
  handleSubmit: (formSubmit: any) => any;
  // handleCancel: () => any;
}
const EventForm = ({ register, errors, handleSubmit }: EventFormProps) => {
  const formSubmit = () => {
    console.log("form has been submitted");
  };
  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <div>
        <label htmlFor="eventName" className={styles.label}>
          Event Name:
        </label>
        <input
          type="text"
          placeholder="Event title"
          {...register("eventName")}
          // className={styles.input}
        />
        {errors.eventName && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="startDate" className={styles.label}>
          Start Date:
        </label>
        <input
          type="text"
          {...register("startDate")}
          // className={styles.input}
        />
        {errors.startDate && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="startTime" className={styles.label}>
          Start Time:
        </label>
        <input
          type="text"
          {...register("startDate")}
          // className={styles.input}
        />
        {errors.startDate && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="endDate" className={styles.label}>
          End Date:
        </label>
        <input
          type="text"
          {...register("endDate")}
          // className={styles.input}
        />
        {errors.endDate && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="endTime" className={styles.label}>
          End Time:
        </label>
        <input
          type="text"
          {...register("endTime")}
          // className={styles.input}
        />
        {errors.startDate && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="location" className={styles.label}>
          Location:
        </label>
        <input
          type="text"
          {...register("location")}
          // className={styles.input}
        />
        {errors.location && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="label" className={styles.label}>
          Label:
        </label>
        <input
          type="text"
          {...register("label")}
          // className={styles.input}
        />
        {errors.label && <span>This field is required</span>}
      </div>
      <div>
        <button className={styles.btn}>Save</button>
      </div>
    </form>
  );
};

export default EventForm;
