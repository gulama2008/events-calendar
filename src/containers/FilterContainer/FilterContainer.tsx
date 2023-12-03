import { useContext, useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import { CalendarContext } from "../../context/CalendarContextProvider";
import { getLabelArray, getLocationArray } from "../../services/utils";
import { useForm } from "react-hook-form";
import styles from "./FilterContainer.module.scss"

const FilterContainer = () => {
  const {
    register,
    handleSubmit,
      formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      location: "all",
      label: "all",
    },
    mode: "all",
  });
  const { events,setFilters } = useContext(CalendarContext);
  const [locations, setLocations] = useState<string[]>([]);
  const [labels, setLabels] = useState<string[]>([]);
  useEffect(() => {
    const locationArr = getLocationArray(events);
    const labelArr = getLabelArray(events);
    setLocations(locationArr);
    setLabels(labelArr);
  }, [events]);
    const formSubmit = (data:any) => { 
        console.log(data);
        setFilters(data);
        
    }

    return (
      <form onSubmit={handleSubmit(formSubmit)} className={styles.container}>
        <div className={styles.filter_container}>
          <div className={styles.text}>Location:</div>
          <Filter
            options={locations}
            register={register}
            name="location"
            errors={errors}
          />
        </div>
        <div className={styles.filter_container}>
          <div className={styles.text}>Label:</div>
          <Filter
            options={labels}
            register={register}
            name="label"
            errors={errors}
          />
        </div>
        <button className={styles.btn}>Filter</button>
        <button onClick={() => reset()} className={styles.btn}>
          Clear
        </button>
      </form>
    );
};

export default FilterContainer;
