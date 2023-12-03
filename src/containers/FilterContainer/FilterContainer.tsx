import React, { useContext, useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import { CalendarContext } from "../../context/CalendarContextProvider";
import { getLabelArray, getLocationArray } from "../../services/utils";
import { useForm } from "react-hook-form";

const FilterContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>
        <div>By Location:</div>
        <Filter options={locations} register={register} name="location" errors={errors}/>
      </div>
      <div>
        <div>By Label:</div>
        <Filter options={labels} register={register} name="label" errors={errors}/>
          </div>
          <button>Filter</button>
    </form>
  );
};

export default FilterContainer;
